import React, { Component } from 'react';
import Slideshow from '../../components/slideshow';

const MissionBody = ({ match }) => {
    const branchNumber = match.params.branch;
    const missionNumber = match.params.mission;
    const initialFrame = `mission_b${branchNumber}m${missionNumber}q`;
    const initialAnimation = 'slide--forward';
    const props = { initialFrame, initialAnimation };

    return (
        <div className="page">
            <div className="page-content">
                <Slideshow {...props} />
            </div>
        </div>
    );
};

export default MissionBody;