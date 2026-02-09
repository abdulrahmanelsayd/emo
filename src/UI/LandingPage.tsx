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
            height: '100vh',
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
            zIndex: theme === 'white' ? 10 : 0 // Ensure white sections cover the canvas
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
            <Section align="center" padding={isMobile ? "0 5%" : "0 2%"}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ pointerEvents: 'auto', textAlign: 'center' }}
                >
                    <h1 style={{
                        fontSize: isMobile ? '20vw' : '15vw',
                        fontWeight: 900,
                        letterSpacing: '-0.05em',
                        lineHeight: 0.8,
                        background: 'linear-gradient(to bottom, #ffffff, #888888)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        margin: 0,
                        filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))'
                    }}>
                        LUMINA
                    </h1>
                    <p style={{ fontSize: isMobile ? '1rem' : '1.5rem', opacity: 0.7, marginTop: '1rem', letterSpacing: '0.2em' }}>
                        THE AFFILIATE NEXUS
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <span style={{ fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '30px' }}>
                            SCROLL TO START
                        </span>
                    </div>
                </motion.div>
            </Section>

            {/* PAGE 2: WHITE MANIFESTO */}
            <Section align="center" theme="white" padding={isMobile ? "0 5%" : "0 15%"}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ pointerEvents: 'auto', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: isMobile ? '10vw' : '6vw', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '2rem' }}>
                        THE NEW STANDARD.
                    </h2>
                    <p style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', opacity: 0.6, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                        We don't just track clicks. We engineer ecosystem dominance.
                        Lumina is the world's first AI-driven affiliate verification layer.
                    </p>
                </motion.div>
            </Section>

            {/* PAGE 3: ANALYTICS (Dark, see-through to Kinect) */}
            <Section align={isMobile ? 'center' : 'right'} padding={isMobile ? "0 5%" : "0 10%"}>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        pointerEvents: 'auto',
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(20px)',
                        padding: '40px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        maxWidth: '500px',
                        textAlign: isMobile ? 'center' : 'left'
                    }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Transparent Analytics</h2>
                    <p style={{ lineHeight: 1.6, marginBottom: '2rem', opacity: 0.8 }}>
                        Holographic tracking of every conversion.
                        Our deep-scan technology ensures 100% attribution accuracy.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#80ff80' }}>99.9%</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>UPTIME</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#80ff80' }}>0.01s</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>LATENCY</div>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* PAGE 4: WHITE DATA */}
            <Section align="left" theme="white" padding={isMobile ? "0 5%" : "0 10%"}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ pointerEvents: 'auto', maxWidth: isMobile ? '100%' : '80%' }}
                >
                    <h2 style={{ fontSize: isMobile ? '15vw' : '8vw', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', color: '#000' }}>
                        PURE DATA.<br />
                        PURE PROFIT.
                    </h2>
                    <div style={{ marginTop: '3rem', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '2rem' : '4rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>01. VERIFY</h3>
                            <p style={{ opacity: 0.6, maxWidth: '300px' }}>Real-time user verification eliminates bot traffic instantly.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>02. SCALE</h3>
                            <p style={{ opacity: 0.6, maxWidth: '300px' }}>Infrastructure built to handle 10M+ events per second.</p>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* PAGE 5: CTA */}
            <Section align="left" padding={isMobile ? "0 5%" : "0 10%"}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ pointerEvents: 'auto', maxWidth: '600px', textAlign: isMobile ? 'center' : 'left' }}
                >
                    <h2 style={{ fontSize: isMobile ? '15vw' : '4rem', lineHeight: 1 }}>Global scale. <br /> Local Reach.</h2>
                    <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', margin: '2rem 0', opacity: 0.8 }}>
                        Join a network of 500,000+ elite affiliates lighting up the digital map.
                    </p>
                    <button style={{
                        background: '#fff',
                        color: '#000',
                        border: 'none',
                        padding: '15px 40px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        width: isMobile ? '100%' : 'auto'
                    }}>
                        JOIN THE NETWORK
                    </button>
                </motion.div>
            </Section>

            {/* MEGA FOOTER */}
            <Section align="center" padding={isMobile ? "10% 5%" : "5% 10%"}>
                <div style={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr 1fr',
                    gap: '2rem',
                    pointerEvents: 'auto',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '3rem',
                    textAlign: isMobile ? 'left' : 'left'
                }}>
                    {/* COL 1: BRAND */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', margin: '0 0 1rem 0' }}>LUMINA</h3>
                        <p style={{ opacity: 0.5, fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Redefining digital attribution through holographic verification networks.
                        </p>
                    </div>

                    {/* COL 2: PLATFORM */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', margin: '0 0 1rem 0', opacity: 0.7 }}>PLATFORM</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', opacity: 0.6, lineHeight: 2 }}>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Solutions</a></li>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Integration</a></li>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a></li>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>API Docs</a></li>
                        </ul>
                    </div>

                    {/* COL 3: COMPANY */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', margin: '0 0 1rem 0', opacity: 0.7 }}>COMPANY</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', opacity: 0.6, lineHeight: 2 }}>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</a></li>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</a></li>
                            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
                        </ul>
                    </div>

                    {/* COL 4: NEWSLETTER */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', margin: '0 0 1rem 0', opacity: 0.7 }}>STAY UPDATED</h4>
                        <div style={{ display: 'flex', marginTop: '1rem' }}>
                            <input type="email" placeholder="email@domain.com" style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#fff',
                                padding: '10px',
                                borderRadius: '4px 0 0 4px',
                                width: '100%',
                                outline: 'none'
                            }} />
                            <button style={{
                                background: '#fff',
                                color: '#000',
                                border: 'none',
                                padding: '0 15px',
                                borderRadius: '0 4px 4px 0',
                                fontWeight: 'bold',
                                cursor: 'pointer'
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
