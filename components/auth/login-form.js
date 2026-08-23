
import { Eye } from "lucide-react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

export default function LoginForm() {
  return (
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2 text-[#241C14]">Welcome back</h1>
        <p className="text-sm text-[#8A7B6C]">Sign in to your Stockly account</p>
      </div>

      <form className="space-y-4">
        <Input label="Email address" type="email" placeholder="you@example.com" />

        <div className="relative">
          <Input label="Password" type="password" placeholder="••••••••" />
          <button
            type="button"
            className="absolute right-3 top-8.5 text-[#8A7B6C]"
            aria-label="Show password"
          >
            <Eye size={16} />
          </button>
        </div>

        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
}