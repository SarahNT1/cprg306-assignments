import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex flex-col text-center">
      <h1 className="text-gray-100 text-3xl font-bold mt-12 p-10">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <div className="mt-5">
        <Link href="/week-2" className="text-gray-100 text-xl hover:underline hover:text-green-500">
          Week 2 Assignment
        </Link>
      </div>
      <div>
        <Link href="/week-3" className="text-gray-100 text-xl hover:underline hover:text-green-500">
          Week 3 Assignment
        </Link>
      </div>
      <div>
        <Link href="/week-4" className="text-gray-100 text-xl hover:underline hover:text-green-500">
          Week 4 Assignment
        </Link>
      </div>
      <div>
        <Link href="/week-5" className="text-gray-100 text-xl hover:underline hover:text-green-500">
          Week 5 Assignment
        </Link>
      </div>
      <div>
        <Link href="/week-6" className="text-gray-100 text-xl hover:underline hover:text-green-500">
          Week 6 Assignment
        </Link>
      </div>
    </main>
  )
}
