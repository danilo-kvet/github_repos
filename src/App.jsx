import axios from "axios";
import { useState } from "react";
import {
  StyledForm,
  ResultContainer,
  MainContainer,
  ReposContainer,
} from "./style";
import { CircularProgress } from "@material-ui/core";
import RepoCard from "./components/RepoCard";
import UserCard from "./components/UserCard";

function App() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    setRepositories([]);
    setLoading(true);
    setUser(false);
    try {
      const getUser = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUser(getUser.data);
      console.log(getUser.data);
      const getRepos = await axios.get(getUser.data.repos_url);
      setError(false);
      setRepositories(getRepos.data);
    } catch {
      setRepositories([]);
      setLoading(false);
      setError(true);
    }

    setLoading(false);
    setUsername("");
  }

  return (
    <MainContainer>
      <StyledForm onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Pesquise um nome de usuário no Github"
        />
        <button type="submit">Pesquisar</button>
      </StyledForm>
      <ResultContainer>
        {error && <p>Usuário não encontrado</p>}
        {user && <UserCard user={user} />}
        {loading && <CircularProgress />}
        <ReposContainer>
          {!!repositories[0] &&
            repositories.map((repo, index) => (
              <RepoCard key={index} repo={repo} />
            ))}
        </ReposContainer>
      </ResultContainer>
    </MainContainer>
  );
}

export default App;
