import React from 'react';
import { MY_PROJECTS } from '../utils';
import ProjectTile from './ProjectTile';

const MyProjectsBody = () => {
    return (
        <div className="mpb-outer-container">
            {
                MY_PROJECTS.map((projectEntry) => <ProjectTile {...projectEntry} />)
            }
        </div>
    );
}

export default MyProjectsBody;