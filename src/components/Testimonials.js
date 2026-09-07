import React from 'react';
import { Quote, Star, Linkedin } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechStart Inc.',
      image: 'bg-gradient-to-br from-pink-400 to-red-500',
      rating: 5,
      text: 'Working with [Driner] was an absolute pleasure. Their technical expertise and attention to detail resulted in a web application that exceeded our expectations. The project was delivered on time and the code quality was exceptional.',
      linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
      project: 'E-commerce Platform',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Digital Solutions Co.',
      image: 'bg-gradient-to-br from-primary-400 to-primary-600',
      rating: 5,
      text: "I've worked with many developers, but [Driner] stands out for their problem-solving skills and ability to translate complex requirements into elegant solutions. Highly recommend for any full-stack development project.",
      linkedinUrl: 'https://linkedin.com/in/michaelchen',
      project: 'Task Management System',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Creative Agency',
      image: 'bg-gradient-to-br from-green-400 to-teal-500',
      rating: 5,
      text: 'The website [Driner] built for us not only looks amazing but also performs incredibly well. Our conversion rates increased by 35% after the launch. Professional, responsive, and highly skilled.',
      linkedinUrl: 'https://linkedin.com/in/emilyrodriguez',
      project: 'Marketing Website',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Startup Founder',
      company: 'InnovateLab',
      image: 'bg-gradient-to-br from-primary-300 to-primary-500',
      rating: 5,
      text: 'As a non-technical founder, I needed someone who could not only code but also guide me through technical decisions. [Driner] was instrumental in bringing our MVP to life and setting up our tech infrastructure.',
      linkedinUrl: 'https://linkedin.com/in/davidkim',
      project: 'SaaS MVP Development',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'HR Manager',
      company: 'Enterprise Corp',
      image: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      rating: 5,
      text: 'We hired [Driner] to modernize our internal tools. The transformation was remarkable - what used to take hours now takes minutes. The user interface is intuitive and the performance is outstanding.',
      linkedinUrl: 'https://linkedin.com/in/lisathompson',
      project: 'Internal Dashboard',
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Senior Developer',
      company: 'Code Masters',
      image: 'bg-gradient-to-br from-primary-300 to-primary-600',
      rating: 5,
      text: "I had the pleasure of collaborating with [Driner] on a complex project. Their code is clean, well-documented, and follows best practices. A true professional who I'd love to work with again.",
      linkedinUrl: 'https://linkedin.com/in/jameswilson',
      project: 'API Development',
    },
  ];

  const renderStars = rating => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section id='testimonials' className='section-padding bg-surface-800/50'>
      <div className='container-width'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            What Clients Say
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Don't just take my word for it. Here's what some of my clients and
            colleagues have to say about working with me.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className='card p-6 relative hover:scale-105 transition-all duration-300'
            >
              {/* Quote Icon */}
              <div className='absolute top-4 right-4 text-primary-400/20'>
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className='flex items-center mb-4'>
                {renderStars(testimonial.rating)}
                <span className='ml-2 text-sm text-gray-400'>
                  ({testimonial.rating}.0)
                </span>
              </div>

              {/* Testimonial Text */}
              <p className='text-gray-300 mb-6 text-sm leading-relaxed'>
                "{testimonial.text}"
              </p>

              {/* Project Reference */}
              <div className='mb-4'>
                <span className='bg-primary-600/20 text-primary-300 px-2 py-1 rounded text-xs font-medium'>
                  Project: {testimonial.project}
                </span>
              </div>

              {/* Client Info */}
              <div className='flex items-center justify-between pt-4 border-t border-surface-600'>
                <div className='flex items-center'>
                  <div
                    className={`w-12 h-12 ${testimonial.image} rounded-full mr-4 flex items-center justify-center`}
                  >
                    <span className='text-white font-bold text-sm'>
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-white text-sm'>
                      {testimonial.name}
                    </h4>
                    <p className='text-gray-400 text-xs'>{testimonial.role}</p>
                    <p className='text-primary-400 text-xs'>
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <a
                  href={testimonial.linkedinUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-primary-400 transition-colors duration-200'
                  title='View LinkedIn Profile'
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <div className='max-w-3xl mx-auto'>
            <h3 className='text-2xl font-bold mb-4 text-primary-400'>
              Ready to Work Together?
            </h3>
            <p className='text-gray-300 mb-8'>
              Join these satisfied clients and let's create something amazing
              together. I'm committed to delivering high-quality solutions that
              exceed expectations.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button
                onClick={() =>
                  document
                    .querySelector('#contact')
                    .scrollIntoView({ behavior: 'smooth' })
                }
                className='btn-primary px-8 py-3'
              >
                Start Your Project
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector('#projects')
                    .scrollIntoView({ behavior: 'smooth' })
                }
                className='btn-secondary px-8 py-3'
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
