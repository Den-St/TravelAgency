import { AuthPageBanner } from '@/shared/ui-kit/AuthPageBanner/AuthPageBanner';
import { SignInForm } from '@/widgets/Signin/ui/SignInForm';

export const SignIn = () => {
  return (
    <div
      data-testid="SignIn-testid"
      className="h-[100vh] flex justify-between py-10 px-6 gap-8"
    >
      <SignInForm />
      <AuthPageBanner />
    </div>
  );
};
