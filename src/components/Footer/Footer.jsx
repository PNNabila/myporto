import React from 'react';
import { Container } from 'react-bootstrap';
import { FaHeart, FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    // Fungsi Scroll to Top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-modern">
            <Container>
                <div className="footer-content">

                    {/* --- BAGIAN KIRI: BRAND & COPYRIGHT --- */}
                    <div className="footer-left">
                        <h2 className="footer-logo">Nahda<span className="dot">.</span></h2>
                        <p className="footer-desc">
                            Crafting digital experiences with <span className="heart-beat"><FaHeart /></span> and Code.
                        </p>
                        <p className="copyright">
                            &copy; {new Date().getFullYear()} Nahda Portfolio. All Rights Reserved.
                        </p>
                    </div>

                    {/* --- BAGIAN KANAN: SOCIALS & BACK TO TOP --- */}
                    <div className="footer-right">
                        <div className="social-links">
                            <span className="social-label">Follow Me:</span>
                            <a href="https://www.instagram.com/pnahdanabila/" className="social-item"><FaInstagram /></a>
                            <a href="https://github.com/PNNabila" className="social-item"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/nahdanabila/" className="social-item"><FaLinkedinIn /></a>
                        </div>

                        {/* Tombol Back to Top Kecil */}
                        <button onClick={scrollToTop} className="btn-scroll-top">
                            <FaArrowUp />
                        </button>
                    </div>

                </div>
            </Container>
        </footer>
    );
};

export default Footer;