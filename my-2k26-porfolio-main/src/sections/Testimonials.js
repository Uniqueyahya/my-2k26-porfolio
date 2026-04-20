'use client';

import { Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: 'Working with Unique was incredible. He understood our vision and delivered a product that exceeded expectations.',
        name: 'Coming Soon',
        role: 'Client Testimonial',
        company: '',
    },
    {
        quote: 'Professional, transparent, and results-driven. Unique doesn\'t just build — he thinks strategically about the business.',
        name: 'Coming Soon',
        role: 'Client Testimonial',
        company: '',
    },
    {
        quote: 'Our platform went from idea to launch in record time. The code quality and communication were outstanding.',
        name: 'Coming Soon',
        role: 'Client Testimonial',
        company: '',
    },
];

export default function Testimonials() {
    return (
        <section className="section" id="testimonials">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Testimonials</span>
                    <h2 className="section-title">
                        What Clients <span className="gradient-text">Say</span>
                    </h2>
                    <p className="section-subtitle">
                        Feedback from founders and businesses I&apos;ve worked with.
                    </p>
                </div>

                <div className={`${styles.grid} stagger-children`}>
                    {testimonials.map((t, i) => (
                        <div key={i} className={`${styles.card} reveal`}>
                            <Quote size={28} className={styles.quoteIcon} />
                            <p className={styles.quote}>{t.quote}</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                                <div>
                                    <p className={styles.name}>{t.name}</p>
                                    <p className={styles.role}>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
