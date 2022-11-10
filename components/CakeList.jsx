import styles from "../styles/CakeList.module.css";
import CakeCard from "./CakeCard.jsx"
import CakeCard2 from "./CakeCard2.jsx"
import CakeCard3 from "./CakeCard3.jsx"





const cakeList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST CAKE IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        <CakeCard />
        <CakeCard2 />
        <CakeCard3 />

      </div>
    </div>
  );
};
export default cakeList;
