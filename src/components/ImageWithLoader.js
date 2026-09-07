import React, { useState } from 'react';

const ImageWithLoader = ({ src, alt, className = '', ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{ minHeight: '1px' }}
    >
      {!loaded && (
        <div className='absolute inset-0 flex items-center justify-center z-20 text-primary-500'>
          {/* SVG Loader */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 200 200'
            className='w-12 h-12'
          >
            <circle
              fill='none'
              stroke='currentColor'
              strokeOpacity='1'
              strokeWidth='.5'
              cx='100'
              cy='100'
              r='0'
            >
              <animate
                attributeName='r'
                calcMode='spline'
                dur='2s'
                values='1;80'
                keyTimes='0;1'
                keySplines='0 .2 .5 1'
                repeatCount='indefinite'
              />
              <animate
                attributeName='stroke-width'
                calcMode='spline'
                dur='2s'
                values='0;25'
                keyTimes='0;1'
                keySplines='0 .2 .5 1'
                repeatCount='indefinite'
              />
              <animate
                attributeName='stroke-opacity'
                calcMode='spline'
                dur='2s'
                values='1;0'
                keyTimes='0;1'
                keySplines='0 .2 .5 1'
                repeatCount='indefinite'
              />
            </circle>
          </svg>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={props.onError}
        loading={props.loading || 'lazy'}
        {...props}
        className={`w-full h-full object-cover transition-opacity duration-700 rounded-2xl ${loaded ? 'opacity-100' : 'opacity-0'} ${props.imgClassName || ''}`}
      />
    </div>
  );
};

export default ImageWithLoader;
