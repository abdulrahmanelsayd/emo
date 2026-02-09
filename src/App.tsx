import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import { SceneController } from './SceneController'
import { LandingPageUI } from './UI/LandingPage'
import { Effects } from './Effects'
import './index.css'

function App() {
    const [intro, setIntro] = useState(true)
    const [introPhase, setIntroPhase] = useState(0)

    // Cinematic Intro Sequence
    useEffect(() => {
        // Phase 0: 0s - 1.5s "Connecting..."
        // Phase 1: 1.5s - 3.0s "Analyzing..."
        // Phase 2: 3.0s - 4.5s "Optimizing..."
        // Phase 3: 4.5s - 5.0s "Verified."

        const t1 = setTimeout(() => setIntroPhase(1), 1500)
        const t2 = setTimeout(() => setIntroPhase(2), 3000)
        const t3 = setTimeout(() => setIntroPhase(3), 4500)
        const t4 = setTimeout(() => setIntro(false), 5500) // End intro

        return () => {
            clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4)
        }
    }, [])

    const introText = [
        "ESTABLISHING SECURE CONNECTION...",
        "ANALYZING GLOBAL DATA STREAMS...",
        "OPTIMIZING PREDICTIVE MODELS...",
        "ACCESS GRANTED. WELCOME, AGENT."
    ]

    // Mobile Logic for Scroll Height
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const pages = isMobile ? 6 : 5

    return (
        <>
            <Canvas
                dpr={[1, 2]}
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: false }}
            >
                <color attach="background" args={['#050505']} />

                <Suspense fallback={null}>
                    <ScrollControls pages={pages} damping={0.2} style={{ scrollbarWidth: 'none' }} enabled={!intro}>
                        {/* The 3D Scene transitions based on scroll */}
                        <SceneController intro={intro} introPhase={introPhase} totalPages={pages} />

                        {/* The HTML UI overlay that syncs with scroll */}
                        {!intro && (
                            <Scroll html style={{ width: '100%', height: '100%' }}>
                                <LandingPageUI />
                            </Scroll>
                        )}
                    </ScrollControls>
                    <Effects />
                </Suspense>
            </Canvas>

            {/* Loading / Intro HTML Overlay */}
            {intro && (
                <div style={{
                    position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)',
                    color: introPhase === 3 ? '#00ff88' : 'rgba(255,255,255,0.8)',
                    fontFamily: 'Courier New, monospace',
                    letterSpacing: '0.2em',
                    fontSize: '12px',
                    width: '100%',
                    textAlign: 'center',
                    pointerEvents: 'none',
                    textShadow: introPhase === 3 ? '0 0 10px #00ff88' : 'none'
                }}>
                    {introText[introPhase]}
                </div>
            )}
        </>
    )
}

export default App
