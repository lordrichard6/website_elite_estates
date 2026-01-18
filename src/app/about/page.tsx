import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const values = [
    { icon: Award, title: "Excellence", desc: "Uncompromising standards in every detail" },
    { icon: Users, title: "Discretion", desc: "Privacy and confidentiality assured" },
    { icon: Globe, title: "Global Reach", desc: "Premier properties worldwide" },
    { icon: TrendingUp, title: "Legacy", desc: "Generational wealth building" },
];

export default function AboutPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <h1>About Elite Estates</h1>
                    <p className={styles.subtitle}>
                        Curating extraordinary properties for extraordinary individuals since 1995.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.story}>
                        <h2>Our Heritage</h2>
                        <p>
                            For over three decades, ELITE ESTATES has represented the pinnacle of luxury real estate,
                            connecting discerning clientele with the world's most exceptional properties.
                        </p>
                        <p>
                            Our portfolio represents more than mere residences—they are legacies, sanctuaries,
                            and statements of refined taste cultivated over generations.
                        </p>
                    </div>
                </div>
            </section>

            <section className={`section-padding ${styles.values}`}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Principles</h2>
                    <div className={styles.grid}>
                        {values.map((v, i) => (
                            <div key={i} className={styles.card}>
                                <div className={styles.icon}><v.icon size={32} /></div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
