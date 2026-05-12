import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ListStocks from "@/components/list-stocks";

export default async function Home() {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session) {
    redirect("/login")
  }

  function getData() {
    fetch("/api/stock")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  getData();
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-800 font-sans text-white">
      <div className="bg-gray-900 p-5 rounded-lg min-w-1/2">
        <h1 className="text-xl font-bold mb-1">Stocks:</h1>
        <hr className="mb-1"></hr>
          <ListStocks />
      </div>
    </div>
  );
}
