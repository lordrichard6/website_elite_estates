import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./legal.module.css";

export default function PrivacyPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: January 18, 2026</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.content}>
                        <h2>1. Information Collection</h2>
                        <p>ELITE ESTATES collects information necessary to provide exceptional service to our clientele.</p>

                        <h2>2. Data Usage</h2>
                        <p>We use your information solely to curate property recommendations and facilitate transactions.</p>

                        <h2>3. Confidentiality</h2>
                        <p>Your privacy is paramount. We maintain the highest standards of discretion and data security.</p>

                        <h2>4. Contact</h2>
                        <p>For privacy inquiries: <a href="mailto:privacy@elite-estates.com">privacy@elite-estates.com</a></p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
