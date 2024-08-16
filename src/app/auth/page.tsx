import { Input } from "@/components/input";
import Image from "next/image";
import { AuthForm } from "./auth-form";

export default function AuthPage() {
  return (
    <div className="relative h-full bg-[url('/hero.jpg')]  bg-no-repeat bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py5">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </nav>
        <div className="flex justify-center">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}