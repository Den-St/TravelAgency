import { cn } from '@/lib/utils';
import { emailSentHeader, emailSentText } from '../consts/text';

export const ForgotPasswordLinkSent = () => {
  return (
    <form
      data-testid="forgotPasswordFormEmailSentTestId-testid"
      className={cn(
        'max-w-[664px] w-[50%] h-[100%] flex flex-col ite gap-10 py-[54px] justify-center px-21 bg-white rounded-[32px] shadow-[0px_2px_10px_6px_#027EAC33]'
      )}
    >
      <h2>{emailSentHeader}</h2>
      <p>{emailSentText}</p>
    </form>
  );
};
