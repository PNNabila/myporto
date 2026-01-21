import React, { useState, useRef } from 'react';
import { Container, Modal, Form, Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaUser, FaRegCommentDots, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [show, setShow] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendEmail = (e) => {
        e.preventDefault(); // Mencegah reload halaman
        setIsSending(true);

        // --- CEK DASHBOARD EMAILJS KAMU LAGI ---
        // 1. Service ID: Menu "Email Services"
        // 2. Template ID: Menu "Email Templates"
        // 3. Public Key: Menu "Account" -> "Public Key"

        emailjs.sendForm(
            'service_hxacqhr',    // PASTIKAN INI BENAR SESUAI DASHBOARD (Cek Menu Email Services)
            'template_m3t6wcd',   // Template ID
            form.current,         // Form Ref
            '1uowTU5s7kUidfiF0'   // Public Key
        )
            .then((result) => {
                console.log("SUKSES:", result.text);
                setShow(false);
                setShowToast(true);
                setIsSending(false);
            }, (error) => {
                console.log("ERROR:", error.text);
                // Tampilkan alert biar tau errornya apa di layar
                alert(`Gagal kirim: ${error.text}. Cek Console untuk detail.`);
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="contact-section">
            {/* ... Bagian Background & CTA tetap sama ... */}
            <div className="background-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <Container className="position-relative z-index-1">
                <div className="cta-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="cta-glass-card text-center"
                    >
                        {/* ... Isi CTA tetap sama ... */}
                        <h5 className="sub-title">HAVE A PROJECT IN MIND?</h5>
                        <h2 className="cta-title">Let’s Create Something <br /> <span className="text-gradient">Extraordinary</span> Together</h2>
                        <p className="cta-desc">
                            Whether you have a specific idea or just want to say hello, <br />
                            my inbox is always open for new opportunities.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 64, 129, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-connect-glow"
                            onClick={handleShow}
                        >
                            Start a Conversation <FaPaperPlane className="ms-2" />
                        </motion.button>
                    </motion.div>
                </div>
            </Container>

            {/* --- MODAL FORM --- */}
            <Modal
                show={show}
                onHide={handleClose}
                centered
                size="lg"
                contentClassName="glass-modal-content"
                backdropClassName="blur-backdrop"
            >
                <Modal.Header closeButton className="border-0 px-4 pt-4"></Modal.Header>
                <Modal.Body className="px-5 pb-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold modal-title-custom">Let's Connect! 🚀</h2>
                        <p className="text-muted">Fill in the details below and I'll get back to you ASAP.</p>
                    </div>

                    {/* PERBAIKAN 1: Pindahkan onSubmit ke sini */}
                    <Form ref={form} onSubmit={sendEmail}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="input-label">FULL NAME</Form.Label>
                                    <div className="input-wrapper">
                                        <FaUser className="field-icon" />
                                        <Form.Control
                                            type="text"
                                            name="user_name"
                                            placeholder="John Doe"
                                            className="input-modern"
                                            required // HTML Validation akan jalan
                                        />
                                    </div>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="input-label">WHATSAPP NUMBER</Form.Label>
                                    <div className="input-wrapper">
                                        <FaWhatsapp className="field-icon" />
                                        <Form.Control
                                            type="text"
                                            name="user_whatsapp"
                                            placeholder="+62 8xx xxxx xxxx"
                                            className="input-modern"
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-4">
                            <Form.Label className="input-label">EMAIL ADDRESS</Form.Label>
                            <div className="input-wrapper">
                                <FaEnvelope className="field-icon" />
                                <Form.Control
                                    type="email"
                                    name="user_email"
                                    placeholder="name@example.com"
                                    className="input-modern"
                                    required
                                />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-5">
                            <Form.Label className="input-label">YOUR MESSAGE / GOAL</Form.Label>
                            <div className="input-wrapper">
                                <FaRegCommentDots className="field-icon textarea-icon" />
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    className="input-modern"
                                    required
                                />
                            </div>
                        </Form.Group>

                        {/* PERBAIKAN 2: Ubah type jadi submit dan hapus onClick */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-submit-gradient w-100"
                            type="submit"
                            disabled={isSending}
                        >
                            {isSending ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </Form>
                </Modal.Body>
            </Modal>

            <ToastContainer position="top-end" className="p-3 position-fixed" style={{ zIndex: 9999 }}>
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={5000} autohide className="custom-toast">
                    <Toast.Header closeButton={false} className="toast-header-custom">
                        <FaCheckCircle className="me-2 text-success" />
                        <strong className="me-auto text-dark">Message Sent!</strong>
                        <small className="text-muted">Just now</small>
                        <button type="button" className="btn-close ms-2" onClick={() => setShowToast(false)}></button>
                    </Toast.Header>
                    <Toast.Body className="toast-body-custom">
                        Thank you for reaching out! 💖 <br />
                        I'll get back to you as soon as possible.
                    </Toast.Body>
                </Toast>
            </ToastContainer>

        </section>
    );
};

export default Contact;