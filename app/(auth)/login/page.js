import LoginForm from "@/components/auth/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-[#FAF6F0]">
      <div className="hidden lg:flex flex-col justify-between w-105 shrink-0 p-10 bg-[#1C1410]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-linear-to-br from-[#c7c7c8] to-[#5e2e9d]">
            <Image
              src="/logo.png"
              alt="Stockly logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-bold uppercase text-[#f7f0fa]">Stockly Store</div>
            <div className="text-xs text-[#8A7B6C]">Powered by Stockly Inc.</div>
          </div>
        </div>

        <blockquote className="text-2xl font-light leading-snug text-[#FAF6F0]">
          Every sale, every item, every customer — managed with precision.
        </blockquote>

        <div className="text-xs text-[#8A7B6C]">
          © {new Date().getFullYear()} Stockly· All rights reserved
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <LoginForm />
      </div>
    </div>
  );
}
