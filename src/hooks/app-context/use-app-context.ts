"use client";

import { useStore } from "zustand/react";
import { appStore } from "@/hooks/app-context/store";
import { me } from "@/api/auth/actions";
import React from "react";
import { useRouter } from "next/navigation";

export const useAppContext = () => {
  const { defineProfile, profile, roles } = useStore(appStore);
  const navigate = useRouter();

  React.useEffect(() => {
    (async () => {
      try {
        const res = await me();

        if (res.data) {
          const { roles, ...profile } = res.data;
          localStorage.setItem(
            "app-context",
            JSON.stringify({ profile: profile, roles: roles }),
          );
        }
        defineProfile({ profile: profile, roles: roles });
      } catch (error) {
        // navigate.push("/auth/login");
      }
    })();
  }, []);

  return {
    roles,
    profile,
  };
};
