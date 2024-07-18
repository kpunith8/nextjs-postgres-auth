import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {  
  return (
    <main className="flex flex-col gap-y-5 items-center pt-24 text-center">
      <h1 className="text-3xl font-semibold">Taskify</h1>

      {/* There should be folder named posts in the app folder */}
      <Link href="/tasks" className="underline">View Tasks</Link>
    </main>
  );
}
