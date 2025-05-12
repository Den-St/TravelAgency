import {
  alreadyHaveAccountText,
  confirmPasswordInputPlaceholder,
  confirmPasswordLabel,
  confirmPasswordRule,
  emailExample,
  emailInputPlaceholder,
  emailLabel,
  fieldErrors,
  firstNameExample,
  firstNameInputPlaceholder,
  firstNameLabel,
  header,
  lastNameExample,
  lastNameInputPlaceholder,
  lastNameLabel,
  passwordInputPlaceholder,
  passwordLabel,
  passwordRules,
  subheader,
  submitButtonText,
} from '../consts/text';
import { Ellipse } from '@/shared/ui-kit/Icons';
import { Button } from '@/components/ui/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from '@/app/routes';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Input } from '@/components/ui/Input/Input';
import { fieldRules, useRegistration } from '../hooks/registration';

export const RegistrationForm = () => {
  const [isError] = useState(false); //just for testing error state layout
  const { register, handleRegistration, isLoading, errors } = useRegistration();

  return (
    <form
      onSubmit={handleRegistration}
      data-testid="RegistrationForm-testid"
      className={cn(
        'max-w-[664px] w-[50%] min-h-[100%] flex flex-col gap-10 pt-[54px] px-21 bg-white rounded-[32px] shadow-[0px_2px_10px_6px_#027EAC33]',
        { 'py-[54px]': !isError, 'py-[38px]': isError }
      )}
    >
      <div className="flex flex-col">
        <h2 className="block-title">{subheader}</h2>
        <h2>{header}</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 justify-between">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="first-name">{firstNameLabel}</label>
            <Input
              {...register('firstName', {
                required: fieldErrors.firstName,
                pattern: {
                  value: fieldRules.firstName,
                  message: fieldErrors.firstName,
                },
              })}
              type="text"
              id="first-name"
              placeholder={firstNameInputPlaceholder}
              variant={!!errors.firstName?.message ? 'error' : 'default'}
            />
            {!!errors.firstName?.message ? (
              <span className="form-error">{errors.firstName.message}</span>
            ) : (
              <span className="caption">{firstNameExample}</span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="last-name">{lastNameLabel}</label>
            <Input
              {...register('lastName', {
                required: fieldErrors.lastName,
                pattern: {
                  value: fieldRules.lastName,
                  message: fieldErrors.lastName,
                },
              })}
              type="text"
              id="last-name"
              placeholder={lastNameInputPlaceholder}
              variant={!!errors.lastName?.message ? 'error' : 'default'}
            />
            {!!errors.lastName?.message ? (
              <span className="form-error">{errors.lastName?.message}</span>
            ) : (
              <span className="caption">{lastNameExample}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email">{emailLabel}</label>
          <Input
            {...register('email', {
              required: fieldErrors.email,
              pattern: {
                value: fieldRules.email,
                message: fieldErrors.email,
              },
            })}
            type="text"
            id="email"
            placeholder={emailInputPlaceholder}
            variant={!!errors.email?.message ? 'error' : 'default'}
          />
          {!!errors.email?.message ? (
            <span className="form-error">{errors.email?.message}</span>
          ) : (
            <span className="caption">{emailExample}</span>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password">{passwordLabel}</label>
          <Input
            {...register('password', {
              required: true,
              pattern: {
                value: fieldRules.password,
                message: 'password error',
              },
            })}
            type="password"
            hasVisibilityToggle
            id="password"
            placeholder={passwordInputPlaceholder}
            variant={isError ? 'error' : 'default'}
          />
          <ul>
            {passwordRules.map((rule) =>
              !!errors.password ? (
                <li key={rule} className="flex gap-[8px] items-center">
                  <Ellipse className="text-red-400 w-[10px] h-[10px]" />
                  <span className="form-error">{rule}</span>
                </li>
              ) : (
                <li key={rule} className="flex gap-[8px] items-center">
                  <Ellipse className="text-grey-700 w-[10px] h-[10px]" />
                  <span className="caption">{rule}</span>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="confirm-password">{confirmPasswordLabel}</label>
          <Input
            {...register('confirmPassword', {
              required: { value: true, message: fieldErrors.confirmPassword },
            })}
            type="password"
            hasVisibilityToggle
            id="confirm-password"
            placeholder={confirmPasswordInputPlaceholder}
            variant={!!errors.confirmPassword?.message ? 'error' : 'default'}
          />
          {!!errors.confirmPassword?.message ? (
            <div className="flex gap-[8px] items-center">
              <Ellipse className="text-red-400 w-[10px] h-[10px]" />
              <span className="form-error">{confirmPasswordRule}</span>
            </div>
          ) : (
            <div className="flex gap-[8px] items-center">
              <Ellipse className="text-grey-700 w-[10px] h-[10px]" />
              <span className="caption">{confirmPasswordRule}</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Button disabled={isLoading} type="submit">
          {submitButtonText}
        </Button>
        <span className="caption">
          {alreadyHaveAccountText}{' '}
          <Link to={routes.signIn} className="text-blue-500 underline">
            Login
          </Link>{' '}
          instead
        </span>
      </div>
    </form>
  );
};
