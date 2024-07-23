"use client";

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) setPassword(storedPassword);
  }, []);

  const handleSave = () => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setEditMode(false);
  };

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    router.push('/'); 
  };

  return (
    <div className="p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Perfil</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {editMode ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
              </div>
              <Button onClick={handleSave} className="w-full">Save</Button>
              <Button onClick={() => setEditMode(false)} className="w-full">Cancel</Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <strong>Email:</strong> {email}
              </div>
              <div>
                <strong>Password:</strong> {password ? password : 'Não disponível'}
              </div>
              <Button onClick={() => setEditMode(true)} className="w-full">Edit</Button>
            </div>
          )}
          <Button onClick={handleLogout} className="w-full bg-red-500 text-white">Logout</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
