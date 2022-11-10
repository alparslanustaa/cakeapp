import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}> ORDER NOW! </div>
          <div className={styles.text}>+1 613 769-2447</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Aurora Cake Design</li>
          <Image src="/img/logo.png" alt="" width="100px" height="100px" />
          <li className={styles.listItem}>Order Yours Today!</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>0</div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
