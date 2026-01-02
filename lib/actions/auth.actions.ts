"use server";

import { headers } from "next/headers";
import { auth } from "../better-auth/auth";
import { signInUser, signUpUser } from "../services/auth.service";

export const signUpWithEmail = async (formData: SignUpFormData) => {
  try {
    const response = await signUpUser(formData);

    return {
      success: true,
      data: response,
      message: "Signed up successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Sign up failed",
    };
  }
};

export const signInWithEmail = async (formData: SignInFormData) => {
  try {
    const response = await signInUser(formData);

    return {
      success: true,
      data: response,
      message: "Signed in successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Sign in failed",
    };
  }
};

export const signOut = async () => {
  try {
    await auth.api.signOut({ headers: await headers() });
  } catch (error) {
    return {
      success: false,
      error: "Sign out failed",
    };
  }
};
