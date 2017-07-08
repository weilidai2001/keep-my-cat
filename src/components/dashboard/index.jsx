import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const renderMission = (currentBranch, missionNumber, branchNumber, currentMission) => {
    if (missionNumber == currentMission && branchNumber == currentBranch) {
        return (
            <Link to={`/missions/${branchNumber}/${missionNumber}`}>
                <img src="/dashboard_mission_active.png"/>
            </Link>
        )
    } else if (currentBranch < branchNumber) {
        return (<img src="/dashboard_mission_completed.png"/>)
    } else {
        return (<img src="/dashboard_mission_incomplete.png"/>)
    }
};

const renderPath = () => (<img src="/dashboard_mission_path.png" />);

export default ({ branchNumber, missionNumber }) => (
    <div className="dashboard">
        <div className="dashboard__title">KEEP MY CAT!</div>
        <div className="dashboard__title2">MISSIONS</div>
        <div className="dashboard__mission-container">
            <div className="dashboard__tile dashboard__tile1">{renderMission(0, 1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile2">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile3">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile4">{renderMission(1, 1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile5">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile6">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile7">{renderMission(1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile8">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile9">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile10">{renderMission(1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile11">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile12"></div>
            <div className="dashboard__tile dashboard__tile13"></div>
            <div className="dashboard__tile dashboard__tile14">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile15"></div>
            <div className="dashboard__tile dashboard__tile16"></div>
            <div className="dashboard__tile dashboard__tile17"></div>
            <div className="dashboard__tile dashboard__tile18"></div>
            <div className="dashboard__tile dashboard__tile19"></div>
            <div className="dashboard__tile dashboard__tile20">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile21">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile22"></div>
            <div className="dashboard__tile dashboard__tile23"></div>
            <div className="dashboard__tile dashboard__tile24">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile25"></div>
            <div className="dashboard__tile dashboard__tile26"></div>
            <div className="dashboard__tile dashboard__tile27"></div>
            <div className="dashboard__tile dashboard__tile28"></div>
            <div className="dashboard__tile dashboard__tile29"></div>
            <div className="dashboard__tile dashboard__tile30">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile31">{renderMission(1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile32"></div>
            <div className="dashboard__tile dashboard__tile33"></div>
            <div className="dashboard__tile dashboard__tile34">{renderMission(2, 1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile35"></div>
            <div className="dashboard__tile dashboard__tile36"></div>
            <div className="dashboard__tile dashboard__tile37">{renderMission(1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile38">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile39">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile40">{renderMission(1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile41">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile42"></div>
            <div className="dashboard__tile dashboard__tile43"></div>
            <div className="dashboard__tile dashboard__tile44">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile45"></div>
            <div className="dashboard__tile dashboard__tile46"></div>
            <div className="dashboard__tile dashboard__tile47">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile48"></div>
            <div className="dashboard__tile dashboard__tile49"></div>
            <div className="dashboard__tile dashboard__tile50"></div>
            <div className="dashboard__tile dashboard__tile51">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile52"></div>
            <div className="dashboard__tile dashboard__tile53"></div>
            <div className="dashboard__tile dashboard__tile54">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile55"></div>
            <div className="dashboard__tile dashboard__tile56"></div>
            <div className="dashboard__tile dashboard__tile57">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile58"></div>
            <div className="dashboard__tile dashboard__tile59"></div>
            <div className="dashboard__tile dashboard__tile60"></div>
            <div className="dashboard__tile dashboard__tile61">{renderMission(1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile62"></div>
            <div className="dashboard__tile dashboard__tile63"></div>
            <div className="dashboard__tile dashboard__tile64"><img src="/dashboard_mission_question_mark.png" /></div>
            <div className="dashboard__tile dashboard__tile65"></div>
            <div className="dashboard__tile dashboard__tile66"></div>
            <div className="dashboard__tile dashboard__tile67"><img src="/dashboard_mission_question_mark.png" /></div>
            <div className="dashboard__tile dashboard__tile68"></div>
            <div className="dashboard__tile dashboard__tile69"></div>
            <div className="dashboard__tile dashboard__tile70"></div>
            <div className="dashboard__tile dashboard__tile71">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile72"></div>
            <div className="dashboard__tile dashboard__tile73"></div>
            <div className="dashboard__tile dashboard__tile74"></div>
            <div className="dashboard__tile dashboard__tile75"></div>
            <div className="dashboard__tile dashboard__tile76"></div>
            <div className="dashboard__tile dashboard__tile77"></div>
            <div className="dashboard__tile dashboard__tile78"></div>
            <div className="dashboard__tile dashboard__tile79"></div>
            <div className="dashboard__tile dashboard__tile80"></div>
            <div className="dashboard__tile dashboard__tile81">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile82"></div>
            <div className="dashboard__tile dashboard__tile83"></div>
            <div className="dashboard__tile dashboard__tile84"></div>
            <div className="dashboard__tile dashboard__tile85"></div>
            <div className="dashboard__tile dashboard__tile86"></div>
            <div className="dashboard__tile dashboard__tile87"></div>
            <div className="dashboard__tile dashboard__tile88"></div>
            <div className="dashboard__tile dashboard__tile89"></div>
            <div className="dashboard__tile dashboard__tile90"></div>
            <div className="dashboard__tile dashboard__tile91">{renderMission(1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile92">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile93">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile94">{renderMission(1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile95">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile96">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile97">{renderMission(1, branchNumber, missionNumber)}</div>
            <div className="dashboard__tile dashboard__tile98">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile99">{renderPath()}</div>
            <div className="dashboard__tile dashboard__tile10"><img src="/dashboard_mission_question_mark.png" /></div>
        </div>
        <div className="dashboard__balance">BALANCE: £3,500</div>
    </div>
);