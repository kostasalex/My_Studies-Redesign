import styles from './Footer.module.css';
import {footerData} from '@/locales/gr';


const Footer = () => (
    <>
        <div className={styles.footer}>
            {footerData.map((card) => (
                <div key={card.id}>
                    <a href={card.link} target={card.link.startsWith('http') ? '_blank' : '_self'}
                       rel="noopener noreferrer">
                        {card.title}
                    </a>
                </div>
            ))}

        </div>
        <div className={styles.footerText}>My Studies UoA © 2024</div>
    </>
);

export default Footer;
