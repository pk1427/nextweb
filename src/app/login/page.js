"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

   const navigate = (page) => {
    router.push("/login/" + page);
  };
  return (
    <div>
      <h1 className="heading">login</h1>
      <Link href="/">go to home page </Link>

      <br></br>

      <br></br>

      <button
        onClick={() => {
          navigate("loginstudent");
        }}
      >
        login for student
      </button>

      <br></br>

      <button
        onClick={() => {
          navigate("loginteacher");
        }}
      >
        login for teacher
      </button>
    </div>
  );
};

export default Login;
