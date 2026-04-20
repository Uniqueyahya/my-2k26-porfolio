'use client';

import styles from './Process.module.css';
import { Search, PenTool, Code, TestTube, Rocket } from 'lucide-react';

const steps = [
    { icon: <Search size={24} />, title: 'Understand', desc: 'Understand the idea and business goal' },
    { icon: <PenTool size={24} />, title: 'Plan', desc: 'Plan architecture and user flow' },
    { icon: <Code size={24} />, title: 'Build', desc: 'Design and develop for scalability' },
    { icon: <TestTube size={24} />, title: 'Test', desc: 'Testing and refinement' },
    { icon: <Rocket size={24} />, title: 'Launch', desc: 'Launch and ongoing support' },
];

export default function Process() {
    return (
        <section className="section section-alt" id="process">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">How I Work</span>
                    <h2 className="section-title">
                        My <span className="gradient-text">Process</span>
                    </h2>
                    <p className="section-subtitle">
                        A proven approach that takes your idea from concept to launch.
                    </p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, i) => (
                        <div key={i} className={`${styles.step} reveal`}>
                            <div className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</div>
                            <div className={styles.stepIcon}>{step.icon}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                            {i < steps.length - 1 && <div className={styles.connector} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
