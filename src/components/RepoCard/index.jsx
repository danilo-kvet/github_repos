import {
  RepoCardContainer,
  RepoCardHeader,
  StarDisplayContainer,
} from "./style";
import { StarRounded } from "@material-ui/icons";

const RepoCard = ({ repo }) => {
  console.log(repo);
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <RepoCardContainer>
        <RepoCardHeader>
          <h3>Nome do projeto: {repo.name}</h3>
          <StarDisplayContainer>
            <StarRounded />
            <h5>{repo.stargazers_count}</h5>
          </StarDisplayContainer>
        </RepoCardHeader>
        <h5>{repo.description}</h5>
      </RepoCardContainer>
    </a>
  );
};

export default RepoCard;
