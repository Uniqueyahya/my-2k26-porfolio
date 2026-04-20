'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import styles from './Projects.module.css';

const categories = ['All', 'Fintech', 'E-commerce', 'SaaS', 'Mobile App'];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Portfolio</span>
                    <h2 className="section-title">
                        Selected <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Real problems I&apos;ve solved for real businesses.
                    </p>
                </div>

                {/* Filter tabs */}
                <div className={`${styles.filters} reveal`}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={`${styles.grid} stagger-children`}>
                    {filtered.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/project/${project.slug}`}
                            className={`${styles.card} reveal`}
                        >
                            <div
                                className={styles.cardImage}
                                style={{ '--project-color': project.color }}
                            >
                                <span className={styles.category}>
                                    {project.category}
                                </span>
                                <div className={styles.placeholder}>
                                    {project.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                                </div>
                            </div>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardProblem}>{project.problem}</p>
                                <div className={styles.techTags}>
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span key={tech} className={styles.tag}>{tech}</span>
                                    ))}
                                </div>
                                <div className={styles.viewLink}>
                                    View Case Study <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
