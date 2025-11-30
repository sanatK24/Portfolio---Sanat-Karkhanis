import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeToggle } from './components/ThemeToggle';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const comp = useRef(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const projects = [
        {
            title: "EduMateAI",
            year: "2024",
            description: "An AI-powered educational assistant built with TypeScript. Designed to enhance learning experiences through intelligent interactions.",
            tags: ['TypeScript', 'AI', 'Education'],
            link: "https://github.com/sanatK24/EduMateAI",
            liveUrl: "https://edu-mate-ai.vercel.app"
        },
        {
            title: "Messier Deep Sky Navigator",
            year: "2025",
            description: "Interactive web platform visualizing Charles Messier’s deep-sky catalog. Built for the NASA Space Apps Challenge 2025, fusing astronomy and design.",
            tags: ['HTML', 'Data Visualization', 'NASA Space Apps'],
            link: "https://github.com/sanatK24/messier_catalog_nasa_space_challenge",
            liveUrl: "https://messier-catalog-nasa-space-challeng.vercel.app"
        },
        {
            title: "F1 Driver Sphere UI",
            year: "2024",
            description: "A dynamic user interface for Formula 1 driver statistics and visualization, built with TypeScript.",
            tags: ['TypeScript', 'UI/UX', 'Data'],
            link: "https://github.com/sanatK24/f1-driver-sphere-ui",
            liveUrl: "https://f1-driver-sphere-ui.vercel.app"
        }
    ];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        if (!previewUrl) return;

        const ctx = gsap.context(() => {
            // Animate Cursor
            const cursorTl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
            cursorTl.to('.agent-cursor', {
                x: 200,
                y: 150,
                duration: 1.5,
                ease: 'power2.inOut'
            })
                .to('.agent-cursor', {
                    x: 50,
                    y: 50,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    delay: 1
                })
                .to('.agent-cursor', {
                    x: 300,
                    y: 100,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    delay: 0.5
                });

            // Animate Scroll (Move iframe up)
            const scrollTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            scrollTl.to('.preview-iframe', {
                y: -200, // Scroll down (move content up)
                duration: 2,
                ease: 'power1.inOut',
                delay: 0.5
            })
                .to('.preview-iframe', {
                    y: -400, // Scroll further down
                    duration: 2,
                    ease: 'power1.inOut',
                    delay: 0.5
                })
                .to('.preview-iframe', {
                    y: 0, // Scroll back to top
                    duration: 1.5,
                    ease: 'power2.out',
                    delay: 1
                });

        });

        return () => ctx.revert();
    }, [previewUrl]);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            const tl = gsap.timeline();
            tl.from('.hero-text', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power4.out',
            });

            // Work Animation
            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: '#work',
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });

            // About Animation
            gsap.from('.about-content', {
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 75%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            });

        }, comp);

        return () => ctx.revert();
    }, []);

    return (
        <div className="app" ref={comp}>
            <header style={{ padding: '2rem 0', position: 'fixed', width: '100%', top: 0, zIndex: 100, backdropFilter: 'blur(10px)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Sanat Karkhanis</div>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <ul style={{ display: 'flex', gap: '2rem' }}>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li>
                                <a
                                    href="/data/SanatKarkhanis_resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        border: '1px solid var(--text-color)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '4px',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                        <ThemeToggle />
                    </nav>
                </div>
            </header>

            <main>
                <section id="hero" className="section" style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap-reverse' }}>
                        <div style={{ flex: 1 }}>
                            <h1 className="title hero-text" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1 }}>
                                Aspiring Data Scientist <br />
                                & Developer.
                            </h1>
                            <p className="subtitle hero-text" style={{ maxWidth: '600px', fontSize: '1.25rem' }}>
                                Computer Engineering Student at DY Patil University. Exploring the realms of data analytics, machine learning, and system design.
                            </p>
                        </div>
                        <div className="hero-text" style={{ flexShrink: 0 }}>
                            <div
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '2px solid var(--text-color)',
                                    position: 'relative',
                                    zIndex: 10
                                }}
                                className="headshot-container"
                            >
                                <img
                                    src="/images/sanat.webp"
                                    alt="Sanat Karkhanis"
                                    style={{
                                        height: '100%',
                                        width: 'auto',
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%) translate(-11px, 43px) scale(1.6)',
                                        pointerEvents: 'none'
                                    }}
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://ui-avatars.com/api/?name=Sanat+Karkhanis&background=random&size=300';
                                    }}
                                />
                            </div>
                        </div>
                        <div className="hero-text" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
                            <span style={{ fontSize: '2rem', opacity: 0.5 }}>↓</span>
                        </div>
                    </div>
                </section>

                <section id="work" className="section">
                    <div className="container">
                        <h2 className="title">My Projects</h2>
                        <div style={{ display: 'grid', gap: '4rem' }}>
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="project-card"
                                    style={{ borderTop: '1px solid var(--secondary-text)', paddingTop: '2rem', position: 'relative', cursor: 'pointer' }}
                                    onMouseEnter={() => setPreviewUrl(project.liveUrl)}
                                    onMouseLeave={() => setPreviewUrl(null)}
                                    onClick={() => window.open(project.liveUrl, '_blank')}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
                                        <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>{project.title}</h3>
                                        <span style={{ fontFamily: 'monospace', color: 'var(--secondary-text)' }}>{project.year}</span>
                                    </div>
                                    <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', maxWidth: '600px', fontSize: '1.1rem' }}>
                                        {project.description}
                                    </p>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{ fontSize: '0.9rem', border: '1px solid var(--secondary-text)', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>{tag}</span>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: '2rem' }}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', marginRight: '2rem' }}>View Code</a>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Live Demo</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="about" className="section">
                    <div className="container about-content">
                        <h2 className="title">About Me</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                            <div>
                                <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', lineHeight: 1.8 }}>
                                    As a computer engineering student, I’m excited about exploring various career paths, including data science. My studies currently center around honing programming and system design skills, while also delving into the fascinating realms of data analytics and machine learning.
                                </p>
                                <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', lineHeight: 1.8 }}>
                                    I see data as a powerful tool for uncovering insights and fostering innovation. I'm deeply committed to embracing new opportunities and continuously expanding my skill set in this dynamic field.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Education</h3>
                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>DY Patil University</h4>
                                    <p style={{ color: 'var(--secondary-text)' }}>BTech, Computer Engineering (2023 - 2027)</p>
                                    <p style={{ color: 'var(--secondary-text)' }}>Grade: 8.94</p>
                                </div>
                                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Skills</h3>
                                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    {['Python', 'Java', 'Data Visualization', 'Machine Learning', 'TypeScript', 'React', 'System Design'].map(skill => (
                                        <li key={skill} style={{ border: '1px solid var(--secondary-text)', padding: '0.5rem 1.5rem', borderRadius: '50px', transition: 'all 0.3s ease', cursor: 'default' }}
                                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-color)'}
                                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--secondary-text)'}
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section" style={{ paddingBottom: '10rem' }}>
                    <div className="container">
                        <h2 className="title">Let's Connect</h2>
                        <p className="subtitle">Interested in working together? Get in touch.</p>
                        <a href="mailto:sanat.karkhanis2@gmail.com"
                            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', textDecoration: 'underline', display: 'inline-block', transition: 'transform 0.3s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'skewX(-10deg)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'skewX(0deg)'}
                        >
                            sanat.karkhanis2@gmail.com
                        </a>
                        <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem' }}>
                            <a href="https://github.com/sanatK24" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>GitHub</a>
                            <a href="https://www.linkedin.com/in/sanat-karkhanis-3255a7214/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>LinkedIn</a>
                        </div>
                    </div>
                </section>
            </main>

            {previewUrl && (
                <div style={{
                    position: 'fixed',
                    left: `${mousePos.x + 20}px`,
                    top: `${mousePos.y + 20}px`,
                    width: '400px',
                    height: '250px',
                    zIndex: 9999,
                    backgroundColor: 'var(--bg-color)',
                    border: '1px solid var(--text-color)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    pointerEvents: 'none', // Prevent iframe from capturing mouse events
                    transform: 'translateY(-50%)' // Center vertically relative to cursor
                }}>
                    <div className="preview-content" style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <iframe
                            src={previewUrl}
                            className="preview-iframe"
                            style={{
                                width: '1440px', // Large width for desktop view
                                height: '3000px', // Very large height for scrolling simulation
                                border: 'none',
                                backgroundColor: '#fff',
                                transform: 'scale(0.277)', // Scale down to fit 400px width
                                transformOrigin: 'top left',
                                pointerEvents: 'none',
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }}
                            title="Project Preview"
                            loading="lazy"
                        />
                        {/* Agent Cursor Overlay */}
                        <div className="agent-cursor" style={{
                            position: 'absolute',
                            top: '50px',
                            left: '50px',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            pointerEvents: 'none'
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                                <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19117L11.7841 12.3673H5.65376Z" fill="var(--text-color)" stroke="var(--bg-color)" strokeWidth="1" />
                            </svg>
                            <span style={{
                                background: 'var(--text-color)',
                                color: 'var(--bg-color)',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap'
                            }}>
                                Agent Analyzing...
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
