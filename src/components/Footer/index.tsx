import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a Técnica</a>
      <a href="">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Andreysson@Dev
      </a>
    </footer>
  );
}
