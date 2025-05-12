import { AuthLayoutWrapper } from '@/components/ui/AuthLayoutWrapper/AuthLayoutWrapper';
import { AuthPageBanner } from '@/shared/ui-kit/AuthPageBanner/AuthPageBanner';
import { ResetPasswordForm } from '@/components/ResetPassword/ui/ResetPassword';

export const ResetPassword = () => {
  return (
    <AuthLayoutWrapper data-testid="ResetPassword-testid">
      <ResetPasswordForm />
      <AuthPageBanner />
    </AuthLayoutWrapper>
  );
};
