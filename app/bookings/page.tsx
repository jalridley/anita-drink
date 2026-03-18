'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import Vinyl from '@/components/Vinyl';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_NAME_LENGTH = 3;
const MIN_MESSAGE_LENGTH = 20;

const BookingPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'email') setEmailError('');
    if (e.target.name === 'name') setNameError('');
    if (e.target.name === 'message') setMessageError('');
  };

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    let hasError = false;
    if (form.name.trim().length < MIN_NAME_LENGTH) {
      setNameError(`Please enter at least ${MIN_NAME_LENGTH} characters.`);
      hasError = true;
    } else setNameError('');
    if (!EMAIL_REGEX.test(form.email)) {
      setEmailError('Please enter a valid email address.');
      hasError = true;
    } else setEmailError('');
    if (form.message.trim().length < MIN_MESSAGE_LENGTH) {
      setMessageError(`Please write me a longer message with your request.`);
      hasError = true;
    } else setMessageError('');
    if (hasError) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('Configuration error.');
      return;
    }

    setStatus('Sending...');

    try {
      await emailjs.send(serviceId, templateId, form, publicKey);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
      setNameError('');
      setEmailError('');
      setMessageError('');
    } catch (error) {
      setStatus('Failed to send message.');
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-56px-48px)] flex-col items-center space-y-4 p-4 lg:justify-center">
      <Vinyl />
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-bold text-white">Book Anita Drink</h2>
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              className={`border-gray-600 bg-gray-900 text-white ${nameError ? 'border-red-500' : ''}`}
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              aria-invalid={!!nameError}
              aria-describedby={nameError ? 'name-error' : undefined}
            />
            {nameError && (
              <p id="name-error" className="mt-1 text-sm text-red-400">
                {nameError}
              </p>
            )}
          </div>
          <div>
            <Input
              type="email"
              name="email"
              className={`border-gray-600 bg-gray-900 text-white ${emailError ? 'border-red-500' : ''}`}
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              aria-invalid={!!emailError}
              aria-describedby={emailError ? 'email-error' : undefined}
            />
            {emailError && (
              <p id="email-error" className="mt-1 text-sm text-red-400">
                {emailError}
              </p>
            )}
          </div>
          <div>
            <Textarea
              name="message"
              value={form.message}
              className={`border-gray-600 bg-gray-900 text-white ${messageError ? 'border-red-500' : ''}`}
              onChange={handleChange}
              placeholder="Your Booking Message"
              required
              rows={5}
              aria-invalid={!!messageError}
              aria-describedby={messageError ? 'message-error' : undefined}
            />
            {messageError && (
              <p id="message-error" className="mt-1 text-sm text-red-400">
                {messageError}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-cyan-400 font-bold text-gray-800 hover:bg-cyan-300 md:text-xl"
          >
            Send Booking Request
          </Button>
        </form>
        {status && <p className="mt-3 text-sm text-white">{status}</p>}
      </div>
    </div>
  );
};

export default BookingPage;
