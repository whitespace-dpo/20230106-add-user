import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorModal, setErrorModal] = useState();
  const [isError, setIsError] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError(true);
      setErrorModal({
        title: "Information is blank!",
        message: "Please fill in the blanks",
      });
      return;
    }
    if (+enteredAge < 1) {
      setIsError(true);
      setErrorModal({
        title: "The age must be greater 0!",
        message: "Please re-enter age information.",
      });
      return;
    }
    if (+enteredAge > 110) {
      setIsError(true);
      setErrorModal({
        title: "Is he/she a human?",
        message: "Please re-enter age information.",
      });
      return;
    }
    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setIsError(false);
    console.log("CLICKED");
  }
  return (
    <>
      {isError && <ErrorModal title={errorModal.title} message={errorModal.message} onErrorHandler={errorHandler}></ErrorModal>}
      <Card className={`${styles["add-user"]}`}>
        <form  onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
