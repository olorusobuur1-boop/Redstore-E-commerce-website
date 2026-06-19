import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import "./Hero.css"

// Explicit type definition for the form's state structure
interface FormDataState {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage(): React.JSX.Element {
  // Type-safe form data hook
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    message: ''
  });

  // Structural UI visibility toggles
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Type-safe change handler for both input and textarea HTML nodes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Type-safe form submit event pipeline
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form data dispatched safely:', formData);
    setIsSent(true);
  };

  // Resets component view safely back to structural defaults
  const resetForm = (): void => {
    setFormData({ name: '', email: '', message: '' });
    setIsSent(false);
  };

  // Success view template layout configuration
  if (isSent) {
    return (
      <div style={styles.container}>
        <div style={styles.successCard}>
          <h2 style={styles.successTitle}>Sent!</h2>
          <p style={styles.text}>
            Thank you for reaching out, <strong>{formData.name}</strong>. We will get back to you shortly.
          </p>
          <button 
            style={{
              ...styles.button,
              backgroundColor: isHovered ? '#2980b9' : '#3498db'
            }} 
            onMouseEnter={(): void => setIsHovered(true)}
            onMouseLeave={(): void => setIsHovered(false)}
            onClick={resetForm}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  // Interactive input form view layout configuration
  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h2 style={styles.title}>Contact Us</h2>
        <form onSubmit={handleSubmit} style={styles.formElement}>
          
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="message" style={styles.label}>What do you need?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you want..."
              required
              rows={5}
              style={styles.textarea}
            />
          </div>

          <button 
            type="submit" 
            style={{
              ...styles.button,
              backgroundColor: isHovered ? '#563434' : 'orangered'
            }}
            onMouseEnter={(): void => setIsHovered(true)}
            onMouseLeave={(): void => setIsHovered(false)}
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

// Strictly typed design properties object configuration
const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  background: 'radial-gradient(#fff, #ffd6d6)',
    padding: '20px',
    boxSizing: 'border-box'
  },
  formCard: {
    background: '#ffffff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
    boxSizing: 'border-box'
  },
  formElement: {
    width: '100%',
    display: 'block'
  },
  successCard: {
    background: '#ffffff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box'
  },
  title: {
    margin: '0 0 24px 0',
    color: '#333333',
    textAlign: 'center',
    fontSize: '24px'
  },
  successTitle: {
    color: '#2ecc71',
    fontSize: '32px',
    margin: '0 0 16px 0'
  },
  text: {
    color: '#555555',
    lineHeight: '1.6',
    margin: '0 0 24px 0',
    fontSize: '16px'
  },
  inputGroup: {
    marginBottom: '20px',
    width: '100%'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#555555',
    fontSize: '14px'
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #cccccc',
    fontSize: '16px',
    boxSizing: 'border-box',
    outline: 'none'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #cccccc',
    fontSize: '16px',
    resize: 'vertical',
    boxSizing: 'border-box',
    outline: 'none'
  },
  button: {
    width: '100%',
    padding: '14px',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    boxSizing: 'border-box'
  }
};