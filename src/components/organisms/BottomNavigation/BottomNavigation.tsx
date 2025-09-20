import React from "react";
import styles from "./BottomNavigation.module.scss";

interface BottomNavigationProps {
  activeTab?: "insights" | "chat" | "iris" | "explore";
  onTabChange?: (tab: "insights" | "chat" | "iris" | "explore") => void;
  className?: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab = "iris",
  onTabChange,
  className = "",
}) => {
  const tabs = [
    {
      id: "insights" as const,
      label: "Insights",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 3.75C15.6244 3.75 18.5625 6.62123 18.5625 10.1631C18.5625 11.9192 17.84 13.5108 16.6699 14.6689C16.1392 15.1944 15.75 15.8743 15.75 16.6211C15.7498 17.2445 15.2445 17.7498 14.6211 17.75H9.37891C8.75553 17.7498 8.25024 17.2445 8.25 16.6211C8.25 15.8743 7.86079 15.1944 7.33008 14.6689C6.16002 13.5108 5.4375 11.9192 5.4375 10.1631C5.43753 6.62123 8.37565 3.75 12 3.75ZM12 6C11.5858 6 11.25 6.33579 11.25 6.75C11.25 7.16421 11.5858 7.5 12 7.5C13.5335 7.5 14.8125 8.7852 14.8125 10.415C14.8127 10.8291 15.1484 11.165 15.5625 11.165C15.9766 11.165 16.3123 10.8291 16.3125 10.415C16.3125 7.99702 14.4016 6 12 6Z"
            fill="#52525C"
          />
          <path
            d="M13 19.25C13.4142 19.25 13.75 19.5858 13.75 20C13.75 20.4142 13.4142 20.75 13 20.75H11C10.5858 20.75 10.25 20.4142 10.25 20C10.25 19.5858 10.5858 19.25 11 19.25H13Z"
            fill="#52525C"
          />
        </svg>
      ),
    },
    {
      id: "chat" as const,
      label: "Chat",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3334 5C19.1994 5 22.3334 8.13401 22.3334 12C22.3334 15.866 19.1994 19 15.3334 19H2.33337V12C2.33337 8.13401 5.46738 5 9.33337 5H15.3334ZM12.3334 8.25C11.9192 8.25 11.5834 8.58579 11.5834 9V15C11.5834 15.4142 11.9192 15.75 12.3334 15.75C12.7476 15.75 13.0834 15.4142 13.0834 15V9C13.0834 8.58579 12.7476 8.25 12.3334 8.25ZM8.33337 10.25C7.91916 10.25 7.58337 10.5858 7.58337 11V13C7.58337 13.4142 7.91916 13.75 8.33337 13.75C8.74759 13.75 9.08337 13.4142 9.08337 13V11C9.08337 10.5858 8.74759 10.25 8.33337 10.25ZM16.3334 10.25C15.9192 10.25 15.5834 10.5858 15.5834 11V13C15.5834 13.4142 15.9192 13.75 16.3334 13.75C16.7476 13.75 17.0834 13.4142 17.0834 13V11C17.0834 10.5858 16.7476 10.25 16.3334 10.25Z"
            fill="#52525C"
          />
        </svg>
      ),
    },
    {
      id: "iris" as const,
      label: "Iris",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.9" filter="url(#filter0_d_188_60)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.6666 4C17.0849 4 20.6666 7.58172 20.6666 12C20.6666 16.4183 17.0849 20 12.6666 20C8.24835 20 4.66663 16.4183 4.66663 12C4.66663 7.58172 8.24835 4 12.6666 4ZM12.6666 6.25C12.2524 6.25 11.9166 6.58579 11.9166 7C11.9166 7.41421 12.2524 7.75 12.6666 7.75C15.0138 7.75 16.9166 9.65279 16.9166 12C16.9166 12.4142 17.2524 12.75 17.6666 12.75C18.0808 12.75 18.4166 12.4142 18.4166 12C18.4166 8.82436 15.8423 6.25 12.6666 6.25Z"
              fill="#47ECD5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_188_60"
              x="-3.33337"
              y="-4"
              width="32"
              height="32"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.835294 0 0 0 0 0.745098 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_188_60"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_188_60"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
    },
    {
      id: "explore" as const,
      label: "Explore",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.34 5.07001L8.55001 6.91001C8.15302 7.00768 7.79032 7.21214 7.50123 7.50123C7.21214 7.79032 7.00768 8.15302 6.91001 8.55001L5.07001 16.34C4.98185 16.6977 4.98749 17.072 5.0864 17.4268C5.18531 17.7817 5.37414 18.105 5.6346 18.3654C5.89507 18.6259 6.21836 18.8147 6.57319 18.9136C6.92801 19.0125 7.30236 19.0182 7.66001 18.93L15.45 17.09C15.847 16.9923 16.2097 16.7879 16.4988 16.4988C16.7879 16.2097 16.9923 15.847 17.09 15.45L18.93 7.66001C19.0182 7.30236 19.0125 6.92801 18.9136 6.57319C18.8147 6.21836 18.6259 5.89507 18.3654 5.6346C18.105 5.37414 17.7817 5.18531 17.4268 5.0864C17.072 4.98749 16.6977 4.98185 16.34 5.07001ZM13.59 13.59C13.2755 13.905 12.8745 14.1195 12.438 14.2066C12.0015 14.2936 11.5489 14.2492 11.1376 14.079C10.7263 13.9088 10.3748 13.6204 10.1274 13.2503C9.88006 12.8803 9.74803 12.4451 9.74803 12C9.74803 11.5549 9.88006 11.1198 10.1274 10.7497C10.3748 10.3796 10.7263 10.0912 11.1376 9.92102C11.5489 9.7508 12.0015 9.70641 12.438 9.79345C12.8745 9.88049 13.2755 10.0951 13.59 10.41C14.0089 10.8332 14.2439 11.4046 14.2439 12C14.2439 12.5955 14.0089 13.1669 13.59 13.59Z"
            fill="#52525C"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className={`${styles.bottomNav} ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.navItem} ${
            activeTab === tab.id ? styles.active : ""
          }`}
          onClick={() => onTabChange?.(tab.id)}
          aria-label={tab.label}
        >
          <div className={styles.iconContainer}>{tab.icon}</div>
          <span className={styles.label}>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavigation;
