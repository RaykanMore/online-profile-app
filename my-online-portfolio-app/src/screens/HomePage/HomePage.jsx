import React, { useState } from 'react';
import PrimarySectionBubble from './components/PrimarySectionBubble';
import SecondarySectionBubble from './components/SecondarySectionBubble';
import image from '../../assets/images/profile-picture-square.jpg'
import {
    faBriefcase as workSectionIcon,
    faUniversity as educationSectionIcon,
    faHandHoldingHeart as valuesSectionIcon,
    faCopy as documentsSectionIcon
} from '@fortawesome/free-solid-svg-icons';
import SectionBodyPanel from './components/SectionBodyPanel/SectionBodyPanel';


const HomePage = () => {
    const [showSectionBody, updateShowSectionBody] = useState(false);
    const [selectedSection, updateSelectedSection] = useState(null);
    const [selectedSectionIcon, updateSelectedSectionIcon] = useState(null);

    const sectionBodyPanelHndlr = (section, sectionIcon) => {
        if (section !== selectedSection) {
            updateShowSectionBody(true);
            updateSelectedSection(section);
            updateSelectedSectionIcon(sectionIcon);
        }
    }
    const closeSectionBodyPanel = () => {
        updateShowSectionBody(false);
        updateSelectedSection(null);
        updateSelectedSectionIcon(null);
    }
    return (
        <div
            className="hp-outer-container"
        >
            <div
                className="hp-primary-panel hp-left-panel"
            >
                <PrimarySectionBubble
                    source={image}
                    title='Reabetswe Raikane More'
                    showSectionBody={() => sectionBodyPanelHndlr('ABOUT_SECTION', image)}
                />
                <div className="hp-vertical-section-break" />
            </div>
            <div
                className="hp-primary-panel hp-right-panel"
            >
                <div className="right-panel-primary-panel right-panel-top">
                    <SecondarySectionBubble
                        icon={workSectionIcon}
                        showSectionBody={() => sectionBodyPanelHndlr('WORK_SECTION', workSectionIcon)}
                    />
                    <SecondarySectionBubble
                        icon={educationSectionIcon}
                        showSectionBody={() => sectionBodyPanelHndlr('EDUCATION_SECTION', educationSectionIcon)}
                    />
                </div>
                <div className=" right-panel-primary-panel right-panel-bottom">
                    <SecondarySectionBubble
                        icon={valuesSectionIcon}
                        showSectionBody={() => sectionBodyPanelHndlr('VALUES_PAGE', valuesSectionIcon)}
                    />
                    <SecondarySectionBubble
                        icon={documentsSectionIcon}
                        showSectionBody={() => sectionBodyPanelHndlr('DOCUMENTS_SECTION', documentsSectionIcon)}
                    />
                </div>
            </div>
            <SectionBodyPanel
                isOpen={showSectionBody}
                selectedSection={selectedSection}
                selectedSectionIcon={selectedSectionIcon}
                closeSidePanel={closeSectionBodyPanel}
            />
        </div>
    );
}

export default HomePage;