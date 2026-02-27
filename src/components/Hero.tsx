import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroLayout}>
                <div className={styles.imageOverlay}>
                    <Image
                        src="/images/art_mockup.png"
                        alt="Premium soundwave art"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span>A Voice That</span>
                        <br />
                        <span>Lasts Forever.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Turn your most precious recordings into timeless soundwave art. Custom portraits for memorials, holidays, and milestones.
                    </p>
                    <div className={styles.tagList}>
                        <span className={styles.tag}>Memorials</span>
                        <span className={styles.tag}>Wedding Vows</span>
                        <span className={styles.tag}>Baby's First Words</span>
                        <span className={styles.tag}>Holiday Gifts</span>
                    </div>
                    <a href="#builder" className={styles.cta}>Start Creating</a>
                </div>
            </div>
        </section>
    );
}
