import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
// Pastikan path import ini menggunakan ../../ agar bisa keluar dari folder components/Skills
import { skillData } from '../../data/skillData';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <Container>
                <div className="text-center mb-5">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fw-bold"
                    >
                        My <span className="text-pink">Skills</span>
                    </motion.h2>
                    <p className="text-muted">Software And Applications That I Use To Support My Skills</p>
                </div>

                <Row className="justify-content-center">
                    {skillData.map((category, index) => (
                        <Col md={4} sm={12} className="mb-4" key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                style={{ height: '100%' }}
                            >
                                <Card className="skill-card h-100">
                                    <Card.Body className="text-center p-4">
                                        <h4 className="skill-title mb-4">{category.category}</h4>
                                        <div className="d-flex flex-wrap justify-content-center gap-3">

                                            {/* Mapping Item Skill */}
                                            {category.items.map((item, idx) => {

                                                return (
                                                    <span key={idx} className="skill-badge d-flex align-items-center gap-2 p-2">
                                                        {/* UPDATE: Ukuran gambar diperbesar jadi 50px */}
                                                        <img
                                                            src={item.icon}
                                                            alt={item.name}
                                                            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                                        />

                                                        {/* Render Text */}
                                                        <span className="fw-semibold">{item.name}</span>
                                                    </span>
                                                );
                                            })}

                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;