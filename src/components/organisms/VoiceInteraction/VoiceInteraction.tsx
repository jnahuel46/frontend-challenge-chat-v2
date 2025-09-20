import React, { useState, useEffect } from 'react';
import GlowingOrb from '../../atoms/GlowingOrb';
import UserOrb from '../../atoms/UserOrb';
import styles from './VoiceInteraction.module.scss';

interface VoiceInteractionProps {
  onEndSession?: () => void;
}

const VoiceInteraction: React.FC<VoiceInteractionProps> = ({ onEndSession }) => {
  const [isUserSpeaking, setIsUserSpeaking] = useState(false);
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleMicrophonePress = () => {
    setIsRecording(true);
    setIsUserSpeaking(true);
    setIsAISpeaking(false);
  };

  const handleMicrophoneRelease = () => {
    setIsRecording(false);
    setIsUserSpeaking(false);

    // Simulate AI response after a brief delay
    setTimeout(() => {
      setIsAISpeaking(true);

      // Stop AI speaking after 3 seconds
      setTimeout(() => {
        setIsAISpeaking(false);
      }, 3000);
    }, 500);
  };

  return (
    <div className={styles.voiceContainer}>
      {/* AI Orb */}
      <div className={`${styles.aiOrbContainer} ${isAISpeaking ? styles.speaking : ''}`}>
        <GlowingOrb size="lg" />
      </div>

      {/* User Orb */}
      <div className={styles.userOrbContainer}>
        <UserOrb
          isSpeaking={isUserSpeaking}
          size={isUserSpeaking ? 'large' : 'normal'}
        />
      </div>

      {/* Microphone Button */}
      <button
        className={`${styles.micButton} ${isRecording ? styles.recording : ''}`}
        onMouseDown={handleMicrophonePress}
        onMouseUp={handleMicrophoneRelease}
        onTouchStart={handleMicrophonePress}
        onTouchEnd={handleMicrophoneRelease}
        aria-label="Hold to speak"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      </button>

      {/* Status Text */}
      <div className={styles.statusText}>
        {isRecording && "Listening..."}
        {isAISpeaking && "Iris is speaking..."}
        {!isRecording && !isAISpeaking && "Hold to speak"}
      </div>
    </div>
  );
};

export default VoiceInteraction;