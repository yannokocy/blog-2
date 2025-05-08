"use client";

import { useAppContext } from "@/hooks/app-context/use-app-context";

export function BlogHeader() {
  const { profile } = useAppContext();

  return <>{profile.fullName}</>;
}
