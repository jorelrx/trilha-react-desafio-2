import React from 'react';
import { RepoCard as StyledRepoCard } from './styles'; // Altere o caminho se necessário

function RepoCard({ repo, onClick }) {
  return (
    <StyledRepoCard onClick={() => onClick(repo)}>
      <h3>{repo.name}</h3>
      <p>{repo.description || 'Sem descrição'}</p>
      <p>⭐ {repo.stargazers_count}</p>
    </StyledRepoCard>
  );
}

export default RepoCard;
