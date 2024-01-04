"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("placing your order")
        router.push("/")
    }
  return (
    <>
    <h1>OrderProduct</h1>
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Place order</button>
    </>
  )
}
