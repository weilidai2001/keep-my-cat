import React from 'react';
import Retro from '../../components/retro';
import {getMissions} from '../../util/store';

const RetroPage = ( ) => {

    const missions = getMissions();
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