import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <>
      <div  onClick={props.onErrorHandler} className={`${styles["error-modal__background"]}`}></div>
      <Card className={`${styles["error-modal"]}`}>
        <header className={`${styles["error-modal__title"]}`}>
          <h2>{props.title}</h2>
        </header>
        <div className={`${styles["error-modal__message"]}`}>
          <p>{props.message}</p>
        </div>
        <footer className={`${styles["error-modal__action"]}`}>
          <Button onClick={props.onErrorHandler}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};
export default ErrorModal;
