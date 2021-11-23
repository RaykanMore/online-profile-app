import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import MyDocumentsBody from './components/MyDocumentsBody';
import AboutMeBody from './components/AboutMeBody';
import MyEducationBody from './components/MyEducationBody';
import MyValuesBody from './components/MyValuesBody';
import EmploymentHistoryBody from './components/EmploymentHistoryBody';

const SectionBodyPanel = props => {
    const getSectionTitle = () => {
        switch (props.selectedSection) {
            case 'ABOUT_SECTION':
                return 'About Me & Why SoftTech';
            case 'WORK_SECTION':
                return 'My Work Experience';
            case 'EDUCATION_SECTION':
                return 'My Education Accolades';
            case 'VALUES_PAGE':
                return 'My Values';
            case 'DOCUMENTS_SECTION':
                return 'My Supporting Documents';
            default:
                return '';
        }
    }
    return (
        <div
            className="sbp-outer-container"
            onClick={(e) => {
                if (e.currentTarget === e.target ) { props.closeSidePanel() }
            }}
            style={{
                left: props.isOpen ? "0%" : "-100%",
                backgroundColor: props.isOpen ? "#eaf4ff77" : "transparent"
            }}
        >
            <div className="sbp-panel">
                <div className="sbp-close-container">
                    <div
                        onClick={() => props.closeSidePanel()}
                        className="button button-hover sbp-close"
                    >
                        <FontAwesomeIcon
                            className='close-icon'
                            icon={faTimes}
                        />
                    </div>
                </div>
                <div className="sbp-body-container">
                    <div className="sbp-title-container">
                        {
                            props.selectedSection === 'ABOUT_SECTION'
                            ? <img
                                className="sbp-image"
                                src={props.selectedSectionIcon}
                                alt={'Section Heading icon.'}
                            />
                            : <FontAwesomeIcon className="sbp-icon" icon={props.selectedSectionIcon} />
                        }
                        <text className="sbp-title">
                            {getSectionTitle()}
                        </text>
                    </div>
                    <div className="sbp-body">
                        {
                            props.selectedSection === 'DOCUMENTS_SECTION' &&
                            <MyDocumentsBody />
                        }
                        {
                            props.selectedSection === 'ABOUT_SECTION' &&
                            <AboutMeBody />
                        }
                        {
                            props.selectedSection === 'EDUCATION_SECTION' &&
                            <MyEducationBody />
                        }
                        {
                            props.selectedSection === 'VALUES_PAGE' &&
                            <MyValuesBody />
                        }
                        {
                            props.selectedSection === 'WORK_SECTION' &&
                            <EmploymentHistoryBody />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionBodyPanel;