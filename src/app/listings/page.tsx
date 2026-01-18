import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Properties from "@/components/Properties";
import styles from "./listings.module.css";

export default function ListingsPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <h1>Complete Collection</h1>
                    <p className={styles.subtitle}>
                        Browse our exclusive portfolio of ultra-luxury properties worldwide
                    </p>
                </div>
            </section>

            <Properties />

            <Footer />
        </main>
    );
}
