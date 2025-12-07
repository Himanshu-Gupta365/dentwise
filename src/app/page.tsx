import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
      <div >
        <h1>Home Page</h1>
        <SignUpButton mode="modal">Sign up</SignUpButton>
      </div>
  );
}
