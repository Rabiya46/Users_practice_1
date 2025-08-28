import type { Users } from "../constants";
import "./users.css";

interface UserProps {
  user: Users;
}

const UserCard = ({ user }: UserProps) => {
  const { firstName, email, gender, carModel, image } = user;

  return (
    <div className="user-card">
      <img src={image} alt={firstName} />

      <h1>{firstName}</h1>
      <p>{email}</p>
      <p>{gender}</p>
      <p>{carModel}</p>
    </div>
  );
};

export default UserCard;
