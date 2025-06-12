import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);

  useEffect(() => {
    // Trigger explosion effect immediately
    setShowExplosion(true);
    
    // Hide explosion and show main content
    const explosionTimer = setTimeout(() => {
      setShowExplosion(false);
    }, 2000);
    
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => {
      clearTimeout(explosionTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100 flex flex-col items-center justify-center p-6 overflow-hidden relative">
      
      {/* Initial Explosion Effect */}
      {showExplosion && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {/* Central explosion burst */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-explosion-burst">
              <Heart size={200} className="text-rose-500 fill-rose-400" />
            </div>
          </div>
          
          {/* Radiating hearts explosion */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-heart-explosion-${i + 1}`}
            >
              <Heart size={30 + Math.random() * 20} className="text-pink-500 fill-pink-400" />
            </div>
          ))}
          
          {/* Sparkle explosion */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-sparkle-explosion-${i + 1}`}
            >
              <Sparkles size={15 + Math.random() * 10} className="text-yellow-400" />
            </div>
          ))}
          
          {/* Color wave effect */}
          <div className="absolute inset-0 animate-color-wave bg-gradient-radial from-rose-300/30 via-pink-200/20 to-transparent"></div>
        </div>
      )}

      {/* Main Content - appears after explosion */}
      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        {/* Heart Animation Container */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 animate-ping">
            <Heart 
              size={120} 
              className="text-rose-300 fill-rose-200" 
            />
          </div>
          <Heart 
            size={120} 
            className="text-rose-500 fill-rose-400 animate-heart-pulse-intense relative z-10" 
          />
          
          {/* Enhanced floating hearts with more variety */}
          <div className="absolute -top-8 -right-4 animate-float delay-300">
            <Heart size={20} className="text-pink-400 fill-pink-300" />
          </div>
          <div className="absolute -bottom-6 -left-6 animate-float-reverse delay-700">
            <Heart size={16} className="text-rose-400 fill-rose-300" />
          </div>
          <div className="absolute -top-12 left-8 animate-float delay-1000">
            <Heart size={12} className="text-purple-400 fill-purple-300" />
          </div>
          <div className="absolute top-4 -right-12 animate-float-slow delay-500">
            <Heart size={14} className="text-pink-500 fill-pink-400" />
          </div>
          <div className="absolute -bottom-4 right-6 animate-float-reverse delay-1200">
            <Heart size={18} className="text-rose-500 fill-rose-400" />
          </div>
          
          {/* Orbiting hearts */}
          <div className="absolute inset-0 animate-orbit">
            <Heart size={12} className="text-pink-400 fill-pink-300 absolute -top-16 left-1/2 transform -translate-x-1/2" />
          </div>
          <div className="absolute inset-0 animate-orbit-reverse">
            <Heart size={10} className="text-rose-400 fill-rose-300 absolute top-1/2 -right-16 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Message Container with enhanced entrance animation */}
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100 animate-dramatic-entrance relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-4 animate-float-slow">
              <Heart size={20} className="text-rose-300" />
            </div>
            <div className="absolute bottom-4 right-4 animate-float delay-1000">
              <Heart size={16} className="text-pink-300" />
            </div>
            <div className="absolute top-1/2 left-8 animate-float-reverse delay-500">
              <Heart size={12} className="text-purple-300" />
            </div>
          </div>
          
          <div className="text-gray-800 leading-relaxed space-y-6 relative z-10">
            <p className="text-lg md:text-xl font-semibold text-rose-800 mb-6 animate-slide-in-left">
              Meu amor,
            </p>
            
            <p className="text-base md:text-lg animate-slide-in-right delay-300">
              Sei que às vezes a vida pode parecer difícil, e que algumas pessoas podem tentar te magoar ou deixar você triste. Mas nesses momentos, quero que você respire fundo e lembre de todos os momentos feliz e especial que você já teve e imagina quais ainda pode vim.
            </p>
            
            <p className="text-base md:text-lg animate-slide-in-left delay-600">
              Você é uma pessoa incrível, forte e única. Seu sorriso ilumina meus dias, e seu coração gentil inspira todos ao seu redor. Nunca se esqueça do seu valor e de quanto você é amada.
            </p>
            
            <div className="mt-8 text-right animate-slide-in-up delay-900">
              <p className="text-base md:text-lg italic text-rose-700">
                Com todo meu carinho e amor,
              </p>
              <p className="text-lg md:text-xl font-bold text-rose-800 mt-2 flex items-center justify-end gap-2">
                João Victor
                <Heart size={20} className="text-red-500 fill-red-400 animate-heart-pulse-intense" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements with more dynamic animations */}
      <div className="fixed top-10 left-10 opacity-20 animate-float-slow">
        <Heart size={40} className="text-pink-300 fill-pink-200" />
      </div>
      <div className="fixed bottom-10 right-10 opacity-20 animate-float-reverse">
        <Heart size={32} className="text-rose-300 fill-rose-200" />
      </div>
      <div className="fixed top-1/4 right-20 opacity-15 animate-float delay-1000">
        <Heart size={24} className="text-purple-300 fill-purple-200" />
      </div>
      <div className="fixed bottom-1/4 left-20 opacity-15 animate-float-slow delay-700">
        <Heart size={28} className="text-pink-300 fill-pink-200" />
      </div>
      <div className="fixed top-1/3 left-1/4 opacity-10 animate-float-reverse delay-1500">
        <Heart size={20} className="text-rose-400 fill-rose-300" />
      </div>
      <div className="fixed bottom-1/3 right-1/4 opacity-10 animate-float delay-2000">
        <Heart size={22} className="text-pink-400 fill-pink-300" />
      </div>

      {/* Continuous sparkle effects */}
      <div className="fixed top-20 right-1/3 opacity-30 animate-sparkle">
        <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
      </div>
      <div className="fixed bottom-20 left-1/3 opacity-30 animate-sparkle delay-1000">
        <div className="w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
      </div>
      <div className="fixed top-1/2 left-10 opacity-25 animate-sparkle delay-500">
        <div className="w-1 h-1 bg-purple-300 rounded-full"></div>
      </div>
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className={`fixed opacity-20 animate-float-particle-${i + 1}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
        </div>
      ))}
    </div>
  );
}

export default App;