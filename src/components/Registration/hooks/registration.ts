import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { fieldErrors } from '../consts/text';

export type RegistrationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const fieldRules = {
  firstName: /^[A-Za-z'-]{1,50}$/,
  lastName: /^[A-Za-z'-]{1,50}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,16}$/,
};

export const useRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegistrationFormData>();

  const handleRegistration = handleSubmit(
    async (data: RegistrationFormData) => {
      if (data.password !== data.confirmPassword) {
        setError('confirmPassword', {
          type: 'manual',
          message: fieldErrors.confirmPassword,
        });
        return;
      }

      setIsLoading(true);
      setSuccess(false);

      try {
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSuccess(true);
      } catch (err) {
        console.error(err);
        setServerError('Registration failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  );

  return {
    isLoading,
    serverError,
    success,
    handleRegistration,
    register,
    errors,
  };
};
