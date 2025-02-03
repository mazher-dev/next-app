import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return(
  <>
    <h1 className="font-bold text-2xl">Welcome to next Js</h1>
      <p>Welcome to the homepage!</p>
      <Link href="/about">Go to About Page</Link> {/* Link to About page */}
      <Button text="Click Me" />
  </>
  
  );
}