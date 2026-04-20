'use client';

import { useState } from 'react';
import { Send, MessageCircle, Mail, ExternalLink, Github, Linkedin, Calendar } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Project Inquiry from ${form.name}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        );
        window.location.href = `mailto:uniqueyahya72@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className="section section-alt" id="contact">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Get in Touch</span>
                    <h2 className="section-title">
                        Let&apos;s <span className="gradient-text">Work Together</span>
                    </h2>
                    <p className="section-subtitle">
                        Ready to bring your idea to life? Reach out and let&apos;s discuss your project.
                    </p>
                </div>

                <div className={styles.layout}>
                    {/* Form */}
                    <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label className={styles.label}>Name</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Your name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="your@email.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Message</label>
                            <textarea
                                className={styles.textarea}
                                placeholder="Tell me about your project..."
                                rows={5}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>

                    {/* Channels */}
                    <div className={`${styles.channels} reveal`}>
                        <div className={styles.channelCard}>
                            <h3 className={styles.channelTitle}>Direct Channels</h3>
                            <a
                                href="https://wa.me/2349027349119"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.channel}
                            >
                                <div className={styles.channelIcon} style={{ background: 'rgba(37,211,102,0.1)', color: '#25D366' }}>
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <span className={styles.channelName}>WhatsApp</span>
                                    <span className={styles.channelValue}>+2349027349119</span>
                                </div>
                                <ExternalLink size={14} className={styles.channelArrow} />
                            </a>
                            <a
                                href="mailto:uniqueyahya72@gmail.com"
                                className={styles.channel}
                            >
                                <div className={styles.channelIcon} style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span className={styles.channelName}>Email</span>
                                    <span className={styles.channelValue}>uniqueyahya72@gmail.com</span>
                                </div>
                                <ExternalLink size={14} className={styles.channelArrow} />
                            </a>
                        </div>

                        <div className={styles.channelCard}>
                            <h3 className={styles.channelTitle}>Socials</h3>
                            <div className={styles.socialRow}>
                                <a
                                    href="https://github.com/uniqueyahya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialBtn}
                                >
                                    <Github size={18} /> GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/in/uniqueyahya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialBtn}
                                >
                                    <Linkedin size={18} /> LinkedIn
                                </a>
                            </div>
                        </div>

                        <a
                            href="https://calendly.com/uniqueyahya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.calendarBtn}
                        >
                            <Calendar size={18} />
                            Book a Call
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
