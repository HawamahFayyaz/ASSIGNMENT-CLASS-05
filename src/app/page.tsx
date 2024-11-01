import Link from "next/link";

export default function Home () {
  return (
    <div>
      <header>
        <nav className="flex items-center gap-10 h-16 w-full pl-5 pr-5 bg-blue-800">
          <div className="h-7 w-{360px}">
            <h1 className="font-bold text-{30px} text-blue-200">
            Tuition Free Education Program on Latest Technologies
            </h1>
          </div>

          <div className="w-46 ml-auto">
            <ul className="flex gap-8 items-center text-blue-100 text-{16px}">
            <li>
                <Link href="# ">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Apply</Link>
              </li>
              <li>
                <Link href="/">Jobs</Link>
              </li>
              <li>
                <Link href="/">Courses</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="flex justify-center gap-5 h-auto w-full p-5 mt-10">
        <div className="h-60 w-[420px] bg-purple-500 rounded-md shadow-2xl">
          <h2 className="flex justify-center text-black font-bold">CARD 01</h2>
        </div>
        <div className="h-60 w-[420px] bg-pink-400 rounded-md shadow-2xl">
        <h2 className="flex justify-center text-black font-bold">CARD 02</h2>
        </div>
        <div className="h-60 w-[420px] bg-lime-300 rounded-md shadow-2xl">
        <h2 className="flex justify-center text-black font-bold">CARD 03</h2>
        </div>
        </section>

        <section className="flex gap-2 justify-center h-auto w-full p-5 mt-5">
        <div className="h-80 w-[420px] bg-sky-500 rounded-md shadow-2xl">
        <h2 className="flex justify-center text-black font-bold">CARD 04</h2>
        </div>
        <div className="h-80 w-[420px] bg-indigo-400 rounded-md shadow-2xl">
        <h2 className="flex justify-center text-black font-bold">CARD 05</h2>
        </div>
        </section>
      </main>
    </div>
  )
}