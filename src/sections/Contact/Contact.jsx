import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import utilities from '../../common/utilities.module.css';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setShowPopup(false);

    try {
      // EmailJS configuration - using most common template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'snchauhan519@gmail.com'
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_7jnq03y', // Your EmailJS service ID
        'template_yvt4rlo', // Your EmailJS template ID
        templateParams,
        '_8ZDNkNEh1gunp3lJ' // Your EmailJS public key
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setShowPopup(true);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS failed, trying fallback method...');
      
      // Fallback: Create mailto link
      try {
        const mailtoLink = `mailto:snchauhan519@gmail.com?subject=${encodeURIComponent(`Portfolio Contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        
        window.open(mailtoLink);
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setShowPopup(true);
      } catch (fallbackError) {
        setSubmitStatus('error');
        setShowPopup(true);
        console.error('Both EmailJS and fallback failed:', error, fallbackError);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide popup after 3 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        setSubmitStatus('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.contactGrid}>
        {/* LEFT COLUMN */}
        <div className={styles.contactLeft}>
          <h1 className={`${utilities.gradientText}`} style={{ fontSize: '2.3rem', marginBottom: '0.5rem', fontWeight: 700 }}>Get In Touch</h1>
          <p style={{ color: 'var(--text-color)', opacity: 0.7, marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 500 }}>
            I’m just a message away — contact me through any channel.
          </p>
          <a
            href="mailto:snchauhan519@gmail.com"
            className={`${utilities.glassCard} ${styles.contactCard}`}
            style={{ textDecoration: 'none' }}
            aria-label="Send email to snchauhan519@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.iconBox}><Mail size={24} /></span>
            <span className={styles.contactCardText}>snchauhan519@gmail.com</span>
          </a>
          <a
            href="https://www.google.com/maps/place/Haridwar,+Uttarakhand/"
            className={`${utilities.glassCard} ${styles.contactCard}`}
            style={{ textDecoration: 'none' }}
            aria-label="View Haridwar, Uttarakhand on Google Maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.iconBox}><MapPin size={24} /></span>
            <span className={styles.contactCardText}>Haridwar, Uttarakhand</span>
          </a>
          <div className={`${utilities.glassCard} ${styles.contactCard}`}>
            <span className={styles.iconBox}><Phone size={24} /></span>
            <span className={styles.contactCardText}>+91 9760200919</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <div className={styles.contactRight}>
          <form className={utilities.glassCard} onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 500 }}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell me about your project or how I can help you..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`${styles.submitBtn} gradientBtn`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {showPopup && submitStatus === 'success' && (
              <div className={styles.successMessage}>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {showPopup && submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                Failed to send message. Please try again or contact me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;