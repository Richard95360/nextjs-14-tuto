import Link from 'next/link'


export default function First() {
  return (
    <div>
        First
        <Link className="flex flex-auto"  href={"/blog"}>Blog</Link>
    </div>
  )
}
