import React from 'react';
import { ChevronsDown, Github, Linkedin, Instagram } from 'lucide-react';
import profileImage from '../assets/optimized-images/admiral_driner/admiral_driner-medium.webp';
import Typewriter from 'typewriter-effect';
import { codeSnippets } from '../data/codeSnippets';

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
      className='relative min-h-svh overflow-hidden flex flex-col lg:flex-row lg:items-center justify-center bg-surface-900'
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
              'text-primary-300',
              'text-primary-400',
              'text-primary-500',
              'text-primary-600',
              'text-emerald-500',
              'text-lime-600',
              'text-primary-700',
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
                <span
                  className='code-glitch'
                  style={{ animationDelay: `${Math.random() * 2.2}s` }}
                >
                  {snippet}
                </span>
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
              'text-primary-300',
              'text-primary-400',
              'text-emerald-400',
              'text-lime-400',
              'text-primary-500',
              'text-teal-500',
              'text-primary-200',
              'text-emerald-300',
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
                <span
                  className='code-glitch'
                  style={{ animationDelay: `${Math.random() * 2.2}s` }}
                >
                  {snippet}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className='container-width relative z-10 w-full flex-1 flex flex-col lg:flex-row lg:items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:py-24'>
        <div className='animate-fade-in w-full flex-1 flex flex-col'>
          <div className='flex flex-col lg:flex-row items-center lg:items-center justify-center gap-4 lg:gap-16 max-w-6xl mx-auto flex-1 w-full'>
            {/* Left Column - Text Content */}
            <div className='flex-1 text-center lg:text-left relative z-20 rounded-2xl px-3 py-2 sm:px-4 lg:p-0 w-full flex flex-col min-h-0'>
              <h1 className='mb-3 lg:mb-6 text-4xl md:text-6xl font-bold'>
                <span className='glitch' data-text="Hi, I'm Driner">
                  <span className='glitch__main bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent'>
                    Hi, I'm Driner
                  </span>
                </span>
                <span className='sr-only'>
                  {' '}
                  — John Driner Familaran, Software Engineer based in Baguio
                  City, Philippines
                </span>
              </h1>

              <p className='text-xl md:text-2xl text-gray-200 mb-3 lg:mb-6'>
                Fullstack Software Engineer
              </p>

              <div className='text-lg text-gray-300 mb-4 lg:mb-2 flex flex-row flex-wrap justify-center lg:justify-start items-center gap-x-2'>
                <span>Grabs a cup of coffee.</span>
                <div className='text-primary-400 font-semibold'>
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

              <p className='hidden lg:block text-md text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0 lg:max-w-none'>
                I'm passionate about building scalable web applications and
                robust backend systems, optimizing performance, and ensuring
                everything runs like clockwork.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-4 lg:mb-8'>
                <button
                  onClick={() =>
                    document
                      .querySelector('#projects')
                      .scrollIntoView({ behavior: 'smooth' })
                  }
                  className='btn-primary px-8 py-3 text-lg shadow-lg shadow-primary-900/40'
                >
                  View My Work
                </button>
              </div>

              {/* Social Links */}
              <div className='flex justify-center lg:justify-start space-x-6'>
                <a
                  href='https://github.com/drineruu'
                  target='_blank'
                  rel='noopener noreferrer me'
                  aria-label='GitHub profile of John Driner Familaran'
                  className='text-gray-300 hover:text-white transition-colors duration-200'
                >
                  <Github size={24} />
                </a>
                <a
                  href='https://linkedin.com/in/jnerfamilaran'
                  target='_blank'
                  rel='noopener noreferrer me'
                  aria-label='LinkedIn profile of John Driner Familaran'
                  className='text-gray-300 hover:text-white transition-colors duration-200'
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href='https://www.instagram.com/dri.ner/'
                  target='_blank'
                  rel='noopener noreferrer me'
                  aria-label='Instagram profile of John Driner Familaran'
                  className='text-gray-300 hover:text-white transition-colors duration-200'
                >
                  <Instagram size={24} />
                </a>
              </div>

              {/* Mobile / tablet portrait — fills leftover space, cropped to the face */}
              <div className='lg:hidden relative flex-1 min-h-[240px] w-full mt-4 overflow-hidden flex items-end justify-center'>
                <img
                  src={profileImage}
                  alt='Illustrated portrait of John Driner Familaran, Software Engineer'
                  width={900}
                  height={1200}
                  className='hero-portrait-outline h-full w-full max-w-md object-cover object-[center_8%] select-none'
                  draggable={false}
                  loading='eager'
                  fetchPriority='high'
                  decoding='async'
                />
                <div
                  className='absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-surface-900 to-transparent'
                  aria-hidden='true'
                />
                <div
                  className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-900 to-transparent'
                  aria-hidden='true'
                />
              </div>
            </div>

            {/* Desktop spacer so text doesn't sit under the absolute portrait */}
            <div
              className='hidden lg:block flex-shrink-0 w-[min(42vw,28rem)]'
              aria-hidden='true'
            />
          </div>
        </div>
      </div>

      {/* Desktop portrait — enlarged, bottom flush with hero */}
      <div className='hidden lg:flex absolute bottom-0 right-16 xl:right-28 2xl:right-64 z-10 pointer-events-none items-end'>
        <img
          src={profileImage}
          alt='Illustrated portrait of John Driner Familaran, Software Engineer'
          width={900}
          height={1200}
          className='hero-portrait-outline h-[min(92vh,820px)] w-auto max-w-[min(48vw,560px)] object-contain object-bottom select-none'
          draggable={false}
          loading='eager'
          fetchPriority='high'
          decoding='async'
        />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200 animate-bounce z-20'
        aria-label='Scroll to about section'
      >
        <ChevronsDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
