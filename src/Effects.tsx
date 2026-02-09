import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'

export const Effects = () => {
    return (
        <EffectComposer>
            <Bloom
                luminanceThreshold={0.2}
                mipmapBlur
                intensity={0.5}
                radius={0.4}
            />
            <Noise opacity={0.05} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
    )
}
