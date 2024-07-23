"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation'; // Certifique-se de que isso está correto

const schema = z.object({
  email: z.string().nonempty({ message: 'Email is required' }).email({ message: 'Invalid email address' }),
  password: z.string().nonempty({ message: 'Password is required' }),
});

type FormData = z.infer<typeof schema>;

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const router = useRouter(); // Certifique-se de que isso é chamado dentro do componente
  const [error, setError] = useState<string>('');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log('Submitting form with data:', data);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('API response status:', response.status);
      if (response.ok) {
        const result = await response.json();
        console.log('API response:', result);
        
        if (result.success) {
          router.push('/profile');
        } else {
          setError(result.message || 'An unexpected error occurred.');
        }
      } else {
        const errorData = await response.json();
        console.log('API error response:', errorData);
        setError(errorData.message || 'An unexpected error occurred.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <Card className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-lg">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              {...register('password')}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
