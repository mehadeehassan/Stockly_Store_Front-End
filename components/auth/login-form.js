"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Eye } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2 text-[#241C14]">
          Welcome back
        </h1>
        <p className="text-sm text-[#8A7B6C]">
          Sign in to your Stockly account
        </p>
      </div>

      <form className="space-y-4">
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative">
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between text-xs mt-2 text-[#8A7B6C]">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 accent-[#5f07d9] cursor-pointer rounded"
              />
              <label className="text-md text-[#8A7B6C]">
                Keep me logged in
              </label>
            </div>
            <div className="text-md text-[#5f07d9] hover:text-[#643c9c] cursor-pointer">
              Forgot password?
            </div>
          </div>

          <div className="text-xs mt-5 mb-0.5 text-[#8A7B6C]">
            By proceeding, you confirm that you’ve read and agreed to our{" "}
            <span className="font-semibold text-[#5f07d9] hover:text-[#643c9c] cursor-pointer">
              Terms of Service
            </span>{" "}
            And{" "}
            <span className="font-semibold text-[#5f07d9] hover:text-[#643c9c] cursor-pointer">
              Privacy Policy
            </span>
          </div>

          <button
            type="button"
            className="absolute right-3 top-8.5 text-[#8A7B6C]"
            aria-label="Show password"
          >
            <Eye size={16} />
          </button>
        </div>
        <Button
          type="submit"
          disabled={!isFormValid}
          className={
            isFormValid
              ? "bg-[#5f07d9] text-white hover:bg-[#4d06b3] cursor-pointer"
              : "bg-[#F3F4F6] text-[#9CA3AF] cursor-not-allowed"
          }
        >
          Sign in
        </Button>

        <Button type="button" variant="outline">
          Create an Account
        </Button>
      </form>
    </div>
  );
}
