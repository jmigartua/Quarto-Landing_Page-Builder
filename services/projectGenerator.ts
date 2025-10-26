import { PageComponent } from '../types';
import { 
    DEFAULT_QUARTO_YAML, 
    DEFAULT_CUSTOM_SCSS, 
    DEFAULT_CUSTOM_OCEAN_SCSS 
} from './defaultFiles';
import { 
    generateIndexQmdContent, 
    generateNavbarYaml, 
    generateFooterYaml 
} from './markdownGenerator';

export const generateProjectFiles = (components: PageComponent[]): Record<string, string> => {
    let quartoYaml = DEFAULT_QUARTO_YAML;
    
    const navbarComp = components.find(c => c.type === 'navbar') as Extract<PageComponent, { type: 'navbar' }> | undefined;
    if (navbarComp) {
        // Replace website title
        quartoYaml = quartoYaml.replace(
            `##WEBSITE_TITLE_PLACEHOLDER##`, 
            `"${navbarComp.props.title}"`
        );
        
        // Replace navbar block
        const navbarYaml = generateNavbarYaml(navbarComp.props);
        quartoYaml = quartoYaml.replace(
            `##NAVBAR_BLOCK_PLACEHOLDER##`, 
            navbarYaml
        );

        // Handle theme switcher
        const themeYaml = navbarComp.props.themeSwitcher 
            ? 'theme: \n      light: ./styles/custom.scss\n      dark: ./styles/custom-ocean.scss' 
            : 'theme: ./styles/custom.scss';
        quartoYaml = quartoYaml.replace(
            `##THEME_BLOCK_PLACEHOLDER##`,
            themeYaml
        );

    } else {
         // If no navbar, use default title, remove navbar block, and set default theme
        quartoYaml = quartoYaml.replace(`##WEBSITE_TITLE_PLACEHOLDER##`, `"My Awesome Landing Page"`);
        quartoYaml = quartoYaml.replace(`##NAVBAR_BLOCK_PLACEHOLDER##`, ``);
        const themeYaml = 'theme: ./styles/custom.scss';
        quartoYaml = quartoYaml.replace(
            `##THEME_BLOCK_PLACEHOLDER##`,
            themeYaml
        );
    }

    const footerComp = components.find(c => c.type === 'footer') as Extract<PageComponent, { type: 'footer' }> | undefined;
    if (footerComp) {
        const footerYaml = generateFooterYaml(footerComp.props);
        quartoYaml = quartoYaml.replace(
            `##FOOTER_BLOCK_PLACEHOLDER##`,
            footerYaml
        );
    } else {
        // If no footer, remove the placeholder
        quartoYaml = quartoYaml.replace(`##FOOTER_BLOCK_PLACEHOLDER##`, '');
    }
    
    const bodyComponents = components.filter(c => c.type !== 'navbar' && c.type !== 'footer');
    const indexQmd = generateIndexQmdContent(bodyComponents);

    return {
        '_quarto.yml': quartoYaml,
        'index.qmd': indexQmd,
        'styles/custom.scss': DEFAULT_CUSTOM_SCSS,
        'styles/custom-ocean.scss': DEFAULT_CUSTOM_OCEAN_SCSS,
    };
};