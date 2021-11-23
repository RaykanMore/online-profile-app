import React from 'react';

const ProjectTile = props => {
    return (
        <div className="pt-outer-container">
            <div className="title">{props.title}</div>
            <div
                className="pt-synopsis-container"
                style={{
                    flexDirection: props.orientation === 'leftRight' ? "row" : "row-reverse"
                }}
            >
                <img
                    className="image"
                    src={props.image}
                    alt={props.alt}
                    style={{
                        width: props.imageCrop === 'vertical' ? "200px" : "300px",
                        height: props.imageCrop === 'vertical' ? "300px" : "200px",
                    }}
                />
                <p
                    className="synopsis"
                    style={{
                        textAlign: props.orientation === 'leftRight' ? "left" : "right",
                        marginLeft: props.orientation === 'leftRight' ? "20px" : "0px",
                        marginRight: props.orientation === 'rightLeft' ? "20px" : "0px"
                    }}
                >{props.synopsis}</p>
            </div>
        </div>
    );
}

export default ProjectTile;