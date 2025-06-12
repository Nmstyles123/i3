'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../../firebase';

export default function InvestorSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    investmentFocus: '',
    investmentRange: '',
    experience: '',
    company: '',
    position: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const db = getFirestore(app);
      const docRef = await addDoc(collection(db, 'investors'), {
        ...formData,
        createdAt: new Date().toISOString(),
      });
      console.log('Document written with ID: ', docRef.id);
      router.push('/dashboard'); // Redirect to dashboard after successful signup
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Investor Signup</h1>
          <p className="mt-2 text-muted-foreground">Join our platform to discover promising startups</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground">
                Company/Organization
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-foreground">
                Position
              </label>
              <input
                type="text"
                name="position"
                id="position"
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.position}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="investmentFocus" className="block text-sm font-medium text-foreground">
                Investment Focus
              </label>
              <select
                name="investmentFocus"
                id="investmentFocus"
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.investmentFocus}
                onChange={handleChange}
              >
                <option value="">Select Focus</option>
                <option value="tech">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="fintech">FinTech</option>
                <option value="consumer">Consumer</option>
                <option value="enterprise">Enterprise</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="investmentRange" className="block text-sm font-medium text-foreground">
                Investment Range
              </label>
              <select
                name="investmentRange"
                id="investmentRange"
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.investmentRange}
                onChange={handleChange}
              >
                <option value="">Select Range</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="100k-500k">$100K - $500K</option>
                <option value="500k-1m">$500K - $1M</option>
                <option value="1m-5m">$1M - $5M</option>
                <option value="5m+">$5M+</option>
              </select>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-foreground">
                Investment Experience
              </label>
              <select
                name="experience"
                id="experience"
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select Experience</option>
                <option value="beginner">Beginner (0-2 years)</option>
                <option value="intermediate">Intermediate (2-5 years)</option>
                <option value="experienced">Experienced (5-10 years)</option>
                <option value="expert">Expert (10+ years)</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
} 