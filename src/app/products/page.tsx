import Link from 'next/link'
import React from 'react'

export default function ProductList() {
  const productId = 100
  return (
    <>
   <Link href={"/"} className="flex flex-wrap m-1 text-xl  text-slate-950">Home</Link>
    <h1>Product List</h1>
    <h2>
      <Link className='className="flex flex-wrap m-1 text-xl  text-slate-950"' href={"products/1"}>
        Product 1
    </Link>
    </h2>
    <h2>
      <Link className='className="flex flex-wrap m-1 text-xl  text-slate-950"' href={"products/2"}>
        Product 2
    </Link>
    </h2>
    <h2>
      <Link className='className="flex flex-wrap m-1 text-xl  text-slate-950"' href={"products/3"} replace>
        Product 3
    </Link>
    </h2>
    <h2>
      <Link className='className="flex flex-wrap m-1 text-xl  text-slate-950"' href={`products/${productId}`}>
        Product {productId}
    </Link>
    </h2>
    </>
  )
}
