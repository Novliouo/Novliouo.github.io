import React from 'react';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-left">
                © {new Date().getFullYear()} Yufan Wu · Thoughts & Photography
            </div>
        </footer>
    );
}

export default Footer;