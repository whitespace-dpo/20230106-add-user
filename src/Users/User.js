import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./User.module.css"
const User = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <Card className={`${styles['user']}`}>
      <div>
        {props.name} ({props.age} years old)
      </div>
      <Button onClick={deleteHandler}>Delete</Button>
    </Card>
  );
};
export default User;
