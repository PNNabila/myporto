import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { aboutData } from '../../data/aboutData';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">

            {/* Divider Gelombang (Wave) */}
            <div className="custom-shape-divider-top">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>

            <Container>
                <Row className="align-items-center justify-content-center">

                    {/* KOLOM FOTO */}
                    <Col md={5} className="mb-5 mb-md-0">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="about-img-wrapper"
                        >
                            {/* Box Pink Belakang */}
                            <div className="img-backdrop"></div>
                            {/* Foto Utama */}
                            <img src={aboutData.image} alt="Profile" className="img-fluid about-img" />
                        </motion.div>
                    </Col>

                    {/* KOLOM TEKS (Statistik sudah dihapus) */}
                    <Col md={6} className="ps-lg-5">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h5 className="text-pink fw-bold">{aboutData.subtitle}</h5>
                            <h2 className="display-5 fw-bold mb-4">{aboutData.title}</h2>
                            <p className="about-desc">
                                {aboutData.description}
                            </p>

                            {/* Tombol Contact Kecil (Opsional pengganti statistik) */}
                            <a href="#contact" className="btn btn-outline-danger rounded-pill mt-3 px-4">Let's Talk</a>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;