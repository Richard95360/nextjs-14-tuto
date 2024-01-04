import Link from 'next/link'
import React from 'react'

export default function Profile() {
  return (
    <div>
        Profile page
    <Link href={"/"}  className="flex flex-auto">Home</Link>
    </div>
  )
}
