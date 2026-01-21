import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { certificateData } from '../../data/certificateData';
import { FaEye, FaExternalLinkAlt, FaQuoteLeft, FaAward, FaThLarge } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
    // State untuk Modal Detail (Satu Sertifikat)
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);

    // State untuk Modal "See All" (Daftar Semua Sertifikat)
    const [showAllModal, setShowAllModal] = useState(false);

    // --- HANDLER UNTUK MODAL DETAIL ---
    const handleShowDetail = (cert) => {
        setSelectedCert(cert);
        setShowDetailModal(true);
    };
    const handleCloseDetail = () => setShowDetailModal(false);

    // --- HANDLER UNTUK MODAL SEE ALL ---
    const handleShowAll = () => setShowAllModal(true);
    const handleCloseAll = () => setShowAllModal(false);


    // Komponen Kartu Sertifikat (Dipisah biar bisa dipakai ulang)
    const CertificateCard = ({ item, onClick, delay = 0 }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -10 }}
            className="cert-card-container"
        >
            {/* Hiasan Blob di Belakang */}
            <div className="cert-blob"></div>

            <Card className="cert-card h-100" onClick={onClick}>
                <div className="cert-img-wrapper">
                    <Card.Img variant="top" src={item.image} className="cert-img" />
                    <div className="cert-overlay">
                        <FaEye className="eye-icon-cert" />
                        <span className="view-text">View Details</span>
                    </div>
                </div>

                <Card.Body className="p-4 text-center position-relative z-2">
                    <div className="issuer-badge mb-2">{item.issuer}</div>
                    <Card.Title className="fw-bold cert-title">{item.title}</Card.Title>
                    <small className="text-muted">{item.date}</small>
                </Card.Body>
            </Card>
        </motion.div>
    );


    return (
        <section id="certificates" className="certificates-section">
            <Container>
                <div className="text-center mb-5">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        My <span className="text-pink">Certificates</span>
                    </motion.h2>
                    <p className="text-muted">Bukti kompetensi dan pengembangan profesional saya</p>
                </div>

                {/* --- TAMPILAN UTAMA (HANYA 3 ITEM) --- */}
                <Row className="g-5 justify-content-center">
                    {certificateData.slice(0, 3).map((item, index) => (
                        <Col lg={4} md={6} key={item.id}>
                            <CertificateCard
                                item={item}
                                onClick={() => handleShowDetail(item)}
                                delay={index * 0.1}
                            />
                        </Col>
                    ))}
                </Row>

                {/* --- TOMBOL "SEE ALL" --- */}
                <div className="text-center mt-5 pt-3">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-see-all"
                        onClick={handleShowAll}
                    >
                        See All Certificates <FaThLarge className="ms-2" />
                    </motion.button>
                </div>
            </Container>


            {/* =========================================
          MODAL 1: "SEE ALL CERTIFICATES" LIST
      ========================================= */}
            <Modal
                show={showAllModal}
                onHide={handleCloseAll}
                size="xl" // Ukuran Extra Large biar muat banyak
                centered
                contentClassName="pink-modal-content scrollable-modal"
                backdropClassName="custom-backdrop"
            >
                <Modal.Header closeButton className="border-0 px-4 pt-4">
                    <Modal.Title className="fw-bold">All Certificates Collection 🏆</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-4 pb-5 pt-0">
                    <p className="text-muted mb-4">Klik pada sertifikat untuk melihat detailnya.</p>
                    <Row className="g-4">
                        {/* Mapping SEMUA data di sini */}
                        {certificateData.map((item) => (
                            <Col lg={4} md={6} key={item.id}>
                                {/* Panggil komponen kartu yg sama, tapi tanpa animasi delay biar cepet */}
                                <CertificateCard
                                    item={item}
                                    onClick={() => {
                                        handleShowDetail(item); // Buka detail
                                        // handleCloseAll(); // Opsional: tutup modal list jika mau
                                    }}
                                />
                            </Col>
                        ))}
                    </Row>
                </Modal.Body>
            </Modal>


            {/* =========================================
          MODAL 2: DETAIL SATU SERTIFIKAT
      ========================================= */}
            <Modal
                show={showDetailModal}
                onHide={handleCloseDetail}
                size="lg"
                centered
                contentClassName="pink-modal-content"
                backdropClassName="custom-backdrop-darker" // Backdrop sedikit lebih gelap
                style={{ zIndex: 1060 }} // Pastikan muncul di atas modal "See All"
            >
                <Modal.Header closeButton className="border-0"></Modal.Header>
                <Modal.Body className="px-4 pb-5">
                    {selectedCert && (
                        <div>
                            <div className="modal-cert-img-wrapper mb-4">
                                <img src={selectedCert.image} alt={selectedCert.title} className="modal-cert-img" />
                            </div>

                            <div className="text-center mb-4">
                                <h3 className="fw-bold mb-2">{selectedCert.title}</h3>
                                <p className="text-pink fw-bold mb-0">
                                    <FaAward className="me-2" />
                                    Issued by {selectedCert.issuer} • {selectedCert.date}
                                </p>
                            </div>

                            <div className="modal-description-card">
                                <FaQuoteLeft className="quote-icon-bg" />
                                <p className="position-relative z-1">{selectedCert.description}</p>
                            </div>

                            {selectedCert.credentialLink && (
                                <div className="text-center mt-4">
                                    <a
                                        href={selectedCert.credentialLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-verify"
                                    >
                                        Verify Credential <FaExternalLinkAlt className="ms-2" size={14} />
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                </Modal.Body>
            </Modal>

        </section>
    );
};

export default Certificates;