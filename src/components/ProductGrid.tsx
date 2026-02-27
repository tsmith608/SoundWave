import Image from 'next/image';
import styles from './ProductGrid.module.css';

export default function ProductGrid() {
    const products = [
        { title: "The Beach", img: "/images/pillows.png", label: "Beach bag" },
        { title: "Waffle Bath", img: "/images/throws.png", label: "Waffle bathrobe" },
        { title: "your bedding", img: "/images/bedroom.png", label: "Custom sets" }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {products.map((p, i) => (
                    <div key={i} className={styles.item}>
                        <div className={styles.imgWrapper}>
                            <Image src={p.img} alt={p.title} fill className={styles.img} />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.title}>{p.title}</h3>
                            <p className={styles.label}>{p.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
