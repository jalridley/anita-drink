'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import Vinyl from '@/components/Vinyl';

const BookingPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await emailjs.send(
        'service_2ze675t', // Replace with your EmailJS Service ID
        'template_16nyvjm', // Replace with your EmailJS Template ID
        form,
        'cOV1XYXh5B5Qr2qnc', // Replace with your EmailJS Public Key
      );
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Try again later.');
      console.error('Failed to send message.', error);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-56px-48px)] flex-col items-center justify-center space-y-4 p-4">
      <Vinyl />
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-bold text-white">Book Anita Drink</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            className="border-gray-600 bg-gray-900 text-white"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="email"
            className="border-gray-600 bg-gray-900 text-white"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <Textarea
            name="message"
            value={form.message}
            className="border-gray-600 bg-gray-900 text-white"
            onChange={handleChange}
            placeholder="Your Booking Message"
            required
            rows={10}
          />
          <Button
            type="submit"
            className="w-full bg-cyan-400 font-bold md:text-xl"
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
