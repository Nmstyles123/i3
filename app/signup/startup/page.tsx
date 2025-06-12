'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../../firebase';

export default function StartupSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    industry: '',
    description: '',
    website: '',
    stage: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const db = getFirestore(app);
      const docRef = await addDoc(collection(db, 'startups'), {
        ...formData,
        createdAt: new Date().toISOString(),
      });
      console.log('Document written with ID: ', docRef.id);
      // router.push('/dashboard'); // Redirect to dashboard after successful signup
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
          <h1 className="text-3xl font-bold text-foreground">Startup Signup</h1>
          <p className="mt-2 text-muted-foreground">Join our platform to connect with investors</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-foreground">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.companyName}
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
              <label htmlFor="industry" className="block text-sm font-medium text-foreground">
                Industry
              </label>
              <input
                type="text"
                name="industry"
                id="industry"
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.industry}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="stage" className="block text-sm font-medium text-foreground">
                Stage
              </label>
              <select
                name="stage"
                id="stage"
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.stage}
                onChange={handleChange}
              >
                <option value="">Select Stage</option>
                <option value="idea">Idea Stage</option>
                <option value="mvp">MVP</option>
                <option value="early">Early Stage</option>
                <option value="growth">Growth Stage</option>
              </select>
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-foreground">
                Website
              </label>
              <input
                type="url"
                name="website"
                id="website"
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-foreground">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                required
                className="mt-1 block w-full px-3 py-2 bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.description}
                onChange={handleChange}
              />
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