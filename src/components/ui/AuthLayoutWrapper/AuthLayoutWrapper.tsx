type AuthLayoutWrapperProps = {
  children: React.ReactNode;
  dataTestId?: string;
};

export const AuthLayoutWrapper: React.FC<AuthLayoutWrapperProps> = ({
  children,
  dataTestId,
}) => {
  return (
    <div
      className="flex justify-evenly py-10 px-6 min-h-[100vh] gap-8"
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};
