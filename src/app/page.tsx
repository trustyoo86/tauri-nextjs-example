import styles from "./page.module.css";
import Greet from "./greet";

export default function Home() {
  return (
    <main className={styles.main}>
      <Greet />
    </main>
  );
}
