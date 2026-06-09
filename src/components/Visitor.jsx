import React from 'react';

export default function Visitor() {
    return (
        <div
            className="visitor-map-container"
            style={{
                width: '80%',
                margin: '1.5rem auto 0',
                minHeight: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#777',
                fontStyle: 'italic',
                lineHeight: '1.8'
            }}
        >
            <div>
                Thank you for visiting this small corner of mine.
                <br />
                May we keep noticing, thinking, and feeling in ordinary days 🌷
            </div>
        </div>
    );
}