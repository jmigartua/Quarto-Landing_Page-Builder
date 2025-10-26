import { 
    PageComponent, ElementType, NavbarProps, HeroProps, FeaturesProps, 
    CtaProps, BannerProps, FooterProps, NavbarItem, AboutProps,
    SeparatorProps, CarouselProps, CapabilitiesProps, CapabilityIllustration
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

  let yaml = `  navbar:
    logo: ./assets/pisia.png
    right:
${formatItems(props.rightItems, 3)}
    left:
${formatItems(props.leftItems, 3)}`;

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
  const buttons = `::: {.hero-buttons .mt-4}
[${props.primaryButtonText}](${props.primaryButtonLink}){.btn .btn-primary .btn-lg}
[${props.secondaryButtonText}](${props.secondaryButtonLink}){.btn .btn-outline-secondary .btn-lg}
:::`;

  if (props.imageUrl) {
    return `::: {.grid .items-center}
::: {.g-col-12 .g-col-md-6}
# ${props.title}

${props.subtitle}

${buttons}
:::
::: {.g-col-12 .g-col-md-6}
![${props.imageAlt || 'Hero Image'}](${props.imageUrl})
:::
:::`;
  }

  return `::: {.text-center .py-5}
# ${props.title}

::: {.col-lg-6 .mx-auto}
${props.subtitle}
:::

${buttons}
:::`;
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

    return `::: {.g-col-12 .g-col-md-${colWidth}}
::: {.card .h-100 .${hoverClass}}
::: {.card-body}
${cardContent}
:::
:::
:::`;
  }).join('\n\n');

  return `::: {.grid .gap-4}
${featuresMarkdown}
:::`;
};

const generateCtaMarkdown = (props: CtaProps): string => {
  return `::: {.p-5 .my-5 .bg-light .rounded-3}
## ${props.title}

<p class="col-md-8 fs-4">${props.subtitle}</p>

[${props.buttonText}](${props.buttonLink}){.btn .btn-primary .btn-lg}
:::`;
};

export const generateFooterYaml = (props: FooterProps): string => {
  const indent = (level: number) => '  '.repeat(level);
  const linksMarkdown = props.links.map(link => `[${link.text}](${link.href})`).join(' | ');

  return `  page-footer:
    background: light
    left: |
${indent(3)}${props.copyrightText}
    center: |
${indent(3)}
    right: |
${indent(3)}${linksMarkdown}`;
};

const generateBannerMarkdown = (props: BannerProps): string => {
    return `::: {.callout-note appearance="simple"}
${props.text}
:::`;
};

const generateAboutMarkdown = (props: AboutProps): string => {
    const buttonsMarkdown = props.buttons.map(btn => 
        `[${btn.text}](${btn.link}){.btn .btn-${btn.type === 'primary' ? 'primary' : 'outline-secondary'} .btn-lg}`
    ).join(' ');

    return `::: {.grid .align-items-center .my-5}
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
:::`;
};

const generateSeparatorMarkdown = (props: SeparatorProps): string => {
    return `---`;
};

const generateCarouselMarkdown = (props: CarouselProps): string => {
    const itemsMarkdown = props.images.map(img => 
        `![](${img.src}){.carousel-item caption="${img.caption || img.alt}"}`
    ).join('\n');
    return `:::{.carousel}
${itemsMarkdown}
:::`;
};

