import React from 'react';
import Slideshow from '../../components/slideshow';
import {convertBranchMissionToFrameId} from '../../data/states';

const MissionBody = ({ match }) => {
    const branchNumber = match.params.branch;
    const missionNumber = match.params.mission;
    const initialFrame = convertBranchMissionToFrameId(branchNumber, missionNumber);
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