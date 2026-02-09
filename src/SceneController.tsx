import { useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { FluidStart } from './scenes/FluidStart'
import { DepthAnalytics } from './scenes/DepthAnalytics'
import { ShapeShifter } from './scenes/ShapeShifter'

export const SceneController = ({ intro, introPhase = 0 }: { intro: boolean, introPhase?: number }) => {
    const { viewport } = useThree()
    // Mobile Logic: Dim the background significantly for readability
    const isMobile = viewport.width < 5
    const mobileScale = isMobile ? 0.7 : 1
    const mobileOpacity = isMobile ? 0.3 : 1 // 30% opacity on mobile

    const scroll = useScroll()
    const [scrollProgress, setScrollProgress] = useState(0)

    // Refs for scene groups to control opacity/visibility
    const fluidRef = useRef<THREE.Group>(null)
    const depthRef = useRef<THREE.Group>(null)
    const networkRef = useRef<THREE.Group>(null)
    const onboardingRef = useRef<THREE.Group>(null)
    const introRef = useRef<THREE.Group>(null)

    useFrame(() => {
        setScrollProgress(scroll.offset)

        if (intro) {
            // INTRO MODE: Only show the intro sequence
            if (fluidRef.current) fluidRef.current.visible = false
            if (depthRef.current) depthRef.current.visible = false
            if (networkRef.current) networkRef.current.visible = false
            if (onboardingRef.current) onboardingRef.current.visible = false
            if (introRef.current) introRef.current.visible = true
            return
        }

        // STANDARD SCROLL MODE
        if (introRef.current) introRef.current.visible = false

        // 5 PAGES TOTAL
        // Page 0: Fluid
        // Page 1: White
        // Page 2: Depth
        // Page 3: White
        // Page 4: Network

        // FLUID SCENE: Visible on Page 0 (0.0 - 0.2). Fades out by 0.2.
        if (fluidRef.current) {
            // Range(0, 1/5) covers the first page
            const opacity = 1 - scroll.range(0, 1 / 5)
            fluidRef.current.position.z = -scroll.offset * 5 // Parallax push
            // @ts-ignore
            fluidRef.current.visible = opacity > 0.01
        }

        // DEPTH SCENE: Visible on Page 2 (0.4 - 0.6).
        if (depthRef.current) {
            // Curve centered at 2/4 = 0.5? No, page 2 is 40%-60%
            // scroll.curve(offset, length)
            // We want it to peak at 0.5 (Page 2.5 center). 2/5 = 0.4 start. 
            const curve = scroll.curve(2 / 5, 1 / 5)
            // @ts-ignore
            depthRef.current.visible = curve > 0.01
            depthRef.current.rotation.y = scroll.offset * Math.PI
        }

        // NETWORK SCENE: Visible on Page 4 (0.8 - 1.0).
        if (networkRef.current) {
            const fadeIn = scroll.range(4 / 5, 1 / 5)
            // @ts-ignore
            networkRef.current.visible = fadeIn > 0.01
        }

        // ONBOARDING (reuse Kinect): Visible at very end
        if (onboardingRef.current) {
            const fadeIn = scroll.range(0.9, 0.1)
            // @ts-ignore
            onboardingRef.current.visible = fadeIn > 0.01
            // @ts-ignore
            onboardingRef.current.position.z = -10 + (fadeIn * 10)
        }
    })

    return (
        <>
            {/* INTRO SCENE */}
            <group ref={introRef} visible={intro} scale={[mobileScale, mobileScale, mobileScale]}>
                <DepthAnalytics intensity={1} variant="intro" introPhase={introPhase} />
            </group>

            <group ref={fluidRef}>
                <FluidStart opacity={(1 - scrollProgress * 2) * mobileOpacity} />
            </group>

            <group ref={depthRef}>
                <DepthAnalytics intensity={scrollProgress * mobileOpacity} />
            </group>

            {/* SHAPE SHIFTER (Sprite Effect) */}
            <group ref={networkRef} scale={[0.005, 0.005, 0.005]}>
                <ShapeShifter />
            </group>
            {/* ONBOARDING KINECT REUSE */}
            <group ref={onboardingRef} scale={[mobileScale, mobileScale, mobileScale]}>
                <DepthAnalytics intensity={scrollProgress * mobileOpacity} variant="onboarding" />
            </group>
        </>
    )
}
