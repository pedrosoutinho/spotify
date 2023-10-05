'use client';
import { useSearchParams } from "next/navigation.js";
import AlbumPlayer from "../../components/albumPlayer.js";
import './page.module.css';

export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    return (
        <main>
            <AlbumPlayer albumId={id} />
        </main>
    );
}

