import Link from 'next/link'

export default function Second() {
  return (
    <div>
      Second
      <Link className="flex flex-auto"  href={"/blog"}>Blog</Link>
    </div>
  )
}