const generateCapabilityCardIllustration = (illustration: CapabilityIllustration): string => {
    switch (illustration) {
        case 'logs':
            return `::: {.card-illustration .card-illustration-logs}
::: {.log-line}
[18:34:02]{.log-time} [Successfully installed Babel-2.11]{.log-event}
:::
::: {.log-line}
[18:34:03]{.log-time} [Starting application...]{.log-event}
:::
::: {.log-line}
[18:34:03]{.log-time} [[INFO] Booting worker with pid: 2048]{.log-event}
:::
::: {.log-line}
[18:34:05]{.log-time} [Success: Deployment is available]{.log-success}
:::
:::`;
        case 'menu':
            return `::: {.card-illustration .card-illustration-menu}
::: {.menu-trigger}
[Production]{.trigger-label} [●]{.trigger-dot}
:::
::: {.menu-surface}
[Instant rollback]{.menu-item}  
[Redeploy]{.menu-item}
:::
:::`;
        case 'form':
            return `::: {.card-illustration .card-illustration-form}
::: {.form-field}
[Build command]{.field-label}  
[uv sync]{.pill}
:::
::: {.form-field}
[Start command]{.field-label}  
[uv run gunicorn -w 3 -b 0.0.0.0]{.pill}
:::
:::`;
        case 'secrets':
            return `::: {.card-illustration .card-illustration-secrets}
::: {.secret-row}
[POSTGRES_DB]{.secret-key} [••••••••]{.secret-value}
:::
::: {.secret-row}
[POSTGRES_USER]{.secret-key} [••••••••]{.secret-value}
:::
::: {.secret-row}
[POSTGRES_PASSWORD]{.secret-key} [••••••••]{.secret-value}
:::
::: {.secret-row .secret-row-add}
[+]{.plus} [Add variable]{.secret-key}
:::
:::`;
        case 'links':
            return `::: {.card-illustration .card-illustration-links}
::: {.link-row}
[Deployment URL]{.link-label}  
[flask-acme-id-310281b.devpush.app ↗]{.link-value}
:::
::: {.link-row}
[Branch URL]{.link-label}  
[flask-acme-branch-main.devpush.app ↗]{.link-value}
:::
::: {.link-row}
[Environment URL]{.link-label}  
[flask-acme.devpush.app ↗]{.link-value}
:::
:::`;
        case 'select':
            return `::: {.card-illustration .card-illustration-select}
::: {.select-pill}
[Python]{.select-label} [▾]{.select-caret}
:::
::: {.select-menu}
[Python]{.select-item .select-item-active}  
[FastAPI]{.select-item}  
[Django]{.select-item}  
[Flask]{.select-item}
:::
:::`;
        case 'domains':
            return `::: {.card-illustration .card-illustration-domains}
::: {.domain-row}
[acme.dev]{.domain-name} [Live]{.domain-status .domain-status-live}
:::
::: {.domain-row}
[staging.acme.dev]{.domain-name} [Pending]{.domain-status}
:::
::: {.domain-row}
[api.acme.dev]{.domain-name} [Provisioning]{.domain-status}
:::
:::`;
        case 'avatars':
            return `::: {.card-illustration .card-illustration-avatars}
::: {.avatar-stack}
[HN]{.avatar-circle}
[AL]{.avatar-circle}
[MB]{.avatar-circle}
[+4]{.avatar-circle .avatar-circle-muted}
:::
::: {.team-roles}
Owners · Admins · Viewers
:::
:::`;
        case 'oss':
            return `::: {.card-illustration .card-illustration-oss}
[MIT Licensed]{.oss-badge}  
[GitHub · devpush]{.oss-badge}
:::`;
        default:
            return '';
    }
}

const generateCapabilitiesMarkdown = (props: CapabilitiesProps): string => {
    const capabilitiesCards = props.capabilities.map(cap => `::: {.capability-card}
::: {.card-content}
### ${cap.title}

${cap.description}
:::
${generateCapabilityCardIllustration(cap.illustration)}
:::`);

    const pills = props.pills.map(pill => `::: {.pill-card}
**${pill.title}**  
${pill.description}
:::`);
    // duplicate pills for marquee effect
    const marqueePills = [...pills, ...pills].join('\n\n');

    const capabilitiesGrid = `::: {.section}
::: {.container-xl}
## ${props.title} {.section-title .gradient-text}
::: {.capabilities-grid}
${capabilitiesCards.join('\n\n')}
:::
:::
:::`;

    const marqueeSection = `::: {.section}
::: {.container-xl}
## ${props.moreTitle} {.section-title .gradient-text}
::: {.marquee}
::: {.marquee-track}
${marqueePills}
:::
:::
:::
:::`;

    return `${capabilitiesGrid}\n\n${marqueeSection}`;
}


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
      case ElementType.CAPABILITIES:
        return generateCapabilitiesMarkdown(comp.props);
      default:
        return '';
    }
  }).join('\n\n');
  
  return `${frontMatter}\n\n${bodyContent}`;
};