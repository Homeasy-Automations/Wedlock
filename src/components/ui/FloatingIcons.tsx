'use client';

import { FaHeart } from 'react-icons/fa';
import { GiVineFlower, GiFlowerPot, GiButterfly, GiFlowerEmblem } from 'react-icons/gi';
import type { IconType } from 'react-icons';

type FloatItem = {
  Icon: IconType;
  top: string;
  left: string;
  size: number;
  color: string;
  opacity: number;
  duration: number;
  delay: number;
  rotate: number;
};

// Fixed (non-random) layout so server & client markup always match.
const ITEMS: FloatItem[] = [
  { Icon: FaHeart, top: '8%', left: '6%', size: 26, color: '#E28B94', opacity: 0.18, duration: 7, delay: 0, rotate: -12 },
  { Icon: GiVineFlower, top: '14%', left: '88%', size: 46, color: '#C9A24B', opacity: 0.16, duration: 9, delay: 1.2, rotate: 8 },
  { Icon: GiFlowerPot, top: '30%', left: '4%', size: 40, color: '#9B4A5A', opacity: 0.14, duration: 8, delay: 0.6, rotate: -6 },
  { Icon: FaHeart, top: '22%', left: '48%', size: 18, color: '#F0C6CD', opacity: 0.22, duration: 6, delay: 2, rotate: 15 },
  { Icon: GiButterfly, top: '45%', left: '92%', size: 34, color: '#E28B94', opacity: 0.16, duration: 10, delay: 0.3, rotate: -10 },
  { Icon: GiFlowerEmblem, top: '60%', left: '10%', size: 44, color: '#C9A24B', opacity: 0.12, duration: 8.5, delay: 1.6, rotate: 4 },
  { Icon: FaHeart, top: '68%', left: '80%', size: 22, color: '#9B4A5A', opacity: 0.16, duration: 7.5, delay: 0.9, rotate: -18 },
  { Icon: GiVineFlower, top: '78%', left: '55%', size: 38, color: '#E28B94', opacity: 0.14, duration: 9.5, delay: 2.4, rotate: -5 },
  { Icon: GiFlowerPot, top: '85%', left: '20%', size: 30, color: '#C9A24B', opacity: 0.15, duration: 7, delay: 1, rotate: 10 },
  { Icon: FaHeart, top: '38%', left: '25%', size: 16, color: '#F0C6CD', opacity: 0.2, duration: 6.5, delay: 1.8, rotate: 20 },
  { Icon: GiButterfly, top: '5%', left: '35%', size: 24, color: '#9B4A5A', opacity: 0.14, duration: 8, delay: 0.5, rotate: 6 },
  { Icon: GiFlowerEmblem, top: '92%', left: '75%', size: 28, color: '#E28B94', opacity: 0.13, duration: 9, delay: 2.1, rotate: -8 },
];

export default function FloatingIcons() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {ITEMS.map((item, i) => (
        <span
          key={i}
          className="absolute animate-floaty"
          style={{
            top: item.top,
            left: item.left,
            color: item.color,
            opacity: item.opacity,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            transform: `rotate(${item.rotate}deg)`,
          }}
        >
          <item.Icon size={item.size} />
        </span>
      ))}
    </div>
  );
}
