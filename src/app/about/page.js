"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="heading">About</h1>

      <button onClick={() => {router.push("/");}}>go to home page</button>

      <br></br>
      
      <br></br>

      <Link href="/about/aboutcollege">go to about college</Link>

      
      <br></br>
      <Link href="/about/aboutstudent">go to about student</Link>
    </div>
  );
};

export default About;
