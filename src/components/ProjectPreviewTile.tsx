import React from 'react';
import { motion, AnimatePresence, MotionValue } from 'framer-motion';
import { Project } from '../types';

interface ProjectPreviewTileProps {
  hovered: Project | null;
  x: MotionValue<number>;
  y: MotionValue<number>;
  reduceMotion: boolean;
}

export const ProjectPreviewTile: React.FC<ProjectPreviewTileProps> = ({
  hovered,
  x,
  y,
  reduceMotion,
}) => (
  <AnimatePresence>
    {hovered && (
      <motion.div
        style={{ x, y }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: reduceMotion ? 0 : 0.15 }}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden w-56 rounded-[10px] border border-ink/10 bg-paper/95 p-4 shadow-[0_24px_48px_-24px_rgba(45,45,45,0.4)] backdrop-blur-sm dark:shadow-none lg:block"
      >
        <p className="mb-2 font-sans text-[10px] uppercase tracking-wider text-muted">Preview</p>
        <p className="font-serif text-sm italic leading-snug text-ink">{hovered.title}</p>
      </motion.div>
    )}
  </AnimatePresence>
);
