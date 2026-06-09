import React from 'react';
import "../css/All.css";

export default function SelectedAwards() {
    const awards = [
        {
            text: "Comprehensive Scholarship, Ocean University of China ",
            highlight: "(Second-Class)",
        },
        {
            text: "National College Student Energy Conservation and Emission Reduction Competition ",
            highlight: "(National Third Prize)",
        },
        {
            text: "Outstanding Communist Youth League Member ",
            highlight: "",
        },
        {
            text: "“Learning the Constitution” Knowledge Competition ",
            highlight: "(Third Prize)",
        },
    ];

    return (
        <div className="card" id="awards" style={{ marginTop: "1rem" }}>
            <div className="card-title">Selected Honors & Awards</div>

            <div className="awards-list">
                {awards.map((award, index) => (
                    <div key={index} className="award-item">
                        <span className="award-icon">✦ </span>
                        <span className="award-text">
                            {award.text}
                            {award.highlight && (
                                <span className="award-highlight">
                                    {award.highlight}
                                </span>
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}