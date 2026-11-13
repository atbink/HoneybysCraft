import React from 'react';

interface IconProps {
  className?: string;
  active?: boolean;
}

/**
 * Bespoke Handcrafted SVG Icons for Honeybys.craft Studio
 * Replaces generic cartoon emojis and broken system glyphs.
 */

// 1. Boneka Custom — Hand-stitched plush doll silhouette
export const PlushDollIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', active = false }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Ears */}
    <circle cx="8" cy="8" r="4" fill={active ? '#F7F0E6' : '#C98B4B'} opacity={active ? 0.9 : 0.85} />
    <circle cx="24" cy="8" r="4" fill={active ? '#F7F0E6' : '#C98B4B'} opacity={active ? 0.9 : 0.85} />
    <circle cx="8" cy="8" r="2" fill={active ? '#4A2F27' : '#765548'} opacity={0.5} />
    <circle cx="24" cy="8" r="2" fill={active ? '#4A2F27' : '#765548'} opacity={0.5} />
    {/* Head */}
    <rect
      x="6"
      y="6"
      width="20"
      height="18"
      rx="9"
      fill={active ? '#F7F0E6' : '#E8D8C5'}
      stroke={active ? '#FCFAF7' : '#765548'}
      strokeWidth="1.5"
    />
    {/* Embroidered eyes */}
    <ellipse cx="12" cy="14" rx="1.5" ry="1.75" fill={active ? '#4A2F27' : '#2A211E'} />
    <ellipse cx="20" cy="14" rx="1.5" ry="1.75" fill={active ? '#4A2F27' : '#2A211E'} />
    {/* Nose & Smile */}
    <ellipse cx="16" cy="17.5" rx="1.5" ry="1" fill={active ? '#C98B4B' : '#765548'} />
    <path
      d="M14.5 19C15 20 17 20 17.5 19"
      stroke={active ? '#4A2F27' : '#765548'}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Blushing cheeks */}
    <circle cx="10" cy="16.5" r="1.5" fill="#E8A598" opacity={0.7} />
    <circle cx="22" cy="16.5" r="1.5" fill="#E8A598" opacity={0.7} />
    {/* Stitched chest / collar bow */}
    <path
      d="M13 24L16 26L19 24"
      stroke={active ? '#C98B4B' : '#C98B4B'}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// 2. Boneka Flanel — Hand-embroidery needle and wool-felt swatch with running stitch
export const FlannelStitchIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', active = false }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Felt swatch square */}
    <rect
      x="5"
      y="7"
      width="20"
      height="20"
      rx="3"
      fill={active ? '#F7F0E6' : '#E8D8C5'}
      stroke={active ? '#FCFAF7' : '#765548'}
      strokeWidth="1.25"
      strokeDasharray="3 2"
    />
    {/* Inner fabric grain lines */}
    <line x1="8" y1="12" x2="22" y2="12" stroke={active ? '#C98B4B' : '#765548'} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    <line x1="8" y1="17" x2="22" y2="17" stroke={active ? '#C98B4B' : '#765548'} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    <line x1="8" y1="22" x2="22" y2="22" stroke={active ? '#C98B4B' : '#765548'} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    {/* Embroidery needle passing through */}
    <path
      d="M27 4L18 13"
      stroke={active ? '#DDA66B' : '#C98B4B'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="26.5" cy="4.5" r="1" fill={active ? '#4A2F27' : '#F7F0E6'} />
    {/* Thread loop */}
    <path
      d="M27 4C28.5 2.5 30 5 28 7C25 9 20 8 18 13"
      stroke={active ? '#FCFAF7' : '#AD7134'}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeDasharray="2 1.5"
    />
  </svg>
);

// 3. Maskot — Bespoke Studio Mascot Star & Pedestal Badge
export const MascotStarIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', active = false }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Circular crest background */}
    <circle cx="16" cy="15" r="11" fill={active ? '#F7F0E6' : '#E8D8C5'} opacity={active ? 0.25 : 0.6} />
    {/* 8-point artisan star */}
    <path
      d="M16 5L18.5 11.5L25 14L18.5 16.5L16 23L13.5 16.5L7 14L13.5 11.5L16 5Z"
      fill={active ? '#F7F0E6' : '#C98B4B'}
      stroke={active ? '#FCFAF7' : '#AD7134'}
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    {/* Pedestal / Studio Ribbon */}
    <path
      d="M10 25C13 23.5 19 23.5 22 25L23 27H9L10 25Z"
      fill={active ? '#DDA66B' : '#765548'}
    />
    <line x1="8" y1="28" x2="24" y2="28" stroke={active ? '#FCFAF7' : '#4A2F27'} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 4. Bantal Custom — Shaped cushion with tufted buttons and stitch perimeter
