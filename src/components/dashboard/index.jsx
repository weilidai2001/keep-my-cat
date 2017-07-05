import React, { Component } from 'react';

export default () => (
    <div className="page">
        <div className="page-content">
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
                            <img src="mission_disappear_1.gif" alt=""/>
                        </div>
                    </div>
                    <div className="dashboard__mission">
                        <div className="dashboard__tile">
                            <img src="mission_disappear_2.gif" alt=""/>
                        </div>
                    </div>
                    <div className="dashboard__mission">
                        <div className="dashboard__tile">
                            <img src="mission_disappear_3.gif" alt=""/>
                        </div>
                    </div>
                    <div className="dashboard__mission">
                        <div className="dashboard__tile">
                            <img src="mission_disappear_4.gif" alt=""/>
                        </div>
                    </div>
                    <div className="dashboard__mission">
                        <div className="dashboard__tile">
                            <img src="mission_disappear_5.gif" alt=""/>
                        </div>
                    </div>
                    <div className="dashboard__mission">
                        <div className="dashboard__tile">
                            <img src="mission_disappear_6.gif" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="dashboard__balance">BALANCE: £3,500</div>
            </div>
        </div>
    </div>
);