import { UserCardContainer } from "./style";
import { Avatar } from "@material-ui/core";

const UserCard = ({ user }) => {
  return (
    <a
      href={user.html_url}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <UserCardContainer>
        <h3>{user.name}</h3>
        <Avatar src={user.avatar_url} alt={user.name} />
        <h4>{user.bio}</h4>
        <h5>{user.location}</h5>
      </UserCardContainer>
    </a>
  );
};

export default UserCard;
