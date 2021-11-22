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

    const sectionBodyPanelHndlr = (section) => {
        if (section !== selectedSection) {
            updateShowSectionBody(true);
            updateSelectedSection(section);
        }
    }
    const closeSectionBodyPanel = () => {
        updateShowSectionBody(false);
        updateSelectedSection(null);
    }
    return (
        <div
            className="hp-outer-container"
        >
            <div
                className="hp-primary-panel hp-left-panel"
                style={{
                    filter: `blur(${showSectionBody ? "10px" : "0px"})`
                }}
            >
                <PrimarySectionBubble
                    source={image}
                    title='Reabetswe Raikane More'
                    showSectionBody={() => sectionBodyPanelHndlr('ABOUT_SECTION')}
                />
                <div className="hp-vertical-section-break" />
            </div>
            <div
                className="hp-primary-panel hp-right-panel"
                style={{
                    filter: `blur(${showSectionBody ? "10px" : "0px"})`
                }}
            >
                <div className="right-panel-primary-panel right-panel-top">
                    <SecondarySectionBubble
                        icon={workSectionIcon}
                        showSectionBody={() => sectionBodyPanelHndlr('WORK_SECTION')}
                    />
                    <SecondarySectionBubble
                        icon={educationSectionIcon}
                        showSectionBody={() => sectionBodyPanelHndlr('EDUCATION_SECTION')}
                    />
                </div>
                <div className=" right-panel-primary-panel right-panel-bottom">
                    <SecondarySectionBubble
                        icon={valuesSectionIcon}
                        showSectionBody={() => sectionBodyPanelHndlr('VALUES_PAGE')}
                    />
                    <SecondarySectionBubble
                        icon={documentsSectionIcon}
                        showSectionBody={() => sectionBodyPanelHndlr('DOCUMENTS_SECTION')}
                    />
                </div>
            </div>
            <SectionBodyPanel
                isOpen={showSectionBody}
                selectedSection={selectedSection}
                closeSidePanel={closeSectionBodyPanel}
            />
        </div>
    );
}

export default HomePage;