import Link from "next/link";


export default function Home() {
  return (
    <main>
        <h1 className="text-xl">Home Page</h1>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <Link href={"/about"} className="flex items-start flex-wrap m-1 text-xl  text-slate-50">About</Link>
        <Link href={"/photo-feed"} className="flex flex-wrap m-1 text-xl  text-slate-50">Photos</Link>
        <Link href={"/profile"} className="flex flex-wrap m-1 text-xl  text-slate-50">Profile</Link>
        <Link href={"/products"} className="flex flex-wrap m-1 text-xl  text-slate-50">Products</Link>
        <Link href={"/blog"} className="flex flex-auto text-xl  text-slate-50">Blog</Link>
        </nav>
    </main>
  )
}
