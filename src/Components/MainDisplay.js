import React, { useState } from "react";
import Overview from "./Overview";
import Weather from './Weather'
import Symbol from "./Symbol";

const MainDisplay = () => {
    const [view, setView] = useState("Overview");
    return (
        <div className="stack">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => setView("Weather")}>
                    Current Weather at Capitol
                </button>
                <button onClick={() => setView("Symbol")}>Symbols</button>
            </div>
            { view === 'Overview' ? <Overview /> : null}
            { view === 'Weather' ? <Weather /> : null}
            { view === 'Symbol' ? <Symbol /> : null}
        </div>
    );
};

export default MainDisplay;
