// App.js
import React, { useState } from 'react';
import UserProfile from '../components/UserProfile';
import FavoriteRepos from '../components/FavoriteRepos';
import { Container } from './styles';

function App() {
  const [favoriteRepos, setFavoriteRepos] = useState([]);

  const handleAddRepo = (repo) => {
    const exists = favoriteRepos.some(favRepo => favRepo.id === repo.id);
    if (!exists) {
      setFavoriteRepos(prev => [...prev, repo]);
    } else {
      alert('Repositório já adicionado aos favoritos');
    }
  };

  const handleRemoveRepo = (id) => {
    setFavoriteRepos(prevRepos => prevRepos.filter(repo => repo.id !== id));
  };

  return (
    <Container>
      <h1>Github Explorer</h1>
      <UserProfile onAddRepo={handleAddRepo} />
      <FavoriteRepos repos={favoriteRepos} onRemoveRepo={handleRemoveRepo} />
    </Container>
  );
}

export default App;
