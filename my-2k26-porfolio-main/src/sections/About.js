'use client';

import Image from 'next/image';
import { MapPin, Briefcase, Coffee } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className={styles.layout}>
                    <div className={`${styles.imageCol} reveal-left`}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/profile.jpeg"
                                alt="Unique Yahya"
                                fill
                                className={styles.profileImage}
                                sizes="(max-width: 768px) 240px, 300px"
                                priority
                                unoptimized
                            />
                            <div className={styles.imageDecor} />
                        </div>
                        <div className={styles.infoBadges}>
                            <div className={styles.badge}>
                                <MapPin size={14} />
                                <span>Nigeria</span>
                            </div>
                            <div className={styles.badge}>
                                <Briefcase size={14} />
                                <span>Freelance</span>
                            </div>
                            <div className={styles.badge}>
                                <Coffee size={14} />
                                <span>Available</span>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.textCol} reveal`}>
                        <span className="section-label">About Me</span>
                        <h2 className={styles.heading}>
                            Hi, I&apos;m <span className="gradient-text">Unique Yahya</span>
                        </h2>
                        <p className={styles.bio}>
                            I&apos;m a professional Web and Mobile App developer focused on building
                            real solutions for real businesses. I specialize in turning ideas into
                            functional, scalable products that users love and businesses rely on.
                        </p>
                        <p className={styles.bio}>
                            My approach is simple: understand the business problem first, then build
                            the technology that solves it. I don&apos;t just deliver code — I deliver
                            outcomes that move the needle for your business.
                        </p>
                        <a href="#contact" className="btn btn-primary" style={{ marginTop: '16px' }}>
                            Let&apos;s Work Together
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
