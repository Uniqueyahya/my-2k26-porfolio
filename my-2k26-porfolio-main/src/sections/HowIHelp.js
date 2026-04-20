'use client';

import { Zap, Globe, Lightbulb, Heart, TrendingUp, ArrowRight } from 'lucide-react';
import styles from './HowIHelp.module.css';

const cards = [
    {
        icon: <Zap size={24} />,
        problem: 'Manual processes wasting time',
        solution: 'I build systems that automate operations',
        color: '#F59E0B',
    },
    {
        icon: <Globe size={24} />,
        problem: 'No online presence',
        solution: 'I design high-converting websites',
        color: '#3B82F6',
    },
    {
        icon: <Lightbulb size={24} />,
        problem: 'Idea but no product',
        solution: 'I turn ideas into live apps',
        color: '#8B5CF6',
    },
    {
        icon: <Heart size={24} />,
        problem: 'Low customer engagement',
        solution: 'I build apps users love to use',
        color: '#EC4899',
    },
    {
        icon: <TrendingUp size={24} />,
        problem: 'Poor scalability',
        solution: 'I build with architecture ready for growth',
        color: '#10B981',
    },
];

export default function HowIHelp() {
    return (
        <section className={`section section-alt`} id="how-i-help">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Why Me</span>
                    <h2 className="section-title">
                        How I Help Businesses <span className="gradient-text">Grow With Technology</span>
                    </h2>
                    <p className="section-subtitle">
                        I solve real business problems with purpose-built technology solutions.
                    </p>
                </div>

                <div className={`${styles.grid} stagger-children`}>
                    {cards.map((card, i) => (
                        <div key={i} className={`${styles.card} reveal`}>
                            <div className={styles.iconWrap} style={{ '--card-color': card.color }}>
                                {card.icon}
                            </div>
                            <div className={styles.cardContent}>
                                <p className={styles.problem}>{card.problem}</p>
                                <ArrowRight size={16} className={styles.arrow} />
                                <p className={styles.solution}>{card.solution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
