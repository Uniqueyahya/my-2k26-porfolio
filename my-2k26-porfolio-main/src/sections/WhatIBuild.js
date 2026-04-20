'use client';

import {
    Monitor,
    Smartphone,
    LayoutDashboard,
    CreditCard,
    ShoppingCart,
    Server,
    Figma,
} from 'lucide-react';
import styles from './WhatIBuild.module.css';

const services = [
    { icon: <Monitor size={28} />, title: 'Custom Web Applications', desc: 'Scalable web apps tailored to your unique business requirements.' },
    { icon: <Smartphone size={28} />, title: 'Mobile Apps (Android & iOS)', desc: 'Cross-platform mobile apps that deliver native-like experiences.' },
    { icon: <LayoutDashboard size={28} />, title: 'Admin Dashboards', desc: 'Powerful, intuitive admin panels for full control over your data.' },
    { icon: <CreditCard size={28} />, title: 'Fintech & Payment Systems', desc: 'Secure financial platforms with payment integration and compliance.' },
    { icon: <ShoppingCart size={28} />, title: 'E-commerce Platforms', desc: 'Online stores built for conversion, speed, and seamless checkout.' },
    { icon: <Server size={28} />, title: 'API & Backend Systems', desc: 'Robust, well-documented APIs that power your applications.' },
    { icon: <Figma size={28} />, title: 'UI Implementation from Figma', desc: 'Pixel-perfect code from your Figma designs, every time.' },
];

export default function WhatIBuild() {
    return (
        <section className="section" id="services">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Services</span>
                    <h2 className="section-title">
                        What I Can <span className="gradient-text">Build For You</span>
                    </h2>
                    <p className="section-subtitle">
                        End-to-end development services that cover every stage of your product.
                    </p>
                </div>

                <div className={`${styles.grid} stagger-children`}>
                    {services.map((service, i) => (
                        <div key={i} className={`${styles.card} reveal`}>
                            <div className={styles.iconWrap}>{service.icon}</div>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.desc}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
