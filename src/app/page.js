import Link from "next/link";

export default function Home() {
  return(
  <>
    <h1 className="font-bold text-2xl">Welcome to next Js</h1>
    <nav>
        <Link href="/about">Go to About Page</Link>
      </nav>
  </>
  
  );
}