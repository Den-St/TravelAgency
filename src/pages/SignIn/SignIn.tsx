import { AuthLayoutWrapper } from '@/components/ui/AuthLayoutWrapper/AuthLayoutWrapper';
import { AuthPageBanner } from '@/shared/ui-kit/AuthPageBanner/AuthPageBanner';
import { SignInForm } from '@/widgets/Signin/ui/SignInForm';

export const SignIn = () => {
  return (
    <AuthLayoutWrapper data-testid="SignIn-testid">
      <SignInForm />
      <AuthPageBanner />
    </AuthLayoutWrapper>
  );
};
