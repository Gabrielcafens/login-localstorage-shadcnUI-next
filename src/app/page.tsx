import React from 'react';
import LoginTabs from '@/components/ui/LoginTabs';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-neutral-900 text-neutral-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-neutral-800 rounded-lg shadow-lg">
        <LoginTabs />
      </div>
    </main>
  );
}
