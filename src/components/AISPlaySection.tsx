import styles from "../../styles/Home.module.css";

export default function AISPlaySection() {
    return (
        <section className={styles.container}>
            <div className={styles.section}>
                <style jsx>{`
              h1::before {
                content: ". ";
                background-color: #b2d235;
                color: #b2d235;
                border-radius: 40px;
                margin-right: 10px;
              }
            `}</style>
                <h1>Play Box</h1>
            </div>
        </section>
    )
}