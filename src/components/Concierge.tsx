import styles from './Concierge.module.css';
import { Key, Plane, Utensils, Shield } from 'lucide-react';

const services = [
    {
        icon: Key,
        title: "Property Management",
        desc: "Comprehensive estate oversight, ensuring your residence is always pristine and ready for your arrival."
    },
    {
        icon: Plane,
        title: "Relocation Services",
        desc: "Seamless international transition support, from visa acquisition to school enrollment for your family."
    },
    {
        icon: Utensils,
        title: "Private Staffing",
        desc: "Sourcing world-class personal chefs, butlers, chauffeurs, and security personnel."
    },
    {
        icon: Shield,
        title: "Legal Advisory",
        desc: "Expert counsel on real estate law, tax implications, and asset protection strategies."
    },
];

export default function Concierge() {
    return (
        <section id="concierge" className={`section-padding ${styles.concierge}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <span className={styles.label}>Beyond Real Estate</span>
                        <h2>The Elite Concierge</h2>
                        <p className={styles.intro}>
                            We believe luxury extends far beyond the transaction. Our dedicated concierge team ensures every aspect of your lifestyle is seamlessly managed with discretion and excellence.
                        </p>
                        <a href="#services" className="btn btn-primary">Our Services</a>
                    </div>

                    <div className={styles.grid}>
                        {services.map((s, i) => (
                            <div key={i} className={styles.serviceItem}>
                                <div className={styles.iconWrapper}>
                                    <s.icon size={24} />
                                </div>
                                <div>
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
