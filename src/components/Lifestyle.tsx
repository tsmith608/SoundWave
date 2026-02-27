import Image from 'next/image';
import styles from './Lifestyle.module.css';

export default function Lifestyle() {
    return (
        <section className={styles.lifestyle}>
            <div className={styles.container}>
                <div className={styles.imageBox}>
                    <Image
                        src="/images/bedroom.png"
                        alt="Beautiful bedding"
                        width={600}
                        height={800}
                        className={styles.mainImg}
                    />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>Make the bed, better.</h2>
                    <p className={styles.text}>
                        To further nurture your sheets and our planet, consider using a plant-based detergent without bleach or softeners, and reaching for wool dryer balls in lieu of softeners or dryer sheets.
                    </p>
                    <a href="/blog" className={styles.link}>read our blog</a>
                </div>
            </div>
        </section>
    );
}
