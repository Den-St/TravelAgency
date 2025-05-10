import { Input } from '@/components/ui/Input/input';
import {
  confirmPasswordInputPlaceholder,
  confirmPasswordLabel,
  confirmPasswordRule,
  emailExample,
  emailInputPlaceholder,
  emailLabel,
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
} from '../consts/text';
import { Ellipse } from '@/shared/ui-kit/Icons';

export const RegistrationForm = () => {
  return (
    <form className="w-[852px] flex flex-col gap-[40px] py-[54px] px-[84px] bg-white rounded-[32px] shadow-[0px_2px_10px_6px_#027EAC33]">
      <div className="flex flex-col">
        <h2 className="block-title">{subheader}</h2>
        <h2>{header}</h2>
      </div>
      <div className="flex flex-col gap-2">
      <div className="flex gap-[16px] justify-between">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="first-name">{firstNameLabel}</label>
          <Input
            type="text"
            id="first-name"
            placeholder={firstNameInputPlaceholder}
          />
          <span className="caption">{firstNameExample}</span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="last-name">{lastNameLabel}</label>
          <Input
            type="text"
            id="last-name"
            placeholder={lastNameInputPlaceholder}
          />
          <span className="caption">{lastNameExample}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">{emailLabel}</label>
        <Input type="text" id="email" placeholder={emailInputPlaceholder} />
        <span className="caption">{emailExample}</span>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password">{passwordLabel}</label>
        <Input
          type="password"
          hasVisibilityToggle
          id="password"
          placeholder={passwordInputPlaceholder}
        />
        <ul>
          {passwordRules.map((rule) => (
            <li className="flex gap-[8px]">
              <Ellipse className="text-grey-700"/>
              <span className="caption">{rule}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="confirm-password">{confirmPasswordLabel}</label>
        <Input
          type="password"
          hasVisibilityToggle
          id="confirm-password"
          placeholder={confirmPasswordInputPlaceholder}
        />
        <div className="flex gap-[8px]">
          <Ellipse className="text-grey-700"/>
          <span className="caption">{confirmPasswordRule}</span>
        </div>
      </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className="w-full h-[56px] bg-blue-500 text-white rounded-[8px] hover:bg-blue-600 transition duration-200"
        >
          Create Account
        </button>
        <span className="caption text-center">
          Already have an account? <a href="/login" className="text-blue-500">Log in</a>
        </span>
      </div>
    </form>
  );
};
