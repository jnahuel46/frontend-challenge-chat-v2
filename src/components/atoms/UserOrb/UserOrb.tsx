import React from 'react';
import styles from './UserOrb.module.scss';

interface UserOrbProps {
  isSpeaking?: boolean;
  size?: 'normal' | 'large';
  className?: string;
}

const UserOrb: React.FC<UserOrbProps> = ({
  isSpeaking = false,
  size = 'normal',
  className = ''
}) => {
  const sizeClass = size === 'large' ? styles.large : styles.normal;
  const speakingClass = isSpeaking ? styles.speaking : '';

  return (
    <div className={`${styles.orbContainer} ${sizeClass} ${speakingClass} ${className}`}>
      <svg
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.orb}
      >
        <g filter="url(#filter0_g_1_371)">
          <g clipPath="url(#clip0_1_371)">
            <rect x="19" y="19" width="48" height="48" rx="24" fill="url(#paint0_linear_1_371)"/>
            <g style={{mixBlendMode: 'color-dodge'}} filter="url(#filter1_f_1_371)">
              <path d="M50.1859 57.1588C61.7746 61.3276 74.794 55.4046 79.2655 43.9293C83.7371 32.454 77.9675 19.7719 66.3788 15.6031L30.0891 2.54838C18.5004 -1.62048 5.48104 4.30255 1.0095 15.7778C-3.46205 27.2531 2.30754 39.9352 13.8962 44.1041L50.1859 57.1588Z" fill="url(#paint1_radial_1_371)"/>
            </g>
          </g>
        </g>
        <defs>
          <filter id="filter0_g_1_371" x="0.530434" y="0.530434" width="84.9391" height="84.9391" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feTurbulence type="fractalNoise" baseFrequency="95.833335876464844 95.833335876464844" numOctaves="3" seed="5094" />
            <feDisplacementMap in="shape" scale="36.939132690429688" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
            <feMerge result="effect1_texture_1_371">
              <feMergeNode in="displacedImage"/>
            </feMerge>
          </filter>
          <filter id="filter1_f_1_371" x="-10.9392" y="-9.22107" width="102.153" height="78.1493" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="5.21739" result="effect1_foregroundBlur_1_371"/>
          </filter>
          <linearGradient id="paint0_linear_1_371" x1="43" y1="19" x2="43" y2="67" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA86"/>
            <stop offset="1" stopColor="#FD5533"/>
          </linearGradient>
          <radialGradient id="paint1_radial_1_371" cx="0" cy="0" r="1" gradientTransform="matrix(-30.204 5.28053 21.6705 22.742 60.2196 29.4972)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5DAAAE"/>
            <stop offset="1" stopColor="#484EB7" stopOpacity="0"/>
            <stop offset="1" stopColor="#9FA7FF" stopOpacity="0"/>
          </radialGradient>
          <clipPath id="clip0_1_371">
            <rect x="19" y="19" width="48" height="48" rx="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default UserOrb;