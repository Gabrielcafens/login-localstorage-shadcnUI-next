import React from 'react';
import LoginForm from '@/components/ui/LoginForm';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-neutral-900 text-neutral-100">
      <LoginForm />
    </main>
  );
}