export const PillowIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', active = false }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Soft curved pillow body */}
    <rect
      x="5"
      y="8"
      width="22"
      height="16"
      rx="6"
      fill={active ? '#F7F0E6' : '#E8D8C5'}
      stroke={active ? '#FCFAF7' : '#765548'}
      strokeWidth="1.5"
    />
    {/* Corner tuft creases */}
    <path d="M5 8C8 10 8 10 9 13" stroke={active ? '#C98B4B' : '#765548'} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    <path d="M27 8C24 10 24 10 23 13" stroke={active ? '#C98B4B' : '#765548'} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    <path d="M5 24C8 22 8 22 9 19" stroke={active ? '#C98B4B' : '#765548'} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    <path d="M27 24C24 22 24 22 23 19" stroke={active ? '#C98B4B' : '#765548'} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    {/* Center tuft button */}
    <circle cx="16" cy="16" r="2.5" fill={active ? '#C98B4B' : '#C98B4B'} />
    <circle cx="16" cy="16" r="1" fill={active ? '#4A2F27' : '#F7F0E6'} />
  </svg>
);

// 5. Tas — Artisanal canvas and plush character tote with handles
export const PlushBagIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', active = false }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Bag handles */}
    <path
      d="M12 11V7C12 5.5 13.5 4 16 4C18.5 4 20 5.5 20 7V11"
      stroke={active ? '#FCFAF7' : '#765548'}
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    {/* Tote bag body */}
    <path
      d="M7 11H25L23.5 27H8.5L7 11Z"
      fill={active ? '#F7F0E6' : '#E8D8C5'}
      stroke={active ? '#FCFAF7' : '#765548'}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Contrast bottom panel */}
    <path
      d="M8 22H24L23.5 27H8.5L8 22Z"
      fill={active ? '#DDA66B' : '#C98B4B'}
      opacity="0.8"
    />
    {/* Small center character patch */}
    <circle cx="16" cy="16.5" r="2.75" fill={active ? '#4A2F27' : '#765548'} />
    <circle cx="14.5" cy="15" r="1.25" fill={active ? '#4A2F27' : '#765548'} />
    <circle cx="17.5" cy="15" r="1.25" fill={active ? '#4A2F27' : '#765548'} />
  </svg>
);

// 6. Pouch — Cute zipper pouch with plush ears and zipper pull tab
export const ZipPouchIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', active = false }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Mini ears */}
    <circle cx="10" cy="10" r="3" fill={active ? '#F7F0E6' : '#C98B4B'} />
    <circle cx="22" cy="10" r="3" fill={active ? '#F7F0E6' : '#C98B4B'} />
    {/* Pouch body */}
    <path
      d="M6 13C6 11 8 10 10 10H22C24 10 26 11 26 13L25 25C25 26.5 23.5 27.5 22 27.5H10C8.5 27.5 7 26.5 7 25L6 13Z"
      fill={active ? '#F7F0E6' : '#E8D8C5'}
      stroke={active ? '#FCFAF7' : '#765548'}
      strokeWidth="1.5"
    />
    {/* Metal zipper track */}
    <line x1="7.5" y1="13.5" x2="24.5" y2="13.5" stroke={active ? '#4A2F27' : '#765548'} strokeWidth="1.5" strokeDasharray="1.5 1" />
    {/* Zipper pull tab with star charm */}
    <path
      d="M23 14V19L24.5 21L26 19V14H23Z"
      fill={active ? '#DDA66B' : '#C98B4B'}
    />
    {/* Face stitching */}
    <circle cx="13" cy="18.5" r="1.25" fill={active ? '#4A2F27' : '#2A211E'} />
    <circle cx="19" cy="18.5" r="1.25" fill={active ? '#4A2F27' : '#2A211E'} />
    <ellipse cx="16" cy="20.5" rx="1.25" ry="0.8" fill={active ? '#C98B4B' : '#765548'} />
  </svg>
);

