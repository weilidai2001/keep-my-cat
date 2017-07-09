import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const isMissionAccomplished = (thisBranch, thisMission, latestBranch, latestMission) => {
    if (thisBranch == 0 && latestBranch > 0) {
        return true;
    } else if (thisBranch == 1 && (latestBranch == 2 || latestBranch == 3)) {
        return true;
    }
    else if (thisBranch == latestBranch && thisMission < latestMission) {
        return true;
    }
    return false;
};

const renderMission = (thisBranch, thisMission, latestBranch, latestMission) => {
    if (thisMission == latestMission && thisBranch == latestBranch) {
        return (
            <Link to={`/missions/${latestBranch}/${latestMission}`}>
                <img className="dashboard__active-img" src="/dashboard_mission_active.png"/>
            </Link>
        )
    } else if (isMissionAccomplished(thisBranch, thisMission, latestBranch, latestMission)) {
        return (<img src="/dashboard_mission_completed.png"/>)
    } else {
        return (<img src="/dashboard_mission_incomplete.png"/>)
    }
};

const renderPath = () => (<img className="dashboard__path-img" src="/dashboard_mission_path.png" />);

const renderQuestionMark = () => (<img src="/dashboard_mission_question_mark.png" />);

export default ({ branchNumber, missionNumber }) => (
    <div className="dashboard">
        <div className="dashboard__title">KEEP MY CAT!</div>
        <div className="dashboard__title2">MISSIONS</div>
        <div className="dashboard__mission-container">
            <div className="dashboard__tile dashboard__tile1">{renderQuestionMark()}</div>
            <div className="dashboard__tile dashboard__tile2">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile3">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile4">{renderMission(3, 6, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile5">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile6">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile7">{renderMission(3, 5, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile8"></div>
            <div className="dashboard__tile dashboard__tile9"></div>
            <div className="dashboard__tile dashboard__tile10"></div>
            <div className="dashboard__tile dashboard__tile11"></div>
            <div className="dashboard__tile dashboard__tile12"></div>
            <div className="dashboard__tile dashboard__tile13"></div>
            <div className="dashboard__tile dashboard__tile14"></div>
            <div className="dashboard__tile dashboard__tile15"></div>
            <div className="dashboard__tile dashboard__tile16"></div>
            <div className="dashboard__tile dashboard__tile17">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile18"></div>
            <div className="dashboard__tile dashboard__tile19"></div>
            <div className="dashboard__tile dashboard__tile20"></div>
            <div className="dashboard__tile dashboard__tile21"></div>
            <div className="dashboard__tile dashboard__tile22"></div>
            <div className="dashboard__tile dashboard__tile23"></div>
            <div className="dashboard__tile dashboard__tile24"></div>
            <div className="dashboard__tile dashboard__tile25"></div>
            <div className="dashboard__tile dashboard__tile26"></div>
            <div className="dashboard__tile dashboard__tile27">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile28"></div>
            <div className="dashboard__tile dashboard__tile29"></div>
            <div className="dashboard__tile dashboard__tile30"></div>
            <div className="dashboard__tile dashboard__tile31">{renderMission(4, 2, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile32">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile33">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile34">{renderMission(0, 1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile35"></div>
            <div className="dashboard__tile dashboard__tile36"></div>
            <div className="dashboard__tile dashboard__tile37">{renderMission(3, 4, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile38"></div>
            <div className="dashboard__tile dashboard__tile39"></div>
            <div className="dashboard__tile dashboard__tile40">{renderQuestionMark()}</div>
            <div className="dashboard__tile dashboard__tile41">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile42"></div>
            <div className="dashboard__tile dashboard__tile43"></div>
            <div className="dashboard__tile dashboard__tile44">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile45"></div>
            <div className="dashboard__tile dashboard__tile46"></div>
            <div className="dashboard__tile dashboard__tile47">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile48"></div>
            <div className="dashboard__tile dashboard__tile49"></div>
            <div className="dashboard__tile dashboard__tile50">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile51">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile52"></div>
            <div className="dashboard__tile dashboard__tile53"></div>
            <div className="dashboard__tile dashboard__tile54">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile55"></div>
            <div className="dashboard__tile dashboard__tile56"></div>
            <div className="dashboard__tile dashboard__tile57">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile58"></div>
            <div className="dashboard__tile dashboard__tile59"></div>
            <div className="dashboard__tile dashboard__tile60">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile61">{renderMission(4, 3, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile62"></div>
            <div className="dashboard__tile dashboard__tile63"></div>
            <div className="dashboard__tile dashboard__tile64">{renderMission(1, 2, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile65">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile66">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile67">{renderMission(3, 3, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile68"></div>
            <div className="dashboard__tile dashboard__tile69"></div>
            <div className="dashboard__tile dashboard__tile70">{renderMission(2, 6, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile71">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile72"></div>
            <div className="dashboard__tile dashboard__tile73"></div>
            <div className="dashboard__tile dashboard__tile74">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile75"></div>
            <div className="dashboard__tile dashboard__tile76"></div>
            <div className="dashboard__tile dashboard__tile77"></div>
            <div className="dashboard__tile dashboard__tile78"></div>
            <div className="dashboard__tile dashboard__tile79"></div>
            <div className="dashboard__tile dashboard__tile80">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile81">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile82"></div>
            <div className="dashboard__tile dashboard__tile83"></div>
            <div className="dashboard__tile dashboard__tile84">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile85"></div>
            <div className="dashboard__tile dashboard__tile86"></div>
            <div className="dashboard__tile dashboard__tile87"></div>
            <div className="dashboard__tile dashboard__tile88"></div>
            <div className="dashboard__tile dashboard__tile89"></div>
            <div className="dashboard__tile dashboard__tile90">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile91">{renderQuestionMark()}</div>
            <div className="dashboard__tile dashboard__tile92"></div>
            <div className="dashboard__tile dashboard__tile93"></div>
            <div className="dashboard__tile dashboard__tile94">{renderMission(2, 3, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile95">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile96">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile97">{renderMission(2, 4, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile98">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile99">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile10">{renderMission(2, 5, branchNumber, missionNumber)}</div>
        </div>
        <div className="dashboard__balance">BALANCE: £3,500</div>
    </div>
);