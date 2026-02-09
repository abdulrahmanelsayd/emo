import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return isMobile
}

const Section = ({ children, align = 'left', padding = '0 10%', theme = 'dark' }: { children: React.ReactNode, align?: 'left' | 'right' | 'center', padding?: string, theme?: 'dark' | 'white' }) => {
    return (
        <section style={{
            minHeight: '100vh', // Allow content to overflow/scroll naturally
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
            padding: padding,
            boxSizing: 'border-box',
            backgroundColor: theme === 'white' ? '#ffffff' : 'transparent',
            color: theme === 'white' ? '#000000' : '#ffffff',
            position: 'relative',
            zIndex: theme === 'white' ? 10 : 0,
            // Mobile: Ensure some vertical breathing room if content stacks
            paddingTop: '80px',
            paddingBottom: '80px'
        }}>
            {children}
        </section>
    )
}

export const LandingPageUI = () => {
    const isMobile = useIsMobile()

    return (
        <div style={{ width: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>

            {/* PAGE 1: HERO */}
            <Section align="center" padding={isMobile ? "0 24px" : "0 4%"}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                        pointerEvents: 'auto',
                        textAlign: 'center',
                        width: '100%',
                        maxWidth: '1400px', // constrain slightly on ultra-wide
                        background: 'rgba(255, 255, 255, 0.03)', // Very subtle glass
                        backdropFilter: 'blur(10px)',
                        borderRadius: isMobile ? '30px' : '50px', // Rounded corners
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        padding: isMobile ? '40px 20px' : '80px 40px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
                    }}
                >
                    <h1 style={{
                        fontSize: isMobile ? '3.5rem' : '12vw', // Reduced desktop size slightly to fit in card
                        fontWeight: 900,
                        letterSpacing: '-0.03em',
                        lineHeight: 0.9,
                        color: '#fff',
                        margin: 0,
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}>
                        LUMINA
                    </h1>
                    <p style={{
                        fontSize: isMobile ? '1rem' : '1.5rem',
                        opacity: 0.8,
                        marginTop: isMobile ? '1.5rem' : '2rem',
                        letterSpacing: '0.2em',
                        lineHeight: 1.5,
                        textTransform: 'uppercase'
                    }}>
                        The Affiliate Nexus
                    </p>
                    <div style={{ marginTop: isMobile ? '2rem' : '4rem' }}>
                        <span style={{
                            fontSize: '0.75rem',
                            border: '1px solid rgba(255,255,255,0.3)',
                            padding: '12px 24px',
                            borderRadius: '30px',
                            background: 'rgba(0,0,0,0.4)',
                            backdropFilter: 'blur(10px)',
                            letterSpacing: '0.1em'
                        }}>
                            SCROLL TO ENTER
                        </span>
                    </div>
                </motion.div>
            </Section>

            {/* PAGE 2: WHITE MANIFESTO */}
            <Section align="center" theme="white" padding={isMobile ? "0 24px" : "0 15%"}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ pointerEvents: 'auto', textAlign: 'center' }}
                >
                    <h2 style={{
                        fontSize: isMobile ? '2.5rem' : '6vw',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        color: '#000'
                    }}>
                        THE NEW STANDARD.
                    </h2>
                    <p style={{
                        fontSize: isMobile ? '1.1rem' : '1.5rem',
                        opacity: 0.7,
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                        fontWeight: 400
                    }}>
                        We don't just track clicks. We engineer ecosystem dominance.
                    </p>
                </motion.div>
            </Section>

            {/* PAGE 3: ANALYTICS */}
            <Section align={isMobile ? 'center' : 'right'} padding={isMobile ? "0 24px" : "0 10%"}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        pointerEvents: 'auto',
                        background: 'linear-gradient(180deg, rgba(20,20,20,0.8) 0%, rgba(0,0,0,0.9) 100%)',
                        backdropFilter: 'blur(40px)',
                        padding: '32px',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        maxWidth: '500px',
                        textAlign: isMobile ? 'left' : 'left',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1, letterSpacing: '-0.02em' }}>Transparent Analytics</h2>
                    <p style={{ lineHeight: 1.6, marginBottom: '2rem', opacity: 0.7, fontSize: '1rem' }}>
                        Holographic tracking of every conversion. Deep-scan technology ensures 100% attribution accuracy.
                    </p>
                    <div style={{ display: 'flex', gap: '40px' }}>
                        <div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff' }}>99.9%</div>
                            <div style={{ fontSize: '0.7rem', opacity: 0.5, letterSpacing: '0.1em', marginTop: '4px' }}>UPTIME</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff' }}>0.01s</div>
                            <div style={{ fontSize: '0.7rem', opacity: 0.5, letterSpacing: '0.1em', marginTop: '4px' }}>LATENCY</div>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* PAGE 4: WHITE DATA */}
            <Section align="left" theme="white" padding={isMobile ? "0 24px" : "0 10%"}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ pointerEvents: 'auto', maxWidth: isMobile ? '100%' : '80%' }}
                >
                    <h2 style={{
                        fontSize: isMobile ? '3rem' : '8vw',
                        fontWeight: 900,
                        lineHeight: 0.9,
                        letterSpacing: '-0.03em',
                        color: '#000',
                        marginBottom: '2rem'
                    }}>
                        PURE DATA.<br />
                        PURE PROFIT.
                    </h2>
                    <div style={{ marginTop: '3rem', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '2rem' : '4rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', opacity: 0.5 }}>01. Verify</h3>
                            <p style={{ opacity: 0.8, maxWidth: '300px', lineHeight: 1.5, fontSize: '1rem' }}>Real-time user verification eliminates bot traffic instantly.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', opacity: 0.5 }}>02. Scale</h3>
                            <p style={{ opacity: 0.8, maxWidth: '300px', lineHeight: 1.5, fontSize: '1rem' }}>Infrastructure built to handle 10M+ events per second.</p>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* PAGE 5: CTA */}
            <Section align="left" padding={isMobile ? "0 24px" : "0 10%"}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        pointerEvents: 'auto',
                        maxWidth: '600px',
                        textAlign: isMobile ? 'left' : 'left',
                        padding: isMobile ? '0' : '0'
                    }}
                >
                    <h2 style={{ fontSize: isMobile ? '3rem' : '4rem', lineHeight: 0.95, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                        Global Scale. <br /> Local Reach.
                    </h2>
                    <p style={{ fontSize: '1.1rem', margin: '0 0 2rem 0', opacity: 0.7, lineHeight: 1.6, maxWidth: '100%' }}>
                        Join a network of 500,000+ elite affiliates lighting up the digital map.
                    </p>
                    <button style={{
                        background: '#fff',
                        color: '#000',
                        border: 'none',
                        padding: '18px 32px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        borderRadius: '100px',
                        cursor: 'pointer',
                        width: isMobile ? '100%' : 'auto',
                        boxShadow: '0 10px 40px rgba(255,255,255,0.1)'
                    }}>
                        Get Started
                    </button>
                </motion.div>
            </Section>

            {/* MEGA FOOTER */}
            <Section align="center" padding={isMobile ? "60px 24px" : "5% 10%"}>
                <div style={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr 1fr',
                    gap: isMobile ? '3rem' : '2rem',
                    pointerEvents: 'auto',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '3rem',
                    textAlign: 'left'
                }}>
                    {/* COL 1: BRAND */}
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>LUMINA</h3>
                        <p style={{ opacity: 0.4, fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '200px' }}>
                            Redefining digital attribution.
                        </p>
                    </div>

                    {/* COL 2: PLATFORM */}
                    <div>
                        <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', margin: '0 0 1.2rem 0', opacity: 0.4, letterSpacing: '0.1em' }}>PLATFORM</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', opacity: 0.7, lineHeight: 2.5 }}>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Solutions</a></li>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Integration</a></li>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a></li>
                        </ul>
                    </div>

                    {/* COL 3: COMPANY */}
                    <div>
                        <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', margin: '0 0 1.2rem 0', opacity: 0.4, letterSpacing: '0.1em' }}>COMPANY</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', opacity: 0.7, lineHeight: 2.5 }}>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</a></li>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
                        </ul>
                    </div>

                    {/* COL 4: NEWSLETTER */}
                    <div style={{ gridColumn: isMobile ? 'auto' : 'auto' }}>
                        <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', margin: '0 0 1.2rem 0', opacity: 0.4, letterSpacing: '0.1em' }}>STAY UPDATED</h4>
                        <div style={{ display: 'flex', marginTop: '0.5rem', width: '100%' }}>
                            <input type="email" placeholder="email@domain.com" style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#fff',
                                padding: '12px 16px',
                                borderRadius: '8px 0 0 8px',
                                width: '100%',
                                outline: 'none',
                                fontSize: '0.9rem'
                            }} />
                            <button style={{
                                background: '#fff',
                                color: '#000',
                                border: 'none',
                                padding: '0 20px',
                                borderRadius: '0 8px 8px 0',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '1.2rem'
                            }}>→</button>
                        </div>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'space-between', alignItems: 'center', marginTop: '4rem', opacity: 0.3, fontSize: '0.8rem', gap: '1rem' }}>
                    <div>© 2026 LUMINA INC.</div>
                    <div>PRIVACY POLICY &nbsp;&nbsp; TERMS OF SERVICE</div>
                </div>
            </Section>

        </div>
    )
}
