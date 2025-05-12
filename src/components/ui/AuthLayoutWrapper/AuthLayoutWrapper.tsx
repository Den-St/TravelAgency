type AuthLayoutWrapperProps = {
  children: React.ReactNode;
};

export const AuthLayoutWrapper: React.FC<AuthLayoutWrapperProps> = ({
  children,
}) => {
  return (
    <div className="flex justify-between py-10 px-6 gap-8 h-[100vh]">
      {children}
    </div>
  );
};
