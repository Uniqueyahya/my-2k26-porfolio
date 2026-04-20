'use client';

import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.brand}>
                    <span className={styles.name}>Unique<span className={styles.accent}>Yahya</span></span>
                    <p className={styles.tagline}>Building revenue-driven products.</p>
                </div>

                <div className={styles.socials}>
                    <a href="mailto:uniqueyahya72@gmail.com" aria-label="Email">
                        <Mail size={18} />
                    </a>
                    <a href="https://wa.me/2349027349119" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <MessageCircle size={18} />
                    </a>
                    <a href="https://github.com/uniqueyahya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/in/uniqueyahya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                </div>

                <p className={styles.copy}>
                    © {year} Unique Yahya. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
