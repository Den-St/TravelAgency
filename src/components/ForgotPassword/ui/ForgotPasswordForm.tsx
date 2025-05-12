import { Input } from '@/components/ui/Input/Input';
import { cn } from '@/lib/utils';
import {
  dontHaveAccountText,
  emailError,
  emailExample,
  emailInputPlaceholder,
  emailLabel,
  header,
  submitButtonText,
} from '../consts/text';
import { useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from '@/app/routes';
import { ForgotPasswordLinkSent } from './ForgotPasswordLinkSent';

export const ForgotPasswordForm = () => {
  const [isError] = useState(false); //just for testing error state layout
  const [success] = useState(false); //just for testing success state layout

  if (success) return <ForgotPasswordLinkSent />;

  return (
    <form
      data-testid="ForgotPasswordForm-testid"
      className={cn(
        'max-w-[664px] w-[50%] h-[100%] flex flex-col ite gap-10 py-[54px] justify-center px-21 bg-white rounded-[32px] shadow-[0px_2px_10px_6px_#027EAC33]'
      )}
    >
      <div className="flex flex-col">
        <h2>{header}</h2>
      </div>

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
