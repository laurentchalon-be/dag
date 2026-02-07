
import React from 'react';

export const FloatingBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-purple-600/20 rounded-full blur-[160px] blob-animation" />
      <div className="absolute top-[10%] right-[-20%] w-[70vw] h-[70vw] bg-pink-500/15 rounded-full blur-[140px] blob-animation" style={{ animationDelay: '-7s' }} />
      <div className="absolute bottom-[-15%] left-[10%] w-[60vw] h-[60vw] bg-indigo-500/10 rounded-full blur-[180px] blob-animation" style={{ animationDelay: '-14s' }} />
      <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-orange-400/10 rounded-full blur-[120px] blob-animation" style={{ animationDelay: '-21s' }} />
    </div>
  );
};
