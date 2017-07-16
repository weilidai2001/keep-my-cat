import React, { Component } from 'react';
import HomepageComponent from '../../components/homepage';
import {setBalance, clearMissionsHistory, setPreviouslyShownBalance} from '../../util/store';

class Homepage extends Component {

    render() {
        setBalance(0);
        setPreviouslyShownBalance(0);
        clearMissionsHistory();

        return (
            <div className="page">
                <div className="page-content">
                    <HomepageComponent />
                </div>
            </div>
        );
    }
}

export default Homepage;