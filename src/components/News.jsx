import React from 'react';
import "../css/All.css";

function News() {
    const notes = [
        {
            time: "2026.06",
            content: <>Started building this personal website as a small room for my thoughts, photographs, and fragments of everyday life.</>
        },
        {
            time: "2026.04",
            content: <>Started working as a research assistant on a National Social Science Fund project in international law.</>
        },
        {
            time: "2025.11",
            content: <>Joined the “Blue Dream · Innovation” research project and began exploring the pink tax, gendered marketing, and consumer rights protection.</>
        },
        {
            time: "2025.10",
            content: <>Completed a 2,500-word English mediation memorandum on a dispute involving an AI-based credit system, contract performance, and algorithmic bias.</>
        },
        {
            time: "2025.07",
            content: <>Worked as a judge assistant intern at Jinmen Road Tribunal, Shinan District People's Court of Qingdao, assisting with civil tort cases.</>
        },
        {
            time: "2025.05",
            content: <>Participated in the “Shangfa Cup” Client Interviewing Competition and contributed to a 42-page Legal Opinion.</>
        },
        {
            time: "2025.05",
            content: <>Worked on a public case analysis project about ESG greenwashing in high-carbon enterprises, using China Shenhua as a case study.</>
        },
        {
            time: "Ongoing",
            content: <>Keeping notes, taking photos, and learning to observe ordinary life more patiently.</>
        },
    ];

    return (
        <div className="News" id="news">
            <div className="card-title">Notes</div>

            <ul className="news-list">
                {notes.map((item, index) => (
                    <li key={index}>
                        <div className="news-time">{item.time}</div>
                        <div className="news-content">{item.content}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default News;