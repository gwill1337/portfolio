"use client";
import { useTheme } from "@/hooks/useTheme";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { useEffect, useState } from "react";
export function Background() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    else if (theme !== "dark") return (
        <div className="pointer-events-none fixed inset-0 -z-10">
            <ShaderGradientCanvas
                className="bg-fade-in"
                style={{ position: "absolute", inset: 0 }}
                pixelDensity={1}
                fov={45}
            >
                <ShaderGradient
                    animate="on"
                    brightness={1.1}
                    cAzimuthAngle={180}
                    cDistance={3.61}
                    cPolarAngle={90}
                    cameraZoom={1}
                    color1="#C7B2F5"
                    color2="#F7C9D9"
                    color3="#F4EDFB"
                    envPreset="city"
                    grain="on"
                    lightType="3d"
                    positionX={-1.4}
                    positionY={0}
                    positionZ={0}
                    range="disabled"
                    rangeEnd={40}
                    rangeStart={0}
                    reflection={0.1}
                    rotationX={0}
                    rotationY={10}
                    rotationZ={50}
                    shader="defaults"
                    type="plane"
                    uAmplitude={1}
                    uDensity={1.3}
                    uFrequency={5.5}
                    uSpeed={0.1}
                    uStrength={4}
                    uTime={0}
                    wireframe={false}
                />
            </ShaderGradientCanvas>
        </div>
    );

    else return (
        <div className="pointer-events-none fixed inset-0 -z-10">
            <ShaderGradientCanvas
                className="bg-fade-in"
                style={{ position: "absolute", inset: 0 }}
                pixelDensity={1}
                fov={45}
            >
                <ShaderGradient
                    animate="on"
                    brightness={0.75}
                    cAzimuthAngle={180}
                    cDistance={3.6}
                    cPolarAngle={90}
                    cameraZoom={1}
                    color1="#7E3BE3"
                    color2="#1B3A75"
                    color3="#d0bce1"
                    envPreset="city"
                    grain="on"
                    lightType="3d"
                    positionX={-1.4}
                    positionY={0}
                    positionZ={0}
                    range="disabled"
                    rangeEnd={40}
                    rangeStart={0}
                    reflection={0.1}
                    rotationX={0}
                    rotationY={10}
                    rotationZ={50}
                    shader="defaults"
                    type="plane"
                    uAmplitude={1}
                    uDensity={1.2}
                    uFrequency={5.5}
                    uSpeed={0.1}
                    uStrength={2.9}
                    uTime={0}
                    wireframe={false}
                />
            </ShaderGradientCanvas>
        </div>
    );
}