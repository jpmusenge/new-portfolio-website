import { useState } from 'react';
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { Project } from '../types';

export function useProjectHover() {
  const [hovered, setHovered] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = shouldReduceMotion
    ? { stiffness: 1000, damping: 100 }
    : { stiffness: 280, damping: 28, mass: 0.5 };
  const tileX = useSpring(mouseX, springConfig);
  const tileY = useSpring(mouseY, springConfig);

  const handlePointer = (e: React.PointerEvent, project: Project) => {
    if (e.pointerType !== 'mouse') return;
    mouseX.set(e.clientX + 22);
    mouseY.set(e.clientY + 22);
    setHovered(project);
  };

  return { hovered, setHovered, handlePointer, tileX, tileY, shouldReduceMotion };
}
