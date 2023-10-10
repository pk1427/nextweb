"use client";
import Link from "next/link";
import styles from "./page.module.css";
// import { useState } from "react";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const nevigation =(name)=>{
    router.push(name)
  }
  return (
    <main>
      <h1>Basic routing </h1>
      <Link href="/login">go to login page</Link>
      <br></br>
      <br></br>

      <Link href="/about">go to about page</Link>

      <br></br>
      <br></br>

      <button onClick={() => nevigation("/login")}>go to login page</button>
    </main>
  );
}

//   const[name,setName]=useState("Prasad")
//   const apple = () => {
//     setName("Abhay")
//   };

//   const InnerComp =()=>{
//     return(
//       <div>
//         <h1>Inner Comp</h1>
//       </div>
//     )

//   }
//   return (
//     <main className={styles.main}>

//       <InnerComp/>

//       1st part
//        <Uaer name="Prasad" />
//       <Uaer name="Abhay" />
//       <Uaer />
//       <h1>Home Page </h1>

//       <h1> Events Components Function {name}</h1>

//       <button onClick={()=>apple
//         ("color")
//       }>Click me</button>
//     </main>
//   );
// }

// const Uaer = (props) => {
//   return (
//     <div>
//       <h2>Usre name is {props.name}</h2>
//     </div>
//   );
// };
