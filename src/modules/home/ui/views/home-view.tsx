"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const HomeView = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  if (!session) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="flex flex-col gap-y-4 p-4">
        <p>Logged in as {session.user.name}</p>
        <Button
          onClick={() =>
            authClient.signOut({
              fetchOptions: { onSuccess: () => router.push("/sign-in") }
            })
          }
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};
