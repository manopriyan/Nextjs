import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <h1>test</h1>
      async function redirect() {
        window.location.href= "/posts"
      }
      
    </div>
  )
}
