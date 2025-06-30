import styles from './ContactStyles.module.css';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <motion.section
      id="contact"
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        CONTACT
      </motion.h1>

      <motion.div
        className={styles.contactDetails}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href="mailto:hashakala8867@gmail.com"
          className={styles.emailButton}
        >
          <FaEnvelope style={{ marginRight: '8px' }} />
          harshakala8867@gmail.com
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
