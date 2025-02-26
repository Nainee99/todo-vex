import { auth } from "@/auth";
import { Providers } from "../Providers";

export default async function LoggedInLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth(); // This works if this is a Server Component

  return <Providers session={session}>{children}</Providers>;
}
