import React from 'react';
import {
  BrainCog,
  Bot,
  BookOpenText,
  Car,
  Bike,
  Code2,
  Heart,
  Mountain,
  Palette,
  Zap,
  Target,
} from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const Personal = () => {
  const hobbies = [
    {
      icon: <BookOpenText size={24} />,
      name: 'Ministry',
      description: (
        <>
          As one of Jehovah's Witnesses, I find joy in sharing the good news
          with others and helping them discover hope through the Bible.
          <br />
          Visit our website at{' '}
          <a
            href='https://www.jw.org'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-300 underline'
          >
            jw.org
          </a>
          !
        </>
      ),
    },
    {
      icon: <Palette size={24} />,
      name: 'Art and Ko-fi',
      description: (
        <>
          I also do digital art. You will see some of my pieces in the carousel.
          <br />
          <br />
          Tips, shop items, and commissions live on{' '}
          <a
            href='https://ko-fi.com/drineruu'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-300 underline'
          >
            ko-fi.com/drineruu
          </a>
          .
        </>
      ),
    },
    {
      icon: <Mountain size={24} />,
      name: 'Hiking and Camping',
      description:
        'Extreme hiking trails and survival skills is the best way to challenge myself.',
    },
    {
      icon: <Car size={24} />,
      name: 'Travelling',
      description:
        "Exploring new places excites me! Whether it's a weekend getaway or a long road trip.",
    },
    {
      icon: <Bike size={24} />,
      name: 'Rides',
      description:
        'Cruising around on my scooter is my kind of therapy — chill rides, long thoughts.',
    },
    {
      icon: <Code2 size={24} />,
      name: 'Learning',
      description:
        'I also explore new tools, frameworks, and backend concepts.',
    },
  ];

  const quickQA = [
    {
      question: "What's your coding fuel?",
      answer:
        'A perfect cup of coffee ☕. Wether brewed, espresso, or cold brew.',
    },
    {
      question: 'How do you handle debugging?',
      answer:
        'Step away, grab coffee, come back with fresh eyes and caffeinated mind',
    },
    {
      question: 'What drives you?',
      answer: 'Automating tasks that are repetitive and boring.',
    },
    {
      question: "Best coding advice you've received?",
      answer: "Code is like a humor. When you have to explain it, it's bad.",
    },
  ];

  const interests = [
    { icon: <Bot size={20} />, text: 'AI' },
    { icon: <BrainCog size={20} />, text: 'New Coding Ideas' },
    { icon: <Heart size={20} />, text: 'Clean Code & Architecture' },
    { icon: <Zap size={20} />, text: 'Performance Optimization' },
    { icon: <Target size={20} />, text: 'User Experience Design' },
  ];

  return (
    <section id='personal' className='section-padding bg-gray-900/50'>
      <div className='container-width'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Beyond the Code
          </h2>
          <p className='text-gray-400'>The person behind the developer</p>
        </div>

        {/* Hobbies & Interests with Image Carousel */}
        <div className='mb-20'>
          <h3 className='text-2xl font-bold text-center mb-12 text-blue-400'>
            When I'm Not Coding
          </h3>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Image Carousel */}
            <div className='order-2 lg:order-1'>
              <div className='sticky'>
                <ImageCarousel />
              </div>
            </div>

            {/* Hobbies Grid */}
            <div className='order-1 lg:order-2'>
              <div className='grid sm:grid-cols-2 gap-6'>
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className='card p-6 hover:scale-105 transition-all duration-300 hover:border-blue-500/50'
                  >
                    <div className='text-blue-400 mb-4'>{hobby.icon}</div>
                    <h4 className='text-lg font-semibold mb-2'>{hobby.name}</h4>
                    <p className='text-gray-400 text-sm'>{hobby.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Interests */}
        <div className='mb-20'>
          <h3 className='text-2xl font-bold text-center mb-12 text-blue-400'>
            What Excites Me
          </h3>
          <div className='flex flex-wrap justify-center gap-4'>
            {interests.map((interest, index) => (
              <div
                key={index}
                className='flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 hover:border-blue-500/50 transition-colors duration-200'
              >
                <span className='text-blue-400'>{interest.icon}</span>
                <span className='text-gray-300'>{interest.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Q&A */}
        <div>
          <h3 className='text-2xl font-bold text-center mb-12 text-blue-400'>
            Quick Fire Questions
          </h3>
          <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {quickQA.map((qa, index) => (
              <div
                key={index}
                className='card p-6 hover:scale-105 transition-all duration-300'
              >
                <h4 className='text-lg font-semibold mb-3 text-purple-400'>
                  {qa.question}
                </h4>
                <p className='text-gray-300'>{qa.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Fact */}
        <div className='mt-16 text-center'>
          <div className='card p-8 max-w-2xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30'>
            <h4 className='text-xl font-bold mb-4 text-blue-400'>Fun Fact</h4>
            <p className='text-gray-300 text-lg'>
              I can't start a day without a cup of coffee. I get signs of
              caffeine withdrawal which I think is no longer good (seriously)
              😅😭
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
