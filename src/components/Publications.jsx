import React, { useState } from "react";
import "../css/Publications.css";

const thoughts = [
    {
        id: "law-people",
        category: "Law",
        title: "Law & People",
        subtitle: "法律与具体的人",
        description:
            "Reflections on how law meets concrete lives: dignity, evidence, vulnerability, and the possibility of being heard.",
        details: [
            "I am interested in the moments when legal rules leave the page and enter a person's real life.",
            "Here I may write about cases, legal texts, public issues, and the quiet distance between abstract rules and concrete suffering."
        ],
        tags: ["#Law", "#People", "#Justice", "#Observation"]
    },
    {
        id: "reading-fragments",
        category: "Fragments",
        title: "Reading Notes & Fragments",
        subtitle: "读书笔记与生活碎片",
        description:
            "Fragments from books, cases, articles, and ordinary days — things that made me stop, think, or feel.",
        details: [
            "Some thoughts are not complete enough to become essays, but still worth keeping.",
            "This section is for reading notes, small observations, unfinished questions, and moments that continue to stay with me."
        ],
        tags: ["#Reading", "#Notes", "#Fragments", "#Life"]
    }
];

export default function Publications() {
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredThoughts = selectedCategory
        ? thoughts.filter((item) => item.category === selectedCategory)
        : thoughts;

    const handleSelectChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="publications" id="publications" style={{ marginTop: "1rem" }}>
            <div className="publications-select">
                <div className="card-title">Thoughts</div>

                <select
                    className="tag-select-filter"
                    value={selectedCategory}
                    onChange={handleSelectChange}
                >
                    <option value="">All</option>
                    <option value="Law">Law</option>
                    <option value="Fragments">Fragments</option>
                </select>
            </div>

            <div className="publications-info">
                <div className="publications-info-small">
                    This is where I keep some unfinished thoughts: legal reflections,
                    reading notes, fragments of daily life, and questions I am still
                    learning to ask.
                </div>
            </div>

            <div className="publications-list">
                {filteredThoughts.map((item, index) => (
                    <div key={index} className="publication-card" id={item.id}>
                        <div className="publication-content">

                            <div className="publication-venue">
                                <span className="venue-tag conference">
                                    {item.category}
                                </span>
                            </div>

                            <div className="publication-title-wrapper">
                                <div className="publication-title">
                                    {item.title}
                                </div>
                            </div>

                            <div className="publication-authors">
                                {item.subtitle}
                            </div>

                            <div className="publication-tags">
                                {item.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="tag-item-show"
                                        style={{ color: "#888" }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="publications-info-small" style={{ marginTop: "0.6rem" }}>
                                {item.description}
                            </div>

                            <ul style={{ marginTop: "0.6rem", paddingLeft: "1.2rem" }}>
                                {item.details.map((detail, i) => (
                                    <li key={i} style={{ marginBottom: "0.35rem" }}>
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}