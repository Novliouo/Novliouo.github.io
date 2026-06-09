import React from 'react';
import "../css/All.css";

export default function More() {
    return (
        <div className="card" id="more" style={{ marginTop: "1rem" }}>
            <div className="card-title">Something more...</div>

            <div className="more">
                I am still slowly building this website as a place for my
                thoughts, photographs, and small observations of everyday life.
                It may not be perfect yet, but I hope it can grow with me.
            </div>

            <div className="more">
                <strong>Languages:</strong> Chinese, English, and a little Spanish
                for daily communication.
            </div>

            <div className="more">
                <strong>Interests:</strong> legal writing, photography, visual
                storytelling, AI-assisted research, and the quiet connection
                between law and ordinary lives.
            </div>

            <div className="more">
                <strong>Tools I have explored:</strong> Python, AI research tools,
                C4D rendering, visual presentation, and simple web building.
            </div>

            <div className="more">
                More thoughts and photos will be added here later 🌷
            </div>
        </div>
    );
}