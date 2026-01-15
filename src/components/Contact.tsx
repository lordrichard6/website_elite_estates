import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={`section-padding ${styles.contact}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.formCard}>
                        <h3>Private Inquiry</h3>
                        <p className={styles.subtext}>A member of our team will contact you within 4 hours.</p>

                        <form className={styles.form}>
                            <div className={styles.row}>
                                <input type="text" placeholder="First Name" className={styles.input} />
                                <input type="text" placeholder="Last Name" className={styles.input} />
                            </div>
                            <input type="email" placeholder="Email Address" className={styles.input} />
                            <input type="tel" placeholder="Phone Number" className={styles.input} />
                            <textarea placeholder="Message or Property Interest" rows={4} className={styles.textarea}></textarea>
                            <button type="submit" className={styles.submitBtn}>Submit Request</button>
                        </form>
                    </div>

                    <div className={styles.info}>
                        <h2>Global Headquarters</h2>
                        <div className={styles.office}>
                            <h4>Los Angeles</h4>
                            <p>90210 Beverly Hills</p>
                            <p>California, USA</p>
                            <p className={styles.phone}>+1 310.555.0199</p>
                        </div>

                        <div className={styles.office}>
                            <h4>London</h4>
                            <p>1 Kensington Gardens</p>
                            <p>London, UK</p>
                            <p className={styles.phone}>+44 20 7946 0999</p>
                        </div>

                        <div className={styles.office}>
                            <h4>Dubai</h4>
                            <p>Palm Jumeirah</p>
                            <p>Dubai, UAE</p>
                            <p className={styles.phone}>+971 4 123 4567</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
