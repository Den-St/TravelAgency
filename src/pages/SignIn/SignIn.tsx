import { AuthLayoutWrapper } from '@/components/ui/AuthLayoutWrapper/AuthLayoutWrapper';
import { AuthPageBanner } from '@/shared/ui-kit/AuthPageBanner/AuthPageBanner';
import { SignInForm } from '@/components/Signin/ui/SignInForm';

export const SignIn = () => {
  return (
    <AuthLayoutWrapper dataTestId="SignIn-testid">
      <SignInForm />
      <AuthPageBanner />
    </AuthLayoutWrapper>
  );
};
