"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DashboardProvider } from "./AllContext/DashboardContext";
import DashboardPage from "./dashboard/page";

export default function Home() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    const password = sessionStorage.getItem("password");

    if (username === "Helloworld" && password === "Faris1307") {
      setIsAuthorized(true);
    } else {
      router.push("/login");
    }
    setChecking(false);
  }, [router]);

  if (checking) return null; // yahan loader bhi laga sakte hain
  if (!isAuthorized) return null; // redirect hone tak kuch render nahi hoga

  return (
    <DashboardProvider>
      <DashboardPage />
    </DashboardProvider>
  );
}