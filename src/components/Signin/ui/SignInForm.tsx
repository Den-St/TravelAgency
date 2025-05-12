import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  dontHaveAccountText,
  emailError,
  emailExample,
  emailInputPlaceholder,
  emailLabel,
  header,
  passwordErrorRequired,
  passwordInputPlaceholder,
  passwordLabel,
  subheader,
  submitButtonText,
} from '../consts/text';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from '@/app/routes';

export const SignInForm = () => {
  const [isError] = useState(true); //just for testing error state layout

  return (
    <form
      data-testid="SignInForm-testid"
      className={cn(
        'max-w-[664px] w-[50%] h-[100%] flex flex-col ite gap-10 py-[54px] justify-center px-21 bg-white rounded-[32px] shadow-[0px_2px_10px_6px_#027EAC33]'
      )}
    >
      <div className="flex flex-col">
        <h2 className="block-title">{subheader}</h2>
        <h2>{header}</h2>
      </div>
      {isError && (
        <p className="bg-red-300 text-red-400 p-4 rounded-[8px] mb-[-16px]">
          Your account is temporarily locked due to multiple failed login
          attempts. Please try again later.
        </p>
      )}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email">{emailLabel}</label>
          <Input
            type="text"
            variant={isError ? 'error' : 'default'}
            id="email"
            placeholder={emailInputPlaceholder}
          />
          {isError ? (
            <span className="form-error">{emailError}</span>
          ) : (
            <span className="caption">{emailExample}</span>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password">{passwordLabel}</label>
          <Input
            type="password"
            hasVisibilityToggle
            id="password"
            placeholder={passwordInputPlaceholder}
            variant={isError ? 'error' : 'default'}
          />
          {isError && (
            <span className="form-error">{passwordErrorRequired}</span>
          )}
          <Link to={routes.forgotPassword} className="link">
            Forgot password?
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Button type="submit">{submitButtonText}</Button>
        <span className="caption">
          {dontHaveAccountText}{' '}
          <Link to={routes.registration} className="link">
            Create an account
          </Link>
        </span>
      </div>
    </form>
  );
};
