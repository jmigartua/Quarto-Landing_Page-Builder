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
            /title: ".*"/, 
            `title: "${navbarComp.props.title}"`
        );
        
        const navbarYaml = generateNavbarYaml(navbarComp.props);
        // This regex is designed to be robust against different amounts of whitespace
        quartoYaml = quartoYaml.replace(
            /navbar:[\s\S]*?page-navigation:/, 
            `${navbarYaml}\n  page-navigation:`
        );

        // Handle theme switcher
        const themeYaml = navbarComp.props.themeSwitcher 
            ? 'theme: \n      light: ./styles/custom.scss\n      dark: ./styles/custom-ocean.scss' 
            : 'theme: ./styles/custom.scss';
        quartoYaml = quartoYaml.replace(
            /theme:[\s\S]*?css:/,
            `${themeYaml}\n    css:`
        );

    } else {
         // If no navbar, ensure theme switcher is off
        const themeYaml = 'theme: ./styles/custom.scss';
        quartoYaml = quartoYaml.replace(
            /theme:[\s\S]*?css:/,
            `${themeYaml}\n    css:`
        );
    }

    const footerComp = components.find(c => c.type === 'footer') as Extract<PageComponent, { type: 'footer' }> | undefined;
    if (footerComp) {
        const footerYaml = generateFooterYaml(footerComp.props);
        quartoYaml = quartoYaml.replace(
            /page-footer:[\s\S]*?format:/,
            `${footerYaml}\n\nformat:`
        );
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
