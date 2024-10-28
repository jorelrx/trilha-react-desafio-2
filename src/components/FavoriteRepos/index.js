import React from 'react';
import ItemRepo from '../ItemRepo';
import { Container, Title, RepoContainer } from './styles';

function FavoriteRepos({ repos, onRemoveRepo }) {
  return (
    <Container>
      <Title>Repositórios Favoritos</Title>
      <RepoContainer>
        {repos.map(repo => (
          <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={onRemoveRepo} />
        ))}
      </RepoContainer>
    </Container>
  );
}

export default FavoriteRepos;
