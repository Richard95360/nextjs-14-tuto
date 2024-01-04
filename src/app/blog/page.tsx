import Link from 'next/link'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: {
    absolute:"Blog"
  }
}

export default function Blog() {
  return (
    <div>
      Blog page
      <Link className="flex flex-auto"  href={"/blog/first"}>First</Link>
      <Link className="flex flex-auto"  href={"/blog/second"}>Second</Link>
    </div>
  )
}
