import { AuthPageBanner } from '@/shared/ui-kit/AuthPageBanner/AuthPageBanner';
import { RegistrationForm } from '@/widgets/Registration/ui/RegistrationForm';

export const Registration = () => {
  return (
    <div
      data-testid="Registration-testid"
      className="flex justify-between py-10 px-6 gap-8"
    >
      <RegistrationForm />
      <AuthPageBanner />
    </div>
  );
};
