import Link from 'next/link';

export default function About(){
    return(
        <>
        <h1>About Page</h1>
        <p>This is the About page of the website.</p>
        <Link href="/">Go to Home</Link> {/* Link to the homepage */}
        </>
    )
}