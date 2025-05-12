import { Input } from '@/components/ui/Input/Input';
import {
  confirmPasswordInputPlaceholder,
  confirmPasswordLabel,
  confirmPasswordRule,
  header,
  newPasswordInputPlaceholder,
  newPasswordLabel,
  newPasswordRules,
  submitButtonText,
} from '../consts/text';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Ellipse } from '@/shared/ui-kit/Icons';
import { Button } from '@/components/ui/Button/Button';

export const ResetPasswordForm = () => {
  const [isError] = useState(false); //just for testing error state layout

  return (
    <form
      data-testid="ResetPasswordForm-testid"
      className={cn(
        'max-w-[664px] w-[50%] flex flex-col gap-10 pt-[54px] justify-center px-21 bg-white rounded-[32px] shadow-[0px_2px_10px_6px_#027EAC33]',
        { 'py-[54px]': !isError, 'py-[38px]': isError }
      )}
    >
      <div className="flex flex-col">
        <h2>{header}</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password">{newPasswordLabel}</label>
          <Input
            type="password"
            hasVisibilityToggle
            id="password"
            placeholder={newPasswordInputPlaceholder}
            variant={isError ? 'error' : 'default'}
          />
          <ul>
            {newPasswordRules.map((rule) =>
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
              <Ellipse className="text-red-400  w-[10px] h-[10px]" />
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
      <Button type="submit">{submitButtonText}</Button>
    </form>
  );
};