// 7. Honeybys Studio Mascot Bear Mark — Replaces the cartoon emoji bear with an artisan studio mark!
export const StudioBearMark: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Ears */}
    <circle cx="9" cy="9" r="4.5" fill="#C98B4B" stroke="#4A2F27" strokeWidth="1.5" />
    <circle cx="27" cy="9" r="4.5" fill="#C98B4B" stroke="#4A2F27" strokeWidth="1.5" />
    <circle cx="9" cy="9" r="2.2" fill="#E8D8C5" />
    <circle cx="27" cy="9" r="2.2" fill="#E8D8C5" />
    {/* Head */}
    <rect
      x="6.5"
      y="7"
      width="23"
      height="22"
      rx="11"
      fill="#F7F0E6"
      stroke="#4A2F27"
      strokeWidth="1.75"
    />
    {/* Snout area */}
    <ellipse cx="18" cy="20" rx="6" ry="4.5" fill="#E8D8C5" stroke="#765548" strokeWidth="1" />
    {/* Stitched nose */}
    <ellipse cx="18" cy="18" rx="2" ry="1.4" fill="#4A2F27" />
    {/* Smile */}
    <path
      d="M16 21C16.5 22.5 19.5 22.5 20 21"
      stroke="#4A2F27"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Embroidered eyes */}
    <ellipse cx="13" cy="15" rx="1.6" ry="2" fill="#2A211E" />
    <ellipse cx="23" cy="15" rx="1.6" ry="2" fill="#2A211E" />
    <circle cx="12.4" cy="14.3" r="0.6" fill="#FCFAF7" />
    <circle cx="22.4" cy="14.3" r="0.6" fill="#FCFAF7" />
    {/* Soft blushing cheeks */}
    <circle cx="10" cy="18" r="1.8" fill="#E8A598" opacity="0.65" />
    <circle cx="26" cy="18" r="1.8" fill="#E8A598" opacity="0.65" />
  </svg>
);

// Moodboard Archetype Craft Icons
export const CraftPencilIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M14.5 2.5L17.5 5.5L6.5 16.5H3.5V13.5L14.5 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5 4.5L15.5 7.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const CraftAnimeSparkleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M10 2L11.8 7.5L17.5 9.3L12.5 13L14 18.5L10 15L6 18.5L7.5 13L2.5 9.3L8.2 7.5L10 2Z" fill="currentColor" opacity="0.85" />
  </svg>
);

export const CraftGameBadgeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className}>
    <rect x="2" y="6" width="16" height="10" rx="4" stroke="currentColor" strokeWidth="1.5" />
    <line x1="6" y1="11" x2="10" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="9" x2="8" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="13.5" cy="10" r="1" fill="currentColor" />
    <circle cx="15.5" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const CraftIdolStarIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className}>
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 1.5" />
    <path d="M10 5.5L11.2 8.5L14.5 9L12 11.2L12.7 14.5L10 12.8L7.3 14.5L8 11.2L5.5 9L8.8 8.5L10 5.5Z" fill="currentColor" />
  </svg>
);

export const CraftPetPawIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
    <ellipse cx="6" cy="6.5" rx="1.5" ry="2" />
    <ellipse cx="10" cy="5" rx="1.5" ry="2" />
    <ellipse cx="14" cy="6.5" rx="1.5" ry="2" />
    <ellipse cx="3.5" cy="10" rx="1.2" ry="1.5" />
    <ellipse cx="16.5" cy="10" rx="1.2" ry="1.5" />
    <path d="M5.5 13C5.5 10.5 7.5 9 10 9C12.5 9 14.5 10.5 14.5 13C14.5 15.5 12.5 16.5 10 16.5C7.5 16.5 5.5 15.5 5.5 13Z" />
  </svg>
);

export const CraftMascotCrownIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M3 15L4.5 6L8 10L10 5L12 10L15.5 6L17 15H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="3" y1="16.5" x2="17" y2="16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="4.5" cy="5.5" r="1" fill="currentColor" />
    <circle cx="10" cy="4" r="1" fill="currentColor" />
    <circle cx="15.5" cy="5.5" r="1" fill="currentColor" />
  </svg>
);

export function renderMoodboardIcon(id: string, className = 'w-3.5 h-3.5') {
  switch (id) {
    case 'original-design':
      return <CraftPencilIcon className={className} />;
    case 'anime-character':
      return <CraftAnimeSparkleIcon className={className} />;
    case 'game-character':
      return <CraftGameBadgeIcon className={className} />;
    case 'kpop-character':
      return <CraftIdolStarIcon className={className} />;
    case 'animal-plushie':
      return <CraftPetPawIcon className={className} />;
    case 'custom-mascot':
      return <CraftMascotCrownIcon className={className} />;
    default:
      return <CraftAnimeSparkleIcon className={className} />;
  }
}

