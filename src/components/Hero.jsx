import React from 'react';
import face from '../assets/face.png';
import "../css/Hero.css";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
    const links = [
        { icon: <MdEmail />, url: "mailto:novliouo@qq.com" },
        { icon: <FaGithub />, url: "https://github.com/Novliouo" },
    ];

    return (
        <div className="hero-grid">
            <div className="hero-left">
                <img
                    src={face}
                    alt="Profile"
                    className="profile-pic"
                />

                <div className="hero-meta">
                    <div className="meta-name">Yufan Wu 吴雨凡</div>

                    <div>Undergraduate Law Student</div>

                    <div className="meta-description">
                        <div>🔮 Law </div>
                        <div>🌿 Thoughts & Meditations</div>
                        <div>📷 Photography & Visual Stories</div>
                    </div>

                    <div className="meta-link">
                        <a
                            className="meta-linkitem"
                            href="#publications"
                        >
                            Thoughts
                        </a>

                        <a
                            className="meta-linkitem"
                            href="#internship"
                        >
                            Photography
                        </a>
                    </div>

                    <div className="contact-small">
                        {links.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>

                    <div className="small-text">
                        Last Updated Date: 2026/06/09
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;