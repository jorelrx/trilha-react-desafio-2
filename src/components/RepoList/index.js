import React, { useRef } from 'react';
import RepoCard from '../RepoCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import {
  Container,
  Title,
  NavButtonLeft,
  NavButtonRight,
  RepoContainer,
} from './styles';

function RepoList({ repos, onAddRepo }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <Container>
      <Title>Repositórios do Usuário</Title>
      <NavButtonLeft onClick={scrollLeft}>
        <MdChevronLeft size={24} />
      </NavButtonLeft>
      <RepoContainer ref={scrollRef}>
        {repos.map((repo) => (
          <RepoCard repo={repo} onClick={onAddRepo}>
          </RepoCard>
        ))}
      </RepoContainer>
      <NavButtonRight onClick={scrollRight}>
        <MdChevronRight size={24} />
      </NavButtonRight>
    </Container>
  );
}

export default RepoList;
