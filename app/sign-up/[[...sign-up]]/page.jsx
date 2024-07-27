import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <>
      <div className="font-bold text-center">SignUp Page</div>
      <SignUp />
    </>
  );
};

export default SignUpPage;
