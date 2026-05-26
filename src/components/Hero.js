import React from 'react';
import { ChevronDown, Github, Linkedin, Instagram } from 'lucide-react';
import profileImage from '../assets/optimized-images/driner-chibi/driner-chibi-medium.webp';
import profileImage2 from '../assets/optimized-images/driner-box/driner-box-medium.webp';
import Typewriter from 'typewriter-effect';
import { codeSnippets } from '../data/codeSnippets';
import ImageWithLoader from './ImageWithLoader';

/** Left → right: softer behind headline, stronger toward the avatar / right side */
const codeBackgroundMask = {
  WebkitMaskImage:
    'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0,0,0,1) 100%)',
  maskImage:
    'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0,0,0,1) 100%)',
  WebkitMaskSize: '100% 100%',
  maskSize: '100% 100%',
};

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      {/* Animated Code Background */}
      <div
        className='absolute inset-0 opacity-60 pointer-events-none'
        style={codeBackgroundMask}
      >
        <div className='relative w-full h-full'>
          {codeSnippets.map((snippet, index) => {
            const textSizes = [
              'text-xs',
              'text-sm',
              'text-base',
              'text-lg',
              'text-xl',
              'text-2xl',
            ];
            const colors = [
              'text-blue-600',
              'text-green-600',
              'text-purple-600',
              'text-cyan-600',
              'text-pink-600',
              'text-yellow-600',
              'text-indigo-600',
              'text-emerald-600',
            ];
            const animations = [
              'animate-float-diagonal',
              'animate-float-horizontal',
              'animate-float-vertical',
            ];
            const randomSize =
              textSizes[Math.floor(Math.random() * textSizes.length)];
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            const randomAnimation =
              animations[Math.floor(Math.random() * animations.length)];

            return (
              <div
                key={index}
                className={`absolute ${randomColor} font-mono ${randomSize} whitespace-nowrap ${randomAnimation}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${12 + Math.random() * 8}s`,
                }}
              >
                {snippet}
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional floating code elements with different speeds */}
      <div
        className='absolute inset-0 opacity-25 pointer-events-none'
        style={codeBackgroundMask}
      >
        <div className='relative w-full h-full'>
          {codeSnippets.slice(0, 15).map((snippet, index) => {
            const textSizes = [
              'text-xs',
              'text-sm',
              'text-base',
              'text-lg',
              'text-xl',
            ];
            const colors = [
              'text-purple-400',
              'text-orange-400',
              'text-teal-400',
              'text-rose-400',
              'text-amber-400',
              'text-lime-400',
              'text-violet-400',
              'text-sky-400',
            ];
            const slowAnimations = [
              'animate-float-diagonal-slow',
              'animate-float-horizontal',
              'animate-float-vertical',
            ];
            const randomSize =
              textSizes[Math.floor(Math.random() * textSizes.length)];
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            const randomSlowAnimation =
              slowAnimations[Math.floor(Math.random() * slowAnimations.length)];

            return (
              <div
                key={`slow-${index}`}
                className={`absolute ${randomColor} font-mono ${randomSize} whitespace-nowrap ${randomSlowAnimation}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${20 + Math.random() * 10}s`,
                }}
              >
                {snippet}
              </div>
            );
          })}
        </div>
      </div>

      <div className='container-width section-padding relative z-10'>
        <div className='animate-fade-in'>
          {/* Main Content - Two Column Layout */}
          <div className='flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto'>
            {/* Left Column - Text Content */}
            <div className='flex-1 text-center lg:text-left'>
              <h1 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                Hi, I'm Driner
              </h1>

              <p className='text-xl md:text-2xl text-gray-300 mb-6'>
                Software Engineer
              </p>

              <div className='text-lg text-gray-400 mb-2 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-2'>
                <span>Grabs a cup of coffee.</span>
                <div className='text-blue-400 font-semibold'>
                  <Typewriter
                    options={{
                      strings: ['Inhale.', 'Exhale.', 'Code.'],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 80,
                      pauseFor: 1500,
                    }}
                  />
                </div>
              </div>

              <p className='text-md text-gray-400 mb-6 max-w-2xl lg:max-w-none'>
                I'm passionate about building scalable web applications and
                designing scalable backend systems, improving performance, and
                ensuring everything runs like clockwork.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8'>
                <button
                  onClick={() =>
                    document
                      .querySelector('#projects')
                      .scrollIntoView({ behavior: 'smooth' })
                  }
                  className='btn-primary px-8 py-3 text-lg'
                >
                  View My Work
                </button>
              </div>

              {/* Social Links */}
              <div className='flex justify-center lg:justify-start space-x-6'>
                <a
                  href='https://github.com/drineruu'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                >
                  <Github size={24} />
                </a>
                <a
                  href='https://linkedin.com/in/jnerfamilaran'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href='https://www.instagram.com/dri.ner/'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image with Flip Animation */}
            <div className='flex-shrink-0 order-first lg:order-last'>
              <div className='w-64 h-64 lg:w-80 lg:h-80 relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 flip-container'>
                  <div className='flip-inner bg-gray-900 rounded-full'>
                    {/* Front face */}
                    <div className='flip-front'>
                      <ImageWithLoader
                        src={profileImage}
                        alt='Driner - Profile Front'
                        className='w-full h-full'
                        imgClassName='rounded-full'
                        onError={e => {
                          console.error(
                            'Front image failed to load:',
                            e.target.src
                          );
                        }}
                      />
                    </div>
                    {/* Back face */}
                    <div className='flip-back'>
                      <ImageWithLoader
                        src={profileImage2}
                        alt='Driner - Profile Back'
                        className='w-full h-full'
                        imgClassName='rounded-full'
                        onError={e => {
                          console.error(
                            'Back image failed to load, using fallback:',
                            e.target.src
                          );
                          e.target.src = profileImage;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200 animate-bounce relative z-10'
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
