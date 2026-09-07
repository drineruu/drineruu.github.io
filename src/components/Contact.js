import React, { useState, useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { isAvailableForWork } from '../constants/driner-portfolio';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Driner',
    };

    emailjs
      .send(
        'service_d534avr', // Replace with your actual Service ID
        'template_fmwtfij', // Replace with your actual Template ID
        templateParams,
        'DABrSPQHoyZdEhygY' // Replace with your actual Public Key
      )
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      })
      .catch(err => {
        console.log('FAILED...', err);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'jnerfamilaran@gmail.com',
      link: 'mailto:jnerfamilaran@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+63 (96) 8733 2518',
      link: 'tel:63 (96) 8733 2518',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Baguio City, Philippines',
      link: 'https://maps.google.com/?q=Baguio City,Philippines',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/drineruu',
      color: 'hover:text-gray-400',
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jnerfamilaran',
      color: 'hover:text-primary-400',
    },
    {
      icon: <Instagram size={24} />,
      name: 'Instagram',
      url: 'https://www.instagram.com/dri.ner/',
      color: 'hover:text-sky-400',
    },
  ];

  return (
    <section id='contact' className='section-padding'>
      <div className='container-width'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Get In Touch</h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Information */}
          <div>
            <h3 className='text-2xl font-bold mb-8 text-primary-400'>
              Let's Connect
            </h3>

            <div className='space-y-6 mb-12'>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className='flex items-center p-4 card hover:scale-105 transition-all duration-300 group'
                >
                  <div className='text-primary-400 mr-4 group-hover:scale-110 transition-transform duration-300'>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className='font-semibold text-white mb-1'>
                      {info.title}
                    </h4>
                    <p className='text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
                      {info.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className='text-xl font-semibold mb-6 text-primary-400'>
                Follow Me
              </h4>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`p-3 bg-surface-700 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-surface-600`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            {isAvailableForWork && (
              <div className='mt-12 p-6 bg-green-900/20 border border-green-700 rounded-lg'>
                <div className='flex items-center mb-3'>
                  <div className='w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse'></div>
                  <h4 className='text-lg font-semibold text-green-400'>
                    Available for Work
                  </h4>
                </div>
                <p className='text-gray-300 text-sm'>
                  I'm currently available for freelance projects and full-time
                  opportunities. Let's discuss how we can work together!
                </p>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div>
            <h3 className='text-2xl font-bold mb-8 text-primary-400'>
              Send Message
            </h3>

            <form ref={form} onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid sm:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-surface-700 border border-surface-500 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-white transition-colors duration-200'
                    placeholder='Your Name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-surface-700 border border-surface-500 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-white transition-colors duration-200'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Subject *
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-surface-700 border border-surface-500 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-white transition-colors duration-200'
                  placeholder='Project Inquiry / Job Opportunity / General Question'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 bg-surface-700 border border-surface-500 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-white transition-colors duration-200 resize-vertical'
                  placeholder='Tell me about your project or how I can help you...'
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className='p-4 bg-green-900/20 border border-green-700 rounded-lg'>
                  <p className='text-green-400 font-medium'>
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className='p-4 bg-red-900/20 border border-red-700 rounded-lg'>
                  <p className='text-red-400 font-medium'>
                    ❌ Failed to send message. Please try again or contact me
                    directly at jnerfamilaran@gmail.com
                  </p>
                </div>
              )}

              <button
                type='submit'
                disabled={isSubmitting}
                className={`w-full font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-surface-600 text-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
