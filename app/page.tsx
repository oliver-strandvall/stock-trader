import Image from "next/image";
import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })

  if(!session) {
    redirect("/login") // redirect to login if there is no session
  }
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-800 font-sans text-white">
      <p>Test</p>
    </div>
  );
}
