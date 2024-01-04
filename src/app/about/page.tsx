import Link from 'next/link'

export const metadata = {
  title: "About page"
}

export default function About() {
  return (
    <div>
    About page
    <Link href={"/"}  className="flex flex-auto">Home</Link>
    </div>
  )
}
