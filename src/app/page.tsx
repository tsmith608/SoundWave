import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortraitBuilder from '@/components/PortraitBuilder';
import Lifestyle from '@/components/Lifestyle';
import ProductGrid from '@/components/ProductGrid';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />

      <section id="builder" className={styles.builderSection}>
        <PortraitBuilder />
      </section>

      <section className={styles.dynamicPromo}>
        <div className={styles.promoTextWrapper}>
          <h2 className={styles.massiveLogo}>SoundWave</h2>
        </div>
      </section>

      <Lifestyle />
      <ProductGrid />

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h2 className={styles.footerLogo}>SoundWave</h2>
            <p>© 2026 SoundWave Art. All rights reserved.</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4>Gifts</h4>
              <a href="#">Memorials</a>
              <a href="#">Holidays</a>
              <a href="#">Anniversaries</a>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Artists</a>
              <a href="#">Sustainability</a>
            </div>
            <div className={styles.footerCol}>
              <h4>Support</h4>
              <a href="#">Audio Tips</a>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
