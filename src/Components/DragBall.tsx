import { frame, motion, useMotionValue, useSpring } from "framer-motion"
import { RefObject, useEffect, useRef } from "react"

export default function DragBall() {
    const colors = [
        "rgba(255, 82, 82, 0.2)",   // red
        "rgba(106, 90, 205, 0.2)",  // purple
        "rgba(64, 224, 208, 0.2)",  // turquoise
        "rgba(255, 165, 0, 0.2)",   // orange
        "rgba(50, 205, 50, 0.2)",   // lime
        "rgba(147, 112, 219, 0.2)", // violet
    ];

    const balls = Array.from({ length: 6 }, (_, i) => ({
        delay: i * 0.05,
        angle: (i * Math.PI * 2) / 6,
        distance: 50,
        color: colors[i]
    }));

    return (
        <>
            {balls.map((config, index) => (
                <Ball 
                    key={index} 
                    delay={config.delay} 
                    angle={config.angle}
                    distance={config.distance}
                    color={config.color}
                    index={index}  
                />
            ))}
        </>
    );
}

function Ball({ delay, angle, distance, color, index }: { 
    delay: number; 
    angle: number;
    distance: number;
    color: string;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { x, y } = useFollowPointer(ref, delay, angle, distance, index);

    return (
        <motion.div
            ref={ref}
            style={{
                ...ballStyle,
                backgroundColor: color,
                x,
                y,
            }}
        />
    );
}

function useFollowPointer(
    ref: RefObject<HTMLDivElement | null>,
    delay: number,
    angle: number,
    distance: number,
    index: number
) {
    // Created unique spring configuration for each ball
    const springConfig = {
        damping: 7, // Increasing damping for each ball
        stiffness: index % 2 === 0 ? 100 - (index * 10) : 100 + (index * 10), // Decreasing stiffness for each ball
        restDelta: 0.001
    }

    const xPoint = useMotionValue(-1000)
    const yPoint = useMotionValue(-1000)
    const x = useSpring(xPoint, { ...springConfig, delay })
    const y = useSpring(yPoint, { ...springConfig, delay })

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!

            frame.read(() => {
                // Calculating position around the cursor using angle
                const offsetX = Math.cos(angle) * distance
                const offsetY = Math.sin(angle) * distance

                xPoint.set(
                    clientX - element.offsetLeft - element.offsetWidth / 2 + offsetX
                )
                yPoint.set(
                    clientY - element.offsetTop - element.offsetHeight / 2 + offsetY
                )
            })
        }

        window.addEventListener("pointermove", handlePointerMove)
        return () => window.removeEventListener("pointermove", handlePointerMove)
    }, [angle, distance])

    return { x, y }
}

const spring = {
    damping: 5,
    stiffness: 100,
    restDelta: 0.001
}

const ballStyle = {
    position: "fixed" as const,
    width: 20,
    height: 20,
    borderRadius: "50%",
    backdropFilter: "blur(8px)",
    pointerEvents: "none" as const,
    zIndex: 9999,
    mixBlendMode: "screen" as const,
}

