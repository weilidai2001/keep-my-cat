import React, { Component } from 'react';
import Dashboard from '../../components/dashboard';

const MissionDashboard = ({ match }) => {
    const branchNumber = match.params.branch;
    const missionNumber = match.params.mission;
    const props = { branchNumber, missionNumber };

    return (
        <div className="page">
            <div className="page-content">
                <Dashboard {...props} />
            </div>
        </div>
    );
};

export default MissionDashboard;