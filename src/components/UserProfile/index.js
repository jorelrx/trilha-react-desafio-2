import React, { useState } from 'react';
import { api } from '../../services/api';
import RepoList from '../RepoList';
import {
  Container,
  SearchContainer,
  Input,
  Button,
  ProfileContainer,
  Avatar,
  UserName,
  Bio,
} from './styles';

function UserProfile({ onAddRepo }) {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearchUser = async () => {
    try {
      const { data } = await api.get(`users/${username}`);
      setUserData(data);

      const repoData = await api.get(`users/${username}/repos`);
      setRepos(repoData.data);
    } catch (error) {
      alert('Usuário não encontrado');
    }
  };

  return (
    <Container>
      <SearchContainer>
        <Input 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Digite o nome do usuário"
        />
        <Button onClick={handleSearchUser}>Buscar Perfil</Button>
      </SearchContainer>

      {userData && (
        <ProfileContainer>
          <Avatar src={userData.avatar_url} alt={userData.name} />
          <div>
            <UserName>{userData.name}</UserName>
            <Bio>{userData.bio}</Bio>
          </div>
        </ProfileContainer>
      )}

      <RepoList repos={repos} onAddRepo={onAddRepo} />
    </Container>
  );
}

export default UserProfile;
