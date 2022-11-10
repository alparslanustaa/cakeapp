import styles from "../styles/CakeCard.module.css";
import Image from "next/image";


const CakeCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/cake.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Mid Size Cake</h1>
      <span className={styles.price}>59.99</span>
      <p className={styles.desc}>
        Cake Prices Call!
      </p>

    </div>
  )
}
export default CakeCard