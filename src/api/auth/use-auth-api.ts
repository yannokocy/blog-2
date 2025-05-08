"use client";

import { login, register } from "@/api/auth/actions";
import { useRouter } from "next/navigation";

export const useAuthApi = () => {
  const router = useRouter();

  const onLogin = async (data: any) => {
    try {
      const res: any = await login(data);

      if (res.data.data) {
        localStorage.setItem("app-access-token", res.data.data.accessToken);

        router.push("/my-posts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRegister = async (data: any) => {
    try {
      const res: any = await register(data);

      if (res.data.data) {
        await onLogin({ email: data.email, password: data.password });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onLogin,
    onRegister,
  };
};
