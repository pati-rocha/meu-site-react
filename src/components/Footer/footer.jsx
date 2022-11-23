import styles from "./footer.module.css"

export function Footer ({name}) {
    return (
        <footer className={styles.footer}>
            <p  className={styles.paragraph}> &copy;{name} ♡ - Todos os direitos são reservados. </p>
        </footer>
    )
}