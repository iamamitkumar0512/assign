import { useState } from "react";
import styles from "../styles/accordian.module.scss";

type data = {
  title: string;
  content: React.JSX.Element;
};

const Accordion = ({ title, content }: data) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <span className={styles.accordionTitle}>{title}</span>
        <div className={isOpen ? styles.arrowDown : styles.arrowRight}></div>
      </div>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};

export default Accordion;
