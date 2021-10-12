import { FunctionalComponent, h } from "preact";
import styles from "../scss/main.scss";

const App: FunctionalComponent = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.content}>Hello World!</div>
    </div>
  );
};

export default App;
