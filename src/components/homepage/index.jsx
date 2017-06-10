import React from 'react';
import placeholder from '../../img/placeholder-1.jpg';

export default () => {
    return (
        <div className="page">
            <div className="page-content">
                <header>Header</header>
                <main>
                    <img className="hero-image" src={placeholder} alt=""/>
                </main>
                <footer>Footer</footer>
            </div>
        </div>
    );
}