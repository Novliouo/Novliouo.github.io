import React, { useState } from "react";
import "../css/Internship.css";

export default function Internship() {
    const photoSections = [
        {
            type: "Everyday",
            title: "Everyday Fragments",
            subtitle: "日常碎片",
            period: "Ongoing",
            location: "Everyday Life",
            description:
                "Small pieces of everyday life: light on a wall, a quiet table, a passing view, or a moment that made me pause.",
            details: [
                "I use photography to keep ordinary moments that might otherwise disappear.",
                "These photos are not necessarily grand or complete. They are small traces of how I notice the world."
            ],
            tags: ["#Everyday", "#Fragments", "#Quiet Moments"]
        },
        {
            type: "People",
            title: "People & Stories",
            subtitle: "人与故事",
            period: "Ongoing",
            location: "Where stories happen",
            description:
                "Faces, gestures, and ordinary lives that quietly carry their own stories.",
            details: [
                "I am often drawn to concrete lives and the stories hidden behind ordinary encounters.",
                "Photography, for me, is also a way of getting closer to people without interrupting their lives too loudly."
            ],
            tags: ["#People", "#Stories", "#Observation"]
        },
        {
            type: "Light",
            title: "Light & Silence",
            subtitle: "光与沉默",
            period: "Ongoing",
            location: "Windows, rain, night, and silence",
            description:
                "Light, shadow, windows, rain, and quiet spaces where emotions stay unspoken.",
            details: [
                "Some feelings do not need to be explained immediately.",
                "I like images that hold silence, distance, and a little bit of uncertainty."
            ],
            tags: ["#Light", "#Silence", "#Mood"]
        },
        {
            type: "Journey",
            title: "Sea & Journey",
            subtitle: "海与行走",
            period: "Ongoing",
            location: "Qingdao and elsewhere",
            description:
                "The sea, the road, and the cities I pass through.",
            details: [
                "Studying in Qingdao makes the sea a quiet part of my everyday life.",
                "I also like recording streets, skies, and small scenes from the places I pass by."
            ],
            tags: ["#Sea", "#Journey", "#City Walk"]
        }
    ];

    const [selectedTag, setSelectedTag] = useState("");

    const handleSelectChange = (event) => {
        setSelectedTag(event.target.value);
    };

    const filteredSections = selectedTag
        ? photoSections.filter((section) => section.type === selectedTag)
        : photoSections;

    return (
        <div className="card" id="internship" style={{ marginTop: "1rem" }}>
            <div className="publications-select">
                <div className="card-title">Photography</div>

                <select
                    className="tag-select-filter"
                    value={selectedTag}
                    onChange={handleSelectChange}
                >
                    <option value="">All</option>
                    <option value="Everyday">Everyday</option>
                    <option value="People">People</option>
                    <option value="Light">Light</option>
                    <option value="Journey">Journey</option>
                </select>
            </div>

            <div className="timeline-container">
                {filteredSections.map((section, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-label">
                            <div className={`exp-type ${section.type.toLowerCase()}`}>
                                {section.type}
                            </div>
                            <div className="timeline-period-label">
                                {section.period}
                            </div>
                        </div>

                        <div className="timeline-content">
                            <div className="exp-container">
                                <div className="timeline-header">
                                    <div className="exp-organization">
                                        <div className="exp-organization-name">
                                            {section.title}
                                        </div>

                                        <div className="exp-role">
                                            {section.subtitle}
                                        </div>
                                    </div>

                                    <div className="exp-period">
                                        <div>{section.period}</div>
                                        <div className="exp-location">
                                            {section.location}
                                        </div>
                                    </div>
                                </div>

                                <ul className="exp-details">
                                    <li>{section.description}</li>
                                    {section.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>

                                <ul className="exp-projects">
                                    <li>
                                        <div className="project-roles">
                                            {section.tags.map((tag, i) => (
                                                <span key={i} className="role-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: "1rem", color: "#777", fontStyle: "italic" }}>
                These photos may be incomplete and ordinary, but they are small
                traces of how I see the world.
            </div>
        </div>
    );
}