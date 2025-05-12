import { AuthLayoutWrapper } from '@/components/ui/AuthLayoutWrapper/AuthLayoutWrapper';
import { AuthPageBanner } from '@/shared/ui-kit/AuthPageBanner/AuthPageBanner';
import { ForgotPasswordForm } from '@/components/ForgotPassword/ui/ForgotPasswordForm';
// import { forgotPasswordTestId } from './ForgotPassword.test';

export const ForgotPassword = () => {
  return (
    <AuthLayoutWrapper data-testid="ForgotPassword-testid">
      <ForgotPasswordForm />
      <AuthPageBanner />
    </AuthLayoutWrapper>
  );
};
