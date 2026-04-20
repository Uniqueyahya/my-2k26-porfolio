'use client';

import styles from './TechStack.module.css';

const techs = [
    { name: 'React', icon: '⚛️' },
    { name: 'React Native', icon: '📱' },
    { name: 'Expo', icon: '🚀' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '⚡' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'Git', icon: '📋' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Next.js', icon: '▲' },
    { name: 'JavaScript', icon: '💛' },
];

export default function TechStack() {
    return (
        <section className="section section-alt">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Technologies</span>
                    <h2 className="section-title">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="section-subtitle">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </div>

                <div className={`${styles.grid} stagger-children`}>
                    {techs.map((tech, i) => (
                        <div key={i} className={`${styles.card} reveal`}>
                            <span className={styles.icon}>{tech.icon}</span>
                            <span className={styles.name}>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
