import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Lifestyle from '@/components/Lifestyle';
import ProductGrid from '@/components/ProductGrid';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />

      <Showcase />

      <section className={styles.dynamicPromo}>
        <div className={styles.promoTextWrapper}>
          <h2 className={styles.massiveLogo}>sonnette</h2>
        </div>
      </section>

      <Lifestyle />
      <ProductGrid />

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h2 className={styles.footerLogo}>sonnette</h2>
            <p>© 2026 Sonnette. All rights reserved.</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4>Shop</h4>
              <a href="#">Throws</a>
              <a href="#">Bedding</a>
              <a href="#">Pillows</a>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Sustainability</a>
            </div>
            <div className={styles.footerCol}>
              <h4>Support</h4>
              <a href="#">Care Guide</a>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
