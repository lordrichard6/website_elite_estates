import Image from 'next/image';
import styles from './Properties.module.css';
import { Bed, Bath, Move, MapPin } from 'lucide-react';

const properties = [
    {
        id: 1,
        title: "Azure Coast Villa",
        price: "$12,500,000",
        location: "Malibu, CA",
        specs: { beds: 5, baths: 6, size: "6,500 sqft" },
        image: "/prop1.png"
    },
    {
        id: 2,
        title: "Skyline Penthouse",
        price: "$18,900,000",
        location: "New York, NY",
        specs: { beds: 4, baths: 4.5, size: "4,200 sqft" },
        image: "/prop2.png"
    },
    {
        id: 3,
        title: "The Highland Manor",
        price: "$24,000,000",
        location: "Greenwich, CT",
        specs: { beds: 8, baths: 10, size: "12,000 sqft" },
        image: "/prop3.png"
    },
];

export default function Properties() {
    return (
        <section id="properties" className={`section-padding ${styles.properties}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Featured Collection</h2>
                    <p>Curated residences for the exceptional lifestyle.</p>
                </div>

                <div className={styles.grid}>
                    {properties.map((p) => (
                        <div key={p.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className={styles.image}
                                />
                                <span className={styles.price}>{p.price}</span>
                            </div>

                            <div className={styles.info}>
                                <div className={styles.top}>
                                    <h3>{p.title}</h3>
                                    <span className={styles.location}>
                                        <MapPin size={14} style={{ marginRight: '4px' }} />
                                        {p.location}
                                    </span>
                                </div>

                                <div className={styles.specs}>
                                    <div className={styles.spec}>
                                        <Bed size={16} /> <span>{p.specs.beds} Beds</span>
                                    </div>
                                    <div className={styles.spec}>
                                        <Bath size={16} /> <span>{p.specs.baths} Baths</span>
                                    </div>
                                    <div className={styles.spec}>
                                        <Move size={16} /> <span>{p.specs.size}</span>
                                    </div>
                                </div>

                                <a href={`#property-${p.id}`} className={styles.viewBtn}>View Residence</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <a href="#collection" className="btn btn-outline">View Full Collection</a>
                </div>
            </div>
        </section>
    );
}
