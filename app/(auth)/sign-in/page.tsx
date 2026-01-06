"use client";

import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { signInWithEmail } from "@/lib/actions/auth.actions";
import { showError, showSuccess } from "@/lib/toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  const router = useRouter();

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data);

      if (result.success) {
        showSuccess(result.message);
        router.push("/");
      } else {
        showError(result.message || "Invalid credentials");
      }
    } catch (error: any) {
      showError(error.message);
    }
  };
  return (
    <>
      <h1 className="form-title">Sign In and Start Your Journey</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
        <InputField
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
          validation={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
        />
        <InputField
          name="password"
          label="Password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
          type="password"
          validation={{ required: "Password is required", minLength: 8 }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>

        <FooterLink
          text="Don't have an account?"
          linkText="Sign up"
          href="/sign-up"
        />
      </form>
    </>
  );
}
