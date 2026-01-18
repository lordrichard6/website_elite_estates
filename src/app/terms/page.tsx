import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./legal.module.css";

export default function TermsPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <h1>Terms of Service</h1>
                    <p>Last updated: January 18, 2026</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.content}>
                        <h2>1. Services</h2>
                        <p>ELITE ESTATES provides exclusive real estate brokerage and concierge services.</p>

                        <h2>2. Engagement</h2>
                        <p>All transactions are subject to individual representation agreements.</p>

                        <h2>3. Confidentiality Obligations</h2>
                        <p>Both parties agree to maintain strict confidentiality regarding all transactions.</p>

                        <h2>4. Contact</h2>
                        <p>For legal inquiries: <a href="mailto:legal@elite-estates.com">legal@elite-estates.com</a></p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
