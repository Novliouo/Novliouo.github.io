import React from 'react';
import "../css/All.css"

function About() {
    return (
        <div className="about" id="about">
            <div className="intro-text">
                Hi, I'm <strong>Yufan Wu</strong>（吴雨凡, aka Yvonne Wu）, an{" "}
                <strong>undergraduate law student</strong> at{" "}
                <a
                    href="https://www.ouc.edu.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ocean University of China
                </a>
                .

                <br /><br />

                I am a quiet observer, a slow thinker, and someone who is
                easily moved by <strong>concrete lives</strong>. I like staying
                with small emotions, ordinary encounters, and the overlooked
                corners of everyday life. For a long time, I thought softness
                meant being unclear or unmemorable. Now I see it as my way of
                understanding the world.

                <br /><br />

                This website is a small room for my{" "}
                <strong>thoughts</strong>, <strong>photographs</strong>, and
                fragments of life. Here, I write about what I read, what I
                notice, and what continues to trouble or move me. I also use
                photography to keep moments that might otherwise disappear: a
                passing street scene, a quiet face, a patch of light, or an
                ordinary afternoon.

                <br /><br />

                I hope this place can hold both my legal reflections and my
                personal way of seeing. To me, law begins not only from rules
                and cases, but also from the ability to notice people, listen to
                stories, and care about lives that are often left unseen.

                <div className="callout">
                    Welcome to my little corner of the internet 🌷
                </div>
            </div>
        </div>
    );
}

export default About;