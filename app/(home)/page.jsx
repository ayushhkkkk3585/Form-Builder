import { SignInButton, SignUp } from "@clerk/nextjs";
import Header from "./_components/Header";

export const Home = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl mb-5 font-bold">Home </h1>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus
        laboriosam blanditiis ex cumque quibusdam quasi perspiciatis earum animi
        a, optio quas repellendus rem, nihil omnis, obcaecati magni beatae
        excepturi! Libero odio earum repellendus sequi deserunt porro, labore
        consequatur et consectetur vero eius nihil deleniti corrupti maiores
        blanditiis obcaecati laborum voluptas repellat perferendis dicta
        reprehenderit nobis, id vitae. Quam, maxime.
      </p>
    </div>
  );
};
