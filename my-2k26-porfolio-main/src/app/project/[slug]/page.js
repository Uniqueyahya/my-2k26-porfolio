'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './page.module.css';

export default function CaseStudyPage() {
    useScrollReveal();
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <div className="container" style={{ textAlign: 'center', paddingTop: '200px' }}>
                    <h1>Project not found</h1>
                    <p style={{ marginTop: 16, marginBottom: 32 }}>The project you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/" className="btn btn-primary">
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero} style={{ '--project-color': project.color }}>
                <div className={styles.heroBg} />
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/#projects" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Projects
                    </Link>
                    <span className={styles.category} style={{ color: project.color, borderColor: `${project.color}40` }}>
                        {project.category}
                    </span>
                    <h1 className={styles.title}>{project.title}</h1>
                    <div className={styles.techRow}>
                        {project.techStack.map((tech) => (
                            <span key={tech} className={styles.techTag}>{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problem / Solution / Outcome */}
            <section className={`section ${styles.details}`}>
                <div className="container">
                    <div className={`${styles.grid} stagger-children`}>
                        <div className={`${styles.detailCard} reveal`}>
                            <div className={styles.detailLabel} style={{ color: '#EF4444' }}>The Problem</div>
                            <p className={styles.detailText}>{project.problem}</p>
                        </div>
                        <div className={`${styles.detailCard} reveal`}>
                            <div className={styles.detailLabel} style={{ color: '#3B82F6' }}>The Solution</div>
                            <p className={styles.detailText}>{project.solution}</p>
                        </div>
                        <div className={`${styles.detailCard} reveal`}>
                            <div className={styles.detailLabel} style={{ color: '#10B981' }}>The Outcome</div>
                            <p className={styles.detailText}>{project.outcome}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className={`section section-alt`}>
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-label">Key Features</span>
                        <h2 className="section-title">What I Built</h2>
                    </div>
                    <div className={`${styles.featureList} stagger-children`}>
                        {project.features.map((feat, i) => (
                            <div key={i} className={`${styles.featureItem} reveal`}>
                                <CheckCircle size={20} style={{ color: project.color }} />
                                <span>{feat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.ctaSection}`}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="reveal">
                        <h2 style={{ marginBottom: 16 }}>
                            Want something <span className="gradient-text">similar?</span>
                        </h2>
                        <p className={styles.ctaText}>
                            Let&apos;s discuss how I can build a solution tailored to your business.
                        </p>
                        <div className={styles.ctaButtons}>
                            <a href="/#contact" className="btn btn-primary">
                                Start a Project <ArrowRight size={18} />
                            </a>
                            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                <MessageCircle size={18} /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
