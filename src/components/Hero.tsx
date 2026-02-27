import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroLayout}>
                <div className={styles.imageOverlay}>
                    <Image
                        src="/images/bedroom.png"
                        alt="Moody luxury bedroom"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span>All the way</span>
                        <br />
                        <span>to the bedroom.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Our bedding is made in France, so we are recognized worldwide for this expertise.
                    </p>
                    <div className={styles.tagList}>
                        <span className={styles.tag}>cotton percale</span>
                        <span className={styles.tag}>cotton gauze</span>
                        <span className={styles.tag}>washed percale</span>
                        <span className={styles.tag}>cotton satin</span>
                        <span className={styles.tag}>french washed linen</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
