import { 
    PageComponent, ElementType, NavbarProps, HeroProps, FeaturesProps, 
    CtaProps, BannerProps, FooterProps, NavbarItem, AboutProps,
    SeparatorProps, CarouselProps
} from '../types';

export const generateNavbarYaml = (props: NavbarProps): string => {
  const indent = (level: number) => '  '.repeat(level);

  const formatItems = (items: NavbarItem[], level: number) => {
    return items.map(item => {
      let itemYaml = `${indent(level)}- `;
      if (item.type === 'icon' && item.icon) {
        itemYaml += `icon: ${item.icon}\n${indent(level+1)}href: ${item.href}`;
      } else {
        itemYaml += `text: "${item.text || ''}"\n${indent(level+1)}href: ${item.href}`;
      }
      return itemYaml;
    }).join('\n');
  };

  let yaml = `navbar:
  logo: ./assets/pisia.png
  right:
${formatItems(props.rightItems, 2)}
  left:
${formatItems(props.leftItems, 2)}`;

  if (props.languageSwitcher) {
      yaml += `
  tools:
    - icon: globe
      menu:
        - text: "en"
          href: /index.qmd
        - text: "es"
          href: /pages/es/index.qmd
        - text: "eu"
          href: /pages/eu/index.qmd`;
  }

  return yaml;
};

const generateHeroMarkdown = (props: HeroProps): string => {
  const buttons = `
::: {.hero-buttons .mt-4}
[${props.primaryButtonText}](${props.primaryButtonLink}){.btn .btn-primary .btn-lg}
[${props.secondaryButtonText}](${props.secondaryButtonLink}){.btn .btn-outline-secondary .btn-lg}
:::
`;

  if (props.imageUrl) {
    return `
::: {.grid .items-center}
  ::: {.g-col-12 .g-col-md-6}
  # ${props.title}
  
  ${props.subtitle}

  ${buttons}
  :::
  ::: {.g-col-12 .g-col-md-6}
  ![${props.imageAlt || 'Hero Image'}](${props.imageUrl})
  :::
:::
`;
  }

  return `
::: {.text-center .py-5}
# ${props.title}

::: {.col-lg-6 .mx-auto}
${props.subtitle}
:::

${buttons}
:::
`;
};

const generateFeaturesMarkdown = (props: FeaturesProps): string => {
    const colWidth = Math.floor(12 / props.gridColumns);
    const featuresMarkdown = props.features.map(feature => {
    const hoverClass = props.hoverEffect ? 'feature-card-hoverable' : '';
    
    const titleMarkdown = feature.href 
        ? `### [${feature.title}](${feature.href}){style="text-decoration: none; color: inherit;"}` 
        : `### ${feature.title}`;

    let cardContent;

    if (feature.imageUrl) {
        const imageMarkdown = `![${feature.title}](${feature.imageUrl}){fig-alt="${feature.title}"}`;
        switch(feature.imagePosition) {
            case 'left':
                cardContent = `::: {.grid .align-items-center}
:::: {.g-col-4}
${imageMarkdown}
::::
:::: {.g-col-8}
${titleMarkdown}
${feature.description}
::::
:::`;
                break;
            case 'right':
                cardContent = `::: {.grid .align-items-center}
:::: {.g-col-8}
${titleMarkdown}
${feature.description}
::::
:::: {.g-col-4}
${imageMarkdown}
::::
:::`;
                break;
            case 'top':
            default:
                cardContent = `${imageMarkdown}\n\n${titleMarkdown}\n${feature.description}`;
        }
    } else {
        cardContent = `${titleMarkdown}\n${feature.description}`;
    }

    return `
::: {.g-col-12 .g-col-md-${colWidth}}
  ::: {.card .h-100 .${hoverClass}}
    ::: {.card-body}
    ${cardContent}
    :::
  :::
:::`;
  }).join('\n');

  return `
::: {.grid .gap-4}
${featuresMarkdown}
:::
`;
};

const generateCtaMarkdown = (props: CtaProps): string => {
  return `
::: {.p-5 .my-5 .bg-light .rounded-3}
  ## ${props.title}
  
  <p class="col-md-8 fs-4">${props.subtitle}</p>
  
  [${props.buttonText}](${props.buttonLink}){.btn .btn-primary .btn-lg}
:::
`;
};

export const generateFooterYaml = (props: FooterProps): string => {
  const indent = (level: number) => '  '.repeat(level);
  const linksMarkdown = props.links.map(link => `[${link.text}](${link.href})`).join(' | ');

  return `page-footer:
  background: light
  left: |
${indent(2)}${props.copyrightText}
  center: |
${indent(2)}
  right: |
${indent(2)}${linksMarkdown}
`;
};

const generateBannerMarkdown = (props: BannerProps): string => {
    return `
::: {.callout-note appearance="simple"}
${props.text}
:::
`;
};

const generateAboutMarkdown = (props: AboutProps): string => {
    const buttonsMarkdown = props.buttons.map(btn => 
        `[${btn.text}](${btn.link}){.btn .btn-${btn.type === 'primary' ? 'primary' : 'outline-secondary'} .btn-lg}`
    ).join(' ');

    return `
::: {.grid .align-items-center .my-5}
  ::: {.g-col-12 .g-col-md-5}
  ![${props.imageAlt}](${props.imageUrl})
  :::
  ::: {.g-col-12 .g-col-md-7}
  ## ${props.title}
  #### ${props.subtitle}
  
  ${props.text}

  ::: {.mt-4}
  ${buttonsMarkdown}
  :::
  :::
:::
`;
};

const generateSeparatorMarkdown = (props: SeparatorProps): string => {
    return `---`;
};

const generateCarouselMarkdown = (props: CarouselProps): string => {
    const itemsMarkdown = props.images.map(img => 
        `![](${img.src}){.carousel-item caption="${img.caption || img.alt}"}`
    ).join('\n');
    return `
:::{.carousel}
${itemsMarkdown}
:::
`;
};


export const generateIndexQmdContent = (components: PageComponent[]): string => {
  const frontMatter = `---
page-layout: full
toc: false
---
`;

  if (components.length === 0) {
    return frontMatter;
  }
  
  const bodyComponents = components.filter(c => c.type !== 'navbar' && c.type !== 'footer');

  const bodyContent = bodyComponents.map(comp => {
    switch (comp.type) {
      case ElementType.HERO:
        return generateHeroMarkdown(comp.props);
      case ElementType.FEATURES:
        return generateFeaturesMarkdown(comp.props);
      case ElementType.CTA:
        return generateCtaMarkdown(comp.props);
      case ElementType.BANNER:
        return generateBannerMarkdown(comp.props);
      case ElementType.ABOUT:
        return generateAboutMarkdown(comp.props);
      case ElementType.SEPARATOR:
        return generateSeparatorMarkdown(comp.props);
      case ElementType.CAROUSEL:
        return generateCarouselMarkdown(comp.props);
      default:
        return '';
    }
  }).join('\n\n');
  
  return `${frontMatter}\n\n${bodyContent}`;
};
