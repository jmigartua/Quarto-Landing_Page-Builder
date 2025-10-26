import { PageComponent, ElementType } from '../types';

export const createNewComponent = (type: ElementType): PageComponent => {
    const id = `${type}-${Date.now()}`;
    switch (type) {
        case ElementType.NAVBAR:
            return {
                id,
                type: ElementType.NAVBAR,
                props: {
                    title: 'My Website',
                    leftItems: [{ id: `nav-${Date.now()}-1`, type: 'link', text: 'Home', href: 'index.qmd' }, {id: `nav-${Date.now()}-2`, type: 'link', text: 'About', href: 'about.qmd'}],
                    rightItems: [{ id: `nav-${Date.now()}-3`, type: 'icon', icon: 'github', href: 'https://github.com/'}],
                    themeSwitcher: true,
                    languageSwitcher: false,
                },
            };
        case ElementType.HERO:
            return {
                id,
                type: ElementType.HERO,
                props: {
                    title: 'Centered hero',
                    subtitle: 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit.',
                    primaryButtonText: 'Primary button',
                    primaryButtonLink: '#',
                    secondaryButtonText: 'Secondary',
                    secondaryButtonLink: '#',
                    imageUrl: '',
                    imageAlt: '',
                },
            };
        case ElementType.FEATURES:
            return {
                id,
                type: ElementType.FEATURES,
                props: {
                    gridColumns: 3,
                    hoverEffect: true,
                    features: [
                        { id: `feat-${Date.now()}-1`, title: 'Feature One', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagePosition: 'top' },
                        { id: `feat-${Date.now()}-2`, title: 'Feature Two', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imagePosition: 'top' },
                        { id: `feat-${Date.now()}-3`, title: 'Feature Three', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.', imagePosition: 'top' },
                    ],
                },
            };
        case ElementType.CTA:
             return {
                id,
                type: ElementType.CTA,
                props: {
                    title: 'Ready to Get Started?',
                    subtitle: 'Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap.',
                    buttonText: 'Take Action Now',
                    buttonLink: '#',
                },
            };
        case ElementType.BANNER:
            return {
                id,
                type: ElementType.BANNER,
                props: {
                    text: "This is a prominent banner to grab user's attention! Use it for important announcements.",
                },
            };
        case ElementType.FOOTER:
            return {
                id,
                type: ElementType.FOOTER,
                props: {
                    copyrightText: `© ${new Date().getFullYear()} Copyright: MyWebsite.com`,
                    links: [
                        { id: `footer-link-${Date.now()}-1`, text: 'Home', href: '#' },
                        { id: `footer-link-${Date.now()}-2`, text: 'About', href: '#' },
                        { id: `footer-link-${Date.now()}-3`, text: 'Contact', href: '#' },
                    ]
                },
            };
        case ElementType.ABOUT:
            return {
                id,
                type: ElementType.ABOUT,
                props: {
                    title: 'About Us',
                    subtitle: 'A little more about our mission.',
                    text: 'This is a great place to write a longer passage about your company, project, or yourself. Engage your audience with your story.',
                    imageUrl: 'https://via.placeholder.com/400x300',
                    imageAlt: 'Placeholder image',
                    buttons: [
                        { id: `about-btn-${Date.now()}-1`, text: 'Sign up online', link: '#', type: 'primary' },
                        { id: `about-btn-${Date.now()}-2`, text: 'Get the source code', link: '#', type: 'secondary' },
                    ],
                }
            };
        case ElementType.SEPARATOR:
            return {
                id,
                type: ElementType.SEPARATOR,
                props: {}
            };
        case ElementType.CAROUSEL:
            return {
                id,
                type: ElementType.CAROUSEL,
                props: {
                    images: [
                        { id: `carousel-img-${Date.now()}-1`, src: 'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+1', alt: 'Slide 1', caption: 'First slide description' },
                        { id: `carousel-img-${Date.now()}-2`, src: 'https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+2', alt: 'Slide 2', caption: 'Second slide description' },
                        { id: `carousel-img-${Date.now()}-3`, src: 'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+3', alt: 'Slide 3', caption: 'Third slide description' },
                    ]
                }
            };
        case ElementType.CAPABILITIES:
            return {
                id,
                type: ElementType.CAPABILITIES,
                props: {
                    title: 'Capabilities',
                    capabilities: [
                        { id: `cap-${Date.now()}-1`, title: 'Real-time logs', description: 'Build and runtime logs streamed in real-time for each deployment, fully searchable.', illustration: 'logs' },
                        { id: `cap-${Date.now()}-2`, title: 'Instant rollback', description: 'Made a mistake? Roll back to the previous environment alias without rebuilding.', illustration: 'menu' },
                        { id: `cap-${Date.now()}-3`, title: 'Configurable build', description: 'Customize the deployment process end-to-end with build and start commands.', illustration: 'form' },
                        { id: `cap-${Date.now()}-4`, title: 'Encrypted environment variables', description: 'Add environment variables to your project and let your team access them safely.', illustration: 'secrets' },
                        { id: `cap-${Date.now()}-5`, title: 'Preview URLs', description: 'Get a URL for each deployment, and aliases for the latest deploy per branch.', illustration: 'links' },
                        { id: `cap-${Date.now()}-6`, title: 'Framework agnostic', description: 'We support Python (FastAPI, Flask, Django…), Node.js, and soon PHP.', illustration: 'select' },
                    ],
                    moreTitle: 'And there\'s more in the works…',
                    pills: [
                        { id: `pill-${Date.now()}-1`, title: 'SQLite database', description: 'Manage SQLite databases per environment.' },
                        { id: `pill-${Date.now()}-2`, title: 'Persistent storage', description: 'Create files per environment for each project.' },
                        { id: `pill-${Date.now()}-3`, title: 'Custom containers', description: 'Deploy apps on custom Docker containers.' },
                        { id: `pill-${Date.now()}-4`, title: 'Remote nodes', description: 'Manage multiple nodes from a single dashboard.' },
                    ]
                },
            };
        default:
            throw new Error(`Unknown component type: ${type}`);
    }
};