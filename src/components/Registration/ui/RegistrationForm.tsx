import { Input } from '@/components/ui/Input/input';
import {
  alreadyHaveAccountText,
  confirmPasswordInputPlaceholder,
  confirmPasswordLabel,
  confirmPasswordRule,
  emailError,
  emailExample,
  emailInputPlaceholder,
  emailLabel,
  firstNameError,
  firstNameExample,
  firstNameInputPlaceholder,
  firstNameLabel,
  header,
  lastNameError,
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

export const RegistrationForm = () => {
  const [isError] = useState(false); //just for testing error state layout

  return (
    <form
      data-testid="RegistrationForm-testid"
      className={cn(
        'max-w-[664px] w-[50%] flex flex-col gap-10 pt-[54px] px-21 bg-white rounded-[32px] shadow-[0px_2px_10px_6px_#027EAC33]',
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
              type="text"
              id="first-name"
              placeholder={firstNameInputPlaceholder}
              variant={isError ? 'error' : 'default'}
            />
            {!isError ? (
              <span className="caption">{firstNameExample}</span>
            ) : (
              <span className="form-error">{firstNameError}</span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="last-name">{lastNameLabel}</label>
            <Input
              type="text"
              id="last-name"
              placeholder={lastNameInputPlaceholder}
              variant={isError ? 'error' : 'default'}
            />
            {isError ? (
              <span className="form-error">{lastNameError}</span>
            ) : (
              <span className="caption">{lastNameExample}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email">{emailLabel}</label>
          <Input
            type="text"
            id="email"
            placeholder={emailInputPlaceholder}
            variant={isError ? 'error' : 'default'}
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
          <ul>
            {passwordRules.map((rule) =>
              isError ? (
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
            type="password"
            hasVisibilityToggle
            id="confirm-password"
            placeholder={confirmPasswordInputPlaceholder}
            variant={isError ? 'error' : 'default'}
          />
          {isError ? (
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
        <Button type="submit">{submitButtonText}</Button>
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
