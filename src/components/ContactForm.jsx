import { useState } from 'react';
import FormInput from './FormInput.jsx';
import FormTextarea from './FormTextarea.jsx';
import FormStatusMessage from './FormStatusMessage.jsx';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // This is a placeholder - replace with your actual form submission logic
      // You could use Formspree, Netlify Forms, or your own backend
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Your name"
      />

      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="your@email.com"
      />

      <FormInput
        label="Subject"
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleChange}
        required
        placeholder="What's this about?"
      />

      <FormTextarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Tell me more..."
        rows={5}
      />

      {status === 'success' && (
        <FormStatusMessage
          type="success"
          message="✨ Message sent successfully! I'll get back to you soon."
        />
      )}

      {status === 'error' && (
        <FormStatusMessage
          type="error"
          message={errorMessage}
        />
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={status === 'loading' ? 'Sending message...' : 'Send message'}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
