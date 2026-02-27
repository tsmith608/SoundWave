import Image from 'next/image';
import styles from './Showcase.module.css';

export default function Showcase() {
    return (
        <section className={styles.showcase}>
            <div className={styles.grid}>
                <div className={styles.productInfo}>
                    <span className={styles.label}>Blanket</span>
                    <h2 className={styles.productTitle}>Topanga Organic Matelassé Throw</h2>
                    <p className={styles.productDesc}>
                        The soft, rippled weave creates an airy, pliable shape that will expand and contract over time.
                    </p>
                    <div className={styles.actionRow}>
                        <div className={styles.quantity}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <button className={styles.addToBag}>Add to bag — 189€</button>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image
                        src="/images/throws.png"
                        alt="Topanga Organic Matelassé Throw"
                        width={800}
                        height={800}
                        className={styles.productImg}
                    />
                </div>
            </div>
        </section>
    );
}
