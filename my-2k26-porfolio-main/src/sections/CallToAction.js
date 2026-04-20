'use client';

import { ArrowRight, MessageCircle, Mail } from 'lucide-react';
import styles from './CallToAction.module.css';

export default function CallToAction() {
    return (
        <section className={`section ${styles.cta}`} id="cta">
            <div className={styles.ambientOrb} />
            <div className={styles.ambientOrb2} />
            <div className="container">
                <div className={styles.content}>
                    <span className="section-label reveal">Ready?</span>
                    <h2 className={`${styles.heading} reveal`}>
                        Have an idea?{' '}
                        <span className="gradient-text">Let&apos;s build it.</span>
                    </h2>
                    <p className={`${styles.sub} reveal`}>
                        Let&apos;s turn your vision into a product that generates real results.
                    </p>
                    <div className={`${styles.buttons} reveal`}>
                        <a href="#contact" className="btn btn-primary">
                            Start a Project
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="https://wa.me/2349027349119"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp"
                        >
                            <MessageCircle size={18} />
                            WhatsApp
                        </a>
                        <a href="mailto:uniqueyahya72@gmail.com" className="btn btn-secondary">
                            <Mail size={18} />
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
