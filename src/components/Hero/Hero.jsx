import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Hero.css';
import resumeFile from '../../assets/Resume.pdf'; // Pastikan nama file/huruf besar kecilnya benar

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            {/* Blob Background */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            <Container>
                <Row className="align-items-center" style={{ minHeight: '100vh' }}>
                    <Col md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            {/* GANTI EMOJI DISINI */}
                            <span className="greeting-pill">🌸 Welcome to my portfolio</span>
                            <h1 className="hero-title mt-4">
                                Hi, I'm <span className="text-pink">Nahda</span> <br />
                                Student <span className="outline-text"></span>
                                of Telecommunication <span className="outline-text">Engineering .</span>
                            </h1>
                            <p className="hero-desc mt-3">
                                Learning, exploring, and growing in technology and design.
                            </p>

                            {/* --- BAGIAN TOMBOL DOWNLOAD DIPERBAIKI --- */}
                            <div className="mt-4 d-flex gap-3">

                                <a
                                    href={resumeFile}
                                    download="CV_Nahda_Nabila.pdf"
                                    className="btn-hero-secondary text-decoration-none"
                                >
                                    Download CV
                                </a>
                            </div>
                            {/* --------------------------------------- */}

                        </motion.div>
                    </Col>

                    <Col md={5} className="d-none d-md-block text-center">
                        {/* Nanti diisi foto kamu disini */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;