import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <Link href="/">About us</Link>
            </div>

            <div className={styles.center}>
                <Link href="/" className={styles.logo}>sonnette</Link>
            </div>

            <div className={styles.right}>
                <Link href="/explore">Explore</Link>
                <Link href="/bedroom">Bedroom</Link>
                <Link href="/sleepwear">Sleepwear</Link>
                <Link href="/gifts">Gifts</Link>
                <button className={styles.iconBtn}>
                    <span className={styles.srOnly}>Search</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                </button>
                <Link href="/bag">Bag (0)</Link>
            </div>
        </nav>
    );
}
