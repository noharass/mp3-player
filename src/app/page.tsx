import Image from "next/image";
import styles from "./page.module.css";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <main className={styles.main}>
      <MusicPlayer/>
    </main>
  );
}
