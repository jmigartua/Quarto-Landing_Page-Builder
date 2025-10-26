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
  if (props.imageUrl) {
    return `
::: {.grid}
  ::: {.g-col-12 .g-col-md-6}
  # ${props.title}
  
  ${props.subtitle}

  <a href="${props.primaryButtonLink}" class="btn btn-primary btn-lg mt-3">${props.primaryButtonText}</a>
  <a href="${props.secondaryButtonLink}" class="btn btn-outline-secondary btn-lg mt-3">${props.secondaryButtonText}</a>
  :::
  ::: {.g-col-12 .g-col-md-6}
  ![${props.imageAlt || 'Hero Image'}](${props.imageUrl})
  :::
:::
`;
  }

  return `
<div class="px-4 py-5 my-5 text-center">
  <h1 class="display-5 fw-bold">${props.title}</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">${props.subtitle}</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <a href="${props.primaryButtonLink}" class="btn btn-primary btn-lg px-4 gap-3">${props.primaryButtonText}</a>
      <a href="${props.secondaryButtonLink}" class="btn btn-outline-secondary btn-lg px-4">${props.secondaryButtonText}</a>
    </div>
  </div>
</div>`;
};

const generateFeaturesMarkdown = (props: FeaturesProps): string => {
    const colWidth = Math.floor(12 / props.gridColumns);
    const featuresHtml = props.features.map(feature => {
    const hoverClass = props.hoverEffect ? 'feature-card-hoverable' : '';
    const content = `
### ${feature.title}
${feature.description}
`;
    
    let cardContent;

    if (feature.imageUrl) {
        const imageMarkdown = `![${feature.title}](${feature.imageUrl}){fig-alt="${feature.title}"}`;
        switch(feature.imagePosition) {
            case 'left':
                cardContent = `::: {.grid}
:::: {.g-col-4}
${imageMarkdown}
::::
:::: {.g-col-8}
${content}
::::
:::`;
                break;
            case 'right':
                cardContent = `::: {.grid}
:::: {.g-col-8}
${content}
::::
:::: {.g-col-4}
${imageMarkdown}
::::
:::`;
                break;
            case 'top':
            default:
                cardContent = `${imageMarkdown}\n\n${content}`;
        }
    } else {
        cardContent = content;
    }

    const cardBody = feature.href ? `<a href="${feature.href}" class="text-decoration-none text-dark">${cardContent}</a>` : cardContent;

    return `
::: {.g-col-12 .g-col-md-${colWidth}}
<div class="card h-100 ${hoverClass}">
  <div class="card-body">
    ${cardBody}
  </div>
</div>
:::
`;
  }).join('');

  return `
::: {.grid .gap-4}
${featuresHtml}
:::
`;
};

const generateCtaMarkdown = (props: CtaProps): string => {
  return `
<div class="bg-light p-5 rounded-3 my-5">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">${props.title}</h1>
    <p class="col-md-8 fs-4">${props.subtitle}</p>
    <a href="${props.buttonLink}" class="btn btn-primary btn-lg" type="button">${props.buttonText}</a>
  </div>
</div>
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
<div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 my-4">
  ${props.text}
</div>
`;
};

const generateAboutMarkdown = (props: AboutProps): string => {
    const buttonsHtml = props.buttons.map(btn => 
        `<a href="${btn.link}" class="btn btn-${btn.type === 'primary' ? 'primary' : 'outline-secondary'} btn-lg mt-2">${btn.text}</a>`
    ).join(' ');

    const separator = props.showVerticalSeparator ? '<div style="border-left: 1px solid #ddd; height: 100%;"></div>' : '';

    return `
::: {.grid .align-items-center}
  ::: {.g-col-12 .g-col-md-5}
  ![${props.imageAlt}](${props.imageUrl})
  :::
  ${props.showVerticalSeparator ? `::: {.g-col-1} ${separator} :::` : ''}
  ::: {.g-col-12 .g-col-md-${props.showVerticalSeparator ? 6 : 7}}
  ## ${props.title}
  #### ${props.subtitle}
  
  ${props.text}

  <div class="mt-4">
  ${buttonsHtml}
  </div>
  :::
:::
`;
};

const generateSeparatorMarkdown = (props: SeparatorProps): string => {
    return `<hr style="height: ${props.height}px; background-color: ${props.color}; border: none; margin: 2rem 0;">`;
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
  if (components.length === 0) {
    return `<!-- Drag elements from the left panel to the canvas to start building your page. -->
`;
  }

  // Inject CSS for feature hover effect if needed
  const hasFeaturesWithHover = components.some(c => c.type === ElementType.FEATURES && c.props.hoverEffect);
  const hoverCss = hasFeaturesWithHover ? `
<style>
.feature-card-hoverable {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.feature-card-hoverable:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
a.text-decoration-none {
    color: inherit; /* Ensure link color doesn't override card text */
}
</style>
` : '';
  
  const bodyContent = components.map(comp => {
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
      // Navbar and Footer are handled in _quarto.yml
      case ElementType.NAVBAR:
      case ElementType.FOOTER:
        return '';
      default:
        return '';
    }
  }).join('\n\n');
  
  return `${hoverCss}\n${bodyContent}`;
};