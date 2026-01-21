import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Badge } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData } from '../../data/projectData';
import './Projects.css';

// Import Icon-icon yang dibutuhkan
import { IoDocumentAttach } from "react-icons/io5";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaEye, FaQuoteLeft, FaReact, FaBootstrap, FaNodeJs, FaVuejs, FaFigma } from 'react-icons/fa';
import { SiRedux, SiFlutter, SiFirebase, SiDart, SiTailwindcss, SiChartdotjs, SiAdobexd } from 'react-icons/si';

const Projects = () => {
    const [visible, setVisible] = useState(3);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    // Helper untuk memetakan nama teknologi ke Icon
    const getTechIcon = (techName) => {
        switch (techName) {
            case 'React JS': return <FaReact color="#61DAFB" />;
            case 'Redux': return <SiRedux color="#764ABC" />;
            case 'Bootstrap': return <FaBootstrap color="#7952B3" />;
            case 'Node.js': return <FaNodeJs color="#339933" />;
            case 'Flutter': return <SiFlutter color="#02569B" />;
            case 'Firebase': return <SiFirebase color="#FFCA28" />;
            case 'Dart': return <SiDart color="#0175C2" />;
            case 'Vue.js': return <FaVuejs color="#4FC08D" />;
            case 'Tailwind': return <SiTailwindcss color="#06B6D4" />;
            case 'Chart.js': return <SiChartdotjs color="#FF6384" />;
            case 'Figma': return <FaFigma color="#F24E1E" />;
            case 'Adobe XD': return <SiAdobexd color="#FF61F6" />;
            default: return null; // Jika icon tidak ditemukan
        }
    };

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };

    const showLessItems = () => {
        setVisible(3);
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    const handleShow = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };
    const handleClose = () => setShowModal(false);

    return (
        <section id="projects" className="projects-section">
            <Container>
                <div className="text-center mb-5">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        <span className="text-pink">Projects</span>
                    </motion.h2>
                    <p className="text-muted">projects I have worked on</p>
                </div>

                <Row className="g-4">
                    {projectData.slice(0, visible).map((item, index) => (
                        <Col md={4} sm={6} key={item.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="project-card h-100" onClick={() => handleShow(item)}>
                                    <div className="card-img-wrapper">
                                        <Card.Img variant="top" src={item.image} className="project-img" />
                                        <div className="img-overlay">
                                            <FaEye className="eye-icon-project" />
                                            <span className="view-text">View Details</span>
                                        </div>
                                    </div>
                                    <Card.Body className="p-4 d-flex flex-column">
                                        <div>
                                            <Badge bg="light" text="dark" className="mb-2 category-badge">
                                                {item.category}
                                            </Badge>
                                            <Card.Title className="fw-bold mt-2">{item.title}</Card.Title>
                                            <Card.Text className="text-muted small description-truncate">
                                                {item.description}
                                            </Card.Text>
                                        </div>

                                        <div className="d-flex gap-2 flex-wrap mt-auto pt-3">
                                            {item.tech.slice(0, 3).map((t, i) => (
                                                <span key={i} className="tech-pill-mini">{t}</span>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-5">
                    {visible < projectData.length ? (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-show-more"
                            onClick={showMoreItems}
                        >
                            Show More Projects
                        </motion.button>
                    ) : (
                        visible > 3 && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-show-more"
                                onClick={showLessItems}
                            >
                                Show Less
                            </motion.button>
                        )
                    )}
                </div>

            </Container>

            {/* --- MODAL DETAIL PROJECT --- */}
            <Modal
                show={showModal}
                onHide={handleClose}
                size="lg"
                centered
                contentClassName="pink-modal-content"
                backdropClassName="custom-backdrop"
            >
                <Modal.Header closeButton className="border-0"></Modal.Header>
                <Modal.Body className="px-4 pb-5">
                    {selectedProject && (
                        <div>
                            <div className="modal-hero-img mb-4">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </div>

                            <div className="d-flex justify-content-between align-items-start flex-wrap">
                                <div>
                                    <h2 className="fw-bold mb-1">{selectedProject.title}</h2>
                                    <span className="text-pink fw-bold">{selectedProject.category}</span>
                                </div>
                                <div className="d-flex gap-2 mt-2 mt-md-0">
                                    {selectedProject.github && (
                                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-link-icon">
                                            <IoDocumentAttach /> Documentation
                                        </a>
                                    )}
                                    {selectedProject.demo && (
                                        <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="btn-link-icon fill">
                                            <FaExternalLinkAlt /> Report
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* --- UPDATE: DESKRIPSI STYLE EXPERIENCE (QUOTE BOX) --- */}
                            <div className="mt-4 modal-description-card">
                                <FaQuoteLeft className="quote-icon-bg" /> {/* Icon Kutipan */}
                                <p className="position-relative z-1">{selectedProject.fullDescription}</p>
                            </div>

                            {/* --- UPDATE: TECH STACK DENGAN LOGO --- */}
                            <div className="mt-4">
                                <h6 className="fw-bold mb-3">Technologies Used:</h6>
                                <div className="d-flex gap-2 flex-wrap">
                                    {selectedProject.tech.map((tech, idx) => (
                                        <span key={idx} className="tech-pill-icon">
                                            {/* Panggil fungsi getTechIcon */}
                                            <span className="tech-icon">{getTechIcon(tech)}</span>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {selectedProject.gallery && (
                                <div className="mt-5">
                                    <h6 className="fw-bold mb-3">Project Gallery:</h6>
                                    <div className="gallery-grid">
                                        {selectedProject.gallery.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className={`gallery-item item-${idx % 3}`}
                                                onClick={() => setSelectedImage(img)}
                                            >
                                                <img src={img} alt="Gallery" />
                                                <div className="img-overlay"><FaEye /></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Modal.Body>
            </Modal>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            src={selectedImage}
                            className="lightbox-img"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                        />
                        <button className="close-lightbox"><FaTimes /></button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;