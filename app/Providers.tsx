"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    convexToken?: string;
  }
}
import { SessionProvider, useSession } from "next-auth/react";
import { ReactNode, useMemo } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
function useAuth() {
  const { data: session, update } = useSession();

  return useMemo(
    () => ({
      isLoading: false,
      isAuthenticated: session !== null,
      fetchAccessToken: async ({
        forceRefreshToken,
      }: {
        forceRefreshToken: boolean;
      }) => {
        if (forceRefreshToken) {
          const session = await update();
          return session?.convexToken ?? null;
        }
      },
    }),
    [JSON.stringify(session?.user)]
  );
}

export function Providers({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) {
  return (
    <SessionProvider session={session}>
      <ConvexProvider client={convex}>{children}</ConvexProvider>
    </SessionProvider>
  );
}
