"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { z } from 'zod';

// Define o schema de validação com zod
const loginSchema = z.object({
  email: z.string().email('Endereço de email inválido.'),
  password: z.string().min(1, 'Senha é obrigatória.'),
});
type LoginFormValues = z.infer<typeof loginSchema>;
export function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      router.push('/profile');
    } else {
      localStorage.removeItem('user');
      setLoading(false);
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const validatedData: LoginFormValues = loginSchema.parse({ email, password });
      const storedUser = localStorage.getItem('user');
      const storedEmail = process.env.TEST_USER_EMAIL || '';
      const storedPassword = process.env.TEST_USER_PASSWORD || '';

      if (storedUser) {
        const userData = JSON.parse(storedUser) as LoginFormValues;
        if (email !== userData.email || password !== userData.password) {
          setError('Email ou senha inválidos.');
          return;
        }
      } else if (email !== storedEmail || password !== storedPassword) {
        setError('Email ou senha inválidos.');
        return;
      }

      const token = `token_${Math.random().toString(36).substr(2, 9)}`;
      const userData = { email: validatedData.email, password: validatedData.password, token };
      localStorage.setItem('user', JSON.stringify(userData));

      router.push('/profile');
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors.map(err => err.message).join(' '));
      } else {
        setError('Ocorreu um erro desconhecido.');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Card className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-lg">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
