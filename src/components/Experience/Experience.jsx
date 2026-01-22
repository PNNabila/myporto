import React, { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData } from '../../data/experienceData';
// Tambahkan FaLink atau FaExternalLinkAlt
import { FaEye, FaTimes, FaQuoteLeft, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const [show, setShow] = useState(false);
    const [selectedExp, setSelectedExp] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleShow = (item) => {
        setSelectedExp(item);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedImage(null);
    };

    return (
        <section id="experience" className="experience-section">
            <Container>
                {/* ... Header Section & Timeline Code (TETAP SAMA) ... */}
                <div className="text-center mb-5">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        My <span className="text-pink">Experience</span>
                    </motion.h2>
                    <p className="text-muted">My Experience and Contributions</p>
                </div>

                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <motion.div
                            className="timeline-item"
                            key={item.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => handleShow(item)}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="hover-overlay">
                                    <FaEye className="eye-icon" />
                                    <span>View Details</span>
                                </div>
                                <span className="date-badge">{item.date}</span>
                                <div className="d-flex align-items-center mb-3">
                                    <img src={item.logo} alt="logo" className="company-logo-sm me-3" />
                                    <div>
                                        <h4 className="role-title mb-0">{item.role}</h4>
                                        <h5 className="company-name mb-0">{item.company}</h5>
                                    </div>
                                </div>
                                <p className="description">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>

            {/* --- MODAL UTAMA --- */}
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                centered
                contentClassName="pink-modal-content"
            >
                <Modal.Header closeButton className="border-0 pb-0"></Modal.Header>

                <Modal.Body className="px-4 pb-4">
                    {selectedExp && (
                        <div>
                            {/* Header Modal */}
                            <div className="text-center mb-4">
                                <div className="modal-logo-wrapper mb-3">
                                    <img src={selectedExp.logo} alt="Company Logo" className="modal-company-logo" />
                                </div>
                                <h2 className="modal-role-title">{selectedExp.role}</h2>
                                <span className="modal-company-badge">
                                    {selectedExp.company} • {selectedExp.date}
                                </span>
                            </div>

                            {/* Deskripsi Utama */}
                            <div className="modal-description-card mb-4">
                                <FaQuoteLeft className="quote-icon-bg" />
                                <p className="position-relative z-1">{selectedExp.fullDescription}</p>
                            </div>

                            {/* --- BAGIAN BARU: ACTIVITY GROUPS (PER DIVISI) --- */}
                            {selectedExp.activityGroups && (
                                <div className="activity-groups-container">
                                    {selectedExp.activityGroups.map((group, idx) => (
                                        <div key={idx} className="group-item mb-4">

                                            {/* Judul Divisi + Link Icon */}
                                            <div className="d-flex align-items-center mb-2">
                                                <h6 className="fw-bold text-pink mb-0 me-2 group-title">
                                                    {group.title}
                                                </h6>
                                                {/* Tombol Link Logo Saja */}
                                                {group.link && (
                                                    <a
                                                        href={group.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="link-icon-badge"
                                                        title="Lihat Bukti / Dokumen"
                                                    >
                                                        <FaExternalLinkAlt size={12} />
                                                    </a>
                                                )}
                                            </div>

                                            {/* List Tugas per Divisi */}
                                            <div className="group-task-list">
                                                {group.items.map((task, i) => (
                                                    <div key={i} className="task-item">
                                                        <FaCheckCircle className="check-icon-sm" />
                                                        <span>{task}</span>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Gallery Grid */}
                            {selectedExp.gallery && selectedExp.gallery.length > 0 && (
                                <div className="mt-4 pt-3 border-top">
                                    <h6 className="fw-bold text-dark mb-3">📸 Documentation</h6>
                                    <div className="gallery-grid">
                                        {selectedExp.gallery.map((photo, idx) => (
                                            <motion.div
                                                key={idx}
                                                className={`gallery-item item-${idx % 3}`}
                                                whileHover={{ scale: 1.02 }}
                                                onClick={() => setSelectedImage(photo)}
                                            >
                                                <img src={photo} alt="Doc" loading="lazy" />
                                                <div className="img-overlay"><FaEye /></div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Modal.Body>
            </Modal>

            {/* Lightbox Overlay */}
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
                            alt="Zoomed"
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

export default Experience;