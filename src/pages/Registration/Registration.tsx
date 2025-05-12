import { AuthLayoutWrapper } from '@/components/ui/AuthLayoutWrapper/AuthLayoutWrapper';
import { AuthPageBanner } from '@/shared/ui-kit/AuthPageBanner/AuthPageBanner';
import { RegistrationForm } from '@/components/Registration/ui/RegistrationForm';

export const Registration = () => {
  return (
    <AuthLayoutWrapper dataTestId="Registration-testid">
      <RegistrationForm />
      <AuthPageBanner />
    </AuthLayoutWrapper>
  );
};
