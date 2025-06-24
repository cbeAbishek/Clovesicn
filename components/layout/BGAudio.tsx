"use client";
import React, { useState } from "react";

const BGAudio: React.FC = () => {
    const [isAudioMuted, setIsAudioMuted] = useState(false);

    return (
        <>
            <div
                className="fixed bottom-6 left-6 z-50"
                style={{}}
            >
                <button
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg transition-colors duration-300 flex items-center justify-center"
                    aria-label={isAudioMuted ? "Unmute background audio" : "Mute background audio"}
                    onClick={e => {
                        e.stopPropagation();
                        setIsAudioMuted(prev => !prev);
                    }}
                >
                    {isAudioMuted ? (
                        // Mute (Ludice style)
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M9 9v6h4l5 5V4l-5 5H9z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <line x1="4" y1="4" x2="20" y2="20" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    ) : (
                        // Unmute (Ludice style)
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M9 9v6h4l5 5V4l-5 5H9z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.54 8.46a5 5 0 010 7.07" strokeWidth="2" strokeLinecap="round" />
                            <path d="M17.66 6.34a9 9 0 010 12.73" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </div>
            {/* Background Audio */}
            <audio
                src="/bg.mp3"
                autoPlay
                loop
                muted={isAudioMuted}
                style={{ display: 'none' }}
                id="background-audio"
            />
        </>
    );
};

export default BGAudio;