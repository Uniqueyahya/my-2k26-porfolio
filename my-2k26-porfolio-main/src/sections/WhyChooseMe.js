'use client';

import { CheckCircle } from 'lucide-react';
import styles from './WhyChooseMe.module.css';

const reasons = [
    'I think like a business owner, not just a developer',
    'Clean, scalable code built for the future',
    'Strong communication and project clarity',
    "I don't just build — I advise",
    'I focus on results, not just delivery',
];

export default function WhyChooseMe() {
    return (
        <section className="section section-alt">
            <div className="container">
                <div className={styles.layout}>
                    <div className="reveal-left">
                        <span className="section-label">My Edge</span>
                        <h2 className={styles.heading}>
                            Why Clients <span className="gradient-text">Choose to Work With Me</span>
                        </h2>
                        <p className={styles.desc}>
                            I don&apos;t just write code — I partner with you to make sure every
                            feature drives your business forward.
                        </p>
                    </div>

                    <div className={`${styles.list} stagger-children`}>
                        {reasons.map((reason, i) => (
                            <div key={i} className={`${styles.item} reveal`}>
                                <CheckCircle size={22} className={styles.check} />
                                <span className={styles.text}>{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
