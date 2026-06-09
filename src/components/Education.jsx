import React from 'react';
import "../css/All.css"; // 确保你的 CSS 路径正确

export default function Education() {
    const education = [
        {
            university: "Ocean University of China",
            degree: "Undergraduate Law Student",
            college: "College of Law",
            gpa: "3.860/4.0",
            ranking: "5/198",
            period: "2023.09 - Present",
            location: "Qingdao, China",
            courses: [
                "General Principles of Civil Law",
                "Contract Law",
                "Civil Procedure Law",
                "Commercial Law",
                "Property Law",
                "Tort Law",
                "Trust Law",
                "Economic Law",
                "International Law",
                "Private International Law",
                "International Economic Law"
            ]
        }
    ];

    return (
        <div className="card" id="education" style={{ marginTop: "1rem" }}>
            <div className="card-title">Education</div>

            <div className="education-list">
                {education.map((edu, index) => (
                    <div key={index} className="education-item">

                        <div className="education-header">
                            <h3 className="education-university">
                                {edu.university}
                            </h3>

                            <div className="education-period">
                                {edu.period}
                                <div className="education-location">
                                    {edu.location}
                                </div>
                            </div>
                        </div>

                        <div className="education-details">
                            <p className="education-degree">
                                {edu.degree}
                                {edu.college && `, ${edu.college}`}
                            </p>

                            <p className="education-degree">
                                GPA: <strong>{edu.gpa}</strong>
                                {" "} | Academic Ranking: <strong>{edu.ranking}</strong>
                            </p>
                        </div>

                        {edu.courses && edu.courses.length > 0 && (
                            <div className="education-courses">
                                <div>Selected Courses:</div>
                                <ul>
                                    {edu.courses.map((course, i) => (
                                        <li key={i}>
                                            {course}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}