"use client";

import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { Spinner } from '@/components/ui/spinner';
import { Toast, showToast } from '@/components/ui/toast';

type FormData = {
  email: string;
  password: string;
  token: string;
};

export function ProfilePage() {
  const { control, handleSubmit, reset } = useForm<FormData>();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      const timeoutId = setTimeout(() => {
        router.push('/');
      }, 600);

      return () => clearTimeout(timeoutId);
    } else {
      const userData = JSON.parse(storedUser);
      reset(userData);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const onSubmit = (data: FormData) => {
    localStorage.setItem('user', JSON.stringify(data));
    showToast('Perfil atualizado com sucesso!', 'success');
    setIsEditing(false);
  };

  const handleEdit = () => {
    if (isEditing) {
      handleSubmit(onSubmit)();
    } else {
      setIsEditing(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>{isEditing ? 'Editar Perfil' : 'Perfil'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                    disabled={!isEditing}
                  />
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    {...field}
                    disabled={!isEditing}
                  />
                )}
              />
            </div>
            <Button
              type="button"
              onClick={handleEdit}
              className="w-full"
            >
              {isEditing ? 'Salvar' : 'Editar'}
            </Button>
            <Button
              type="button"
              onClick={handleLogout}
              className="w-full bg-red-500 mt-4"
            >
              Sair
            </Button>
          </form>
        </CardContent>
      </Card>
      <Toast />
    </div>
  );
}

export default ProfilePage;
