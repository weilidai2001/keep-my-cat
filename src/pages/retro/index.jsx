import React from 'react';
import Retro from '../../components/retro';
import {getMissions} from '../../util/store';
import {getAllAnswerMissionIds} from '../../data/states';

const RetroPage = ( ) => {

    const missions = getAllAnswerMissionIds().slice(0, getAllAnswerMissionIds().length - 3);
    const props = { missions };

    return (
        <div className="page">
            <div className="page-content">
                <Retro {...props} />
            </div>
        </div>
    );
};

export default RetroPage;