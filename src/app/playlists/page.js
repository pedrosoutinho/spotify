import AlbumGrid from "../components/albumGrid";
import styles from "./page.module.css";

export default function Playlist() {
    return (
        <main className={styles.playlists}>
            <h1>Albums</h1>
            <AlbumGrid />
        </main>
    );
}
