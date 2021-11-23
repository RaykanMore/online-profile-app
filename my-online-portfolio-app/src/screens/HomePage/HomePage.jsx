import React, { useState, useEffect } from 'react';
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
import SocialMediaLinks from './components/SectionBodyPanel/components/SocialMediaLinks';


const HomePage = () => {
    const [showSectionBody, updateShowSectionBody] = useState(false);
    const [selectedSection, updateSelectedSection] = useState(null);
    const [selectedSectionIcon, updateSelectedSectionIcon] = useState(null);
    const [runAnimation, updateRunAnimation] = useState(false);

    useEffect(() => updateRunAnimation(true));

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
                <SocialMediaLinks runAnimation={runAnimation} />
                <PrimarySectionBubble
                    source={image}
                    title='Reabetswe Raikane More'
                    showSectionBody={() => sectionBodyPanelHndlr('ABOUT_SECTION', image)}
                    runAnimation={runAnimation}
                />
                <div
                    className="hp-vertical-section-break"
                    style={{
                        height: runAnimation ?  "50%" : "100%",
                        opacity: runAnimation ?  ".3" : "1"
                    }}
                />
            </div>
            <div
                className="hp-primary-panel hp-right-panel"
                style={{
                    transform: `translateX(${runAnimation ?  "0%" : "30%"})`,
                    opacity: runAnimation ?  "1" : ".0"
                }}
            >
                <div className="right-panel-primary-panel right-panel-top">
                    <SecondarySectionBubble
                        icon={workSectionIcon}
                        title="Work"
                        showSectionBody={() => sectionBodyPanelHndlr('WORK_SECTION', workSectionIcon)}
                        runAnimation={runAnimation}
                    />
                    <SecondarySectionBubble
                        icon={educationSectionIcon}
                        title="Education"
                        showSectionBody={() => sectionBodyPanelHndlr('EDUCATION_SECTION', educationSectionIcon)}
                        runAnimation={runAnimation}
                    />
                </div>
                <div className=" right-panel-primary-panel right-panel-bottom">
                    <SecondarySectionBubble
                        icon={valuesSectionIcon}
                        title="Values"
                        showSectionBody={() => sectionBodyPanelHndlr('VALUES_PAGE', valuesSectionIcon)}
                        runAnimation={runAnimation}
                    />
                    <SecondarySectionBubble
                        icon={documentsSectionIcon}
                        title="Documents"
                        showSectionBody={() => sectionBodyPanelHndlr('DOCUMENTS_SECTION', documentsSectionIcon)}
                        runAnimation={runAnimation}
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