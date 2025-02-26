"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession(); // Get session data

  return (
    <div>
      {session ? (
        <div>
          <h1>Welcome, {session.user?.name}!</h1>
          <Image
            src={session.user?.image || "/default-avatar.png"} // Fallback image
            alt="User Profile"
            width={100}
            height={100}
          />
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default Page;
