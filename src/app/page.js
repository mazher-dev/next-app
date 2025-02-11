import Link from "next/link";
import Button from "./components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/me.png" alt="Profile" width={500} height={500} />
      <h1 className="font-bold text-2xl">Welcome to next Js</h1>
      <p>Welcome to the homepage!</p>
      <Link href="/about">Go to About Page</Link> {/* Link to About page */}
      <Button text="Click Me" />
    </>
    
  );
}
