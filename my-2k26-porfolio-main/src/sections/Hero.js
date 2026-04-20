'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            {/* Ambient gradient orbs */}
            <div className={styles.ambientOrb1} />
            <div className={styles.ambientOrb2} />
            <div className={styles.ambientOrb3} />
            <div className={styles.gridOverlay} />

            <div className={`container ${styles.content}`}>
                <div className={styles.badge}>
                    <span className={styles.badgeDot} />
                    Available for new projects
                </div>

                <h1 className={styles.headline}>
                    I Build Web & Mobile Apps{' '}
                    <br />
                    That <span className="gradient-text">Turn Ideas Into Revenue</span>
                </h1>

                <p className={styles.subtext}>
                    I help startups, businesses, and founders launch scalable web and mobile
                    products that generate users, leads, and sales.
                </p>

                <div className={styles.buttons}>
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
                        Chat on WhatsApp
                    </a>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Projects Delivered</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>30+</span>
                        <span className={styles.statLabel}>Happy Clients</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>4+</span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
