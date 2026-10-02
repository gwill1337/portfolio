'use client';

import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { DEFAULT_INDENT, resolveResponsive, type Responsive } from '@/helpers/sizeHelper';

interface SkillGroupProps {
    title?: string;
    side?: 'left' | 'right';
    children?: ReactNode;
    skills?: string[];
    row1Count?: number;
    bottomLineIndent?: Responsive<number>; // Отступ длинной нижней линии от края экрана (в px)
}

export function SkillGroup({
    title = "Backend",
    side = "right",
    children,
    skills,
    row1Count = 5,
    bottomLineIndent = DEFAULT_INDENT, // Чем больше число, тем короче длинная нижняя линия
}: SkillGroupProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const pillsRef = useRef<HTMLDivElement>(null);
    const [isTitleReady, setIsTitleReady] = useState(false);
    
    const [pathD, setPathD] = useState<string>('');
    const [svgDimensions, setSvgDimensions] = useState<{ width: number; height: number }>({
        width: 1000,
        height: 200,
    });

    const isRight = side === 'right';

    useEffect(() => {
        const updatePath = () => {
            if (!containerRef.current || !titleRef.current || !pillsRef.current) return;

            const indent = resolveResponsive(bottomLineIndent, window.innerWidth);
            
            const containerRect = containerRef.current.getBoundingClientRect();
            const titleRect = titleRef.current.getBoundingClientRect();
            const pillsRect = pillsRef.current.getBoundingClientRect();

            const W = containerRect.width;

            const topY = titleRect.bottom - containerRect.top + 6;
            const bottomY = pillsRect.bottom - containerRect.top + 14;

            const H = Math.max(bottomY + 20, 120);
            setSvgDimensions({ width: W, height: H });

            const r = 10;

            if (isRight) {
                // Заголовок СПРАВА:
                // Длинная нижняя линия идет влево. Вместо H 0 останавливаем ее на bottomLineIndent
                const titleLeft = titleRect.left - containerRect.left;
                const stepX = titleLeft - 20;

                const d = `
          M ${W} ${topY}
          H ${stepX + r}
          Q ${stepX} ${topY} ${stepX} ${topY + r}
          V ${bottomY - r}
          Q ${stepX} ${bottomY} ${stepX - r} ${bottomY}
          H ${indent}
        `.replace(/\s+/g, ' ').trim();

                setPathD(d);
            } else {
                // Заголовок СЛЕВА:
                // Длинная нижняя линия идет вправо. Вместо H W останавливаем ее на (W - bottomLineIndent)
                const titleRight = titleRect.right - containerRect.left;
                const stepX = titleRight + 20;

                const d = `
          M 0 ${topY}
          H ${stepX - r}
          Q ${stepX} ${topY} ${stepX} ${topY + r}
          V ${bottomY - r}
          Q ${stepX} ${bottomY} ${stepX + r} ${bottomY}
          H ${W - indent}
        `.replace(/\s+/g, ' ').trim();

                setPathD(d);
            }
        };

        updatePath();

        const resizeObserver = new ResizeObserver(() => updatePath());
        if (containerRef.current) resizeObserver.observe(containerRef.current);
        if (pillsRef.current) resizeObserver.observe(pillsRef.current);

        window.addEventListener('resize', updatePath);
        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updatePath);
        };
    }, [title, side, row1Count, bottomLineIndent]);

    const rawItems: ReactNode[] = children
        ? React.Children.toArray(children)
        : (skills || []).map((skill, index) => (
            <span
                key={index}
                className="px-4 py-1.5 bg-white/10 text-white font-semibold text-sm rounded-full border border-white/10 shadow-md whitespace-nowrap backdrop-blur-sm"
            >
                {skill}
            </span>
        ));

    const row1 = rawItems.slice(0, row1Count);
    const row2 = rawItems.slice(row1Count);

    return (
        <div ref={containerRef} className="relative w-full py-6 my-4 overflow-visible">
            <div
                className={`flex w-full items-start gap-8 ${isRight ? 'flex-row-reverse justify-between' : 'flex-row justify-between'
                    }`}
            >
                {/* Заголовок */}
                <div className="shrink-0 pt-1">
                    <motion.h2
                        ref={titleRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        onAnimationComplete={() => {
                            // Пересчитываем линию, когда заголовок встал на свое финальное место
                            window.dispatchEvent(new Event('resize'));
                            setIsTitleReady(true);
                        }}
                        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
                    >
                        {title}
                    </motion.h2>
                </div>

                {/* Блок пилюль с динамическим сдвигом (правее на правой стороне, левее на левой) */}
                <motion.div
                    ref={pillsRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`flex-1 flex flex-col items-center gap-3.5 z-10 transition-transform ${isRight ? 'sm:translate-x-6' : 'sm:-translate-x-6'
                        }`}
                >
                    {/* Верхний ряд */}
                    {row1.length > 0 && (
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {row1.map((item, idx) => (
                                <React.Fragment key={idx}>{item}</React.Fragment>
                            ))}
                        </div>
                    )}

                    {/* Нижний ряд */}
                    {row2.length > 0 && (
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {row2.map((item, idx) => (
                                <React.Fragment key={idx}>{item}</React.Fragment>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>

            {/* SVG-линия */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                {pathD && (
                    <svg
                        width="100%"
                        height={svgDimensions.height}
                        viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="overflow-visible"
                    >
                        <motion.path
                            d={pathD}
                            stroke="#7E3BE3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            // whileInView={{ pathLength: 1, opacity: 1 }}
                            animate={
                                isTitleReady
                                    ? { pathLength: 1, opacity: 1 }
                                    : { pathLength: 0, opacity: 0 }
                            }
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        />
                    </svg>
                )}
            </div>
        </div >
    );
}