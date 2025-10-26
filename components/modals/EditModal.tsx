import React from 'react';
import { PageComponent, ElementType } from '../../types';
import { EditNavbarModal } from './EditNavbarModal';
import { EditHeroModal } from './EditHeroModal';
import { EditFeaturesModal } from './EditFeaturesModal';
import { EditCtaModal } from './EditCtaModal';
import { EditBannerModal } from './EditBannerModal';
import { EditFooterModal } from './EditFooterModal';
import { EditAboutModal } from './EditAboutModal';
import { EditSeparatorModal } from './EditSeparatorModal';
import { EditCarouselModal } from './EditCarouselModal';

interface EditModalProps {
    component: PageComponent;
    onSave: (component: PageComponent) => void;
    onClose: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({ component, onSave, onClose }) => {
    switch (component.type) {
        case ElementType.NAVBAR:
            return <EditNavbarModal component={component} onSave={onSave} onClose={onClose} />;
        case ElementType.HERO:
            return <EditHeroModal component={component} onSave={onSave} onClose={onClose} />;
        case ElementType.FEATURES:
            return <EditFeaturesModal component={component} onSave={onSave} onClose={onClose} />;
        case ElementType.CTA:
            return <EditCtaModal component={component} onSave={onSave} onClose={onClose} />;
        case ElementType.BANNER:
            return <EditBannerModal component={component} onSave={onSave} onClose={onClose} />;
        case ElementType.FOOTER:
            return <EditFooterModal component={component} onSave={onSave} onClose={onClose} />;
        case ElementType.ABOUT:
            return <EditAboutModal component={component} onSave={onSave} onClose={onClose} />;
        case ElementType.SEPARATOR:
            return <EditSeparatorModal component={component} onSave={onSave} onClose={onClose} />;
        case ElementType.CAROUSEL:
            return <EditCarouselModal component={component} onSave={onSave} onClose={onClose} />;
        default:
            return null;
    }
};
