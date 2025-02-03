"use client";
import { useParams } from 'next/navigation';


export default function UserPage() {
    const { id } = useParams(); // Get the dynamic user ID from the URL

    return (
        <div>
            <h1>User {id}</h1>
            <p>This is a user page with ID : {id}</p>
        </div>
    )
}