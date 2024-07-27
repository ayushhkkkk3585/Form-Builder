import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <>
      <div className="font-bold text-center">SignIn Page</div>
      <SignIn />
    </>
  );
};

export default SignInPage;
