import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const renderMission = (missionNumber, currentMission, branchNumber) => {
    if (missionNumber == currentMission) {
        return (
            <Link to={`/missions/${branchNumber}/${missionNumber}`}>
                <img src={`/mission_appear_${missionNumber}.png`}/>
            </Link>
        )
    } else if (currentMission > missionNumber) {
        return (<img src={`/mission_disappear_${missionNumber}.gif`}/>)
    } else {
        return (<img src={`/mission_appear_${missionNumber}.png`}/>)
    }
};

export default ({ branchNumber, missionNumber }) => (
    <div className="dashboard">
        <div className="dashboard__title">KEEP MY CAT!</div>
        <div className="dashboard__message-frame">
            <img src="/dashboard_speech_bubble.png" alt=""/>
            <div className="dashboard__speech-bubble">
                <div className="dashboard__message">This is a message. A very long message. Very very long message.</div>
            </div>
        </div>
        <div className="dashboard__title2">MISSIONS</div>
        <div className="dashboard__mission-container">
            <div className="dashboard__mission">
                <div className="dashboard__tile">
                    { renderMission(1, missionNumber, branchNumber) }
                </div>
            </div>
            <div className="dashboard__mission">
                <div className="dashboard__tile">
                    { renderMission(2, missionNumber, branchNumber) }
                </div>
            </div>
            <div className="dashboard__mission">
                <div className="dashboard__tile">
                    { renderMission(3, missionNumber, branchNumber) }
                </div>
            </div>
            <div className="dashboard__mission">
                <div className="dashboard__tile">
                    { renderMission(4, missionNumber, branchNumber) }
                </div>
            </div>
            <div className="dashboard__mission">
                <div className="dashboard__tile">
                    { renderMission(5, missionNumber, branchNumber) }
                </div>
            </div>
            <div className="dashboard__mission">
                <div className="dashboard__tile">
                    { renderMission(6, missionNumber, branchNumber) }
                </div>
            </div>
        </div>
        <div className="dashboard__balance">BALANCE: £3,500</div>
    </div>
);