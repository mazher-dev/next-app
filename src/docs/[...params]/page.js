import { useParams } from "next/navigation";

export default function DocsPage() {
    const {params} = useParams();

    return(
        <div>
            <h1>DocsPage</h1>
            <p>Current Path: {params ? params.join('/') : 'home'}</p>
        </div>
    )
}