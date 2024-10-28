import styled from "styled-components";

export const RepoCard = styled.div`
  flex: 0 0 200px;
  margin-right: 12px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: scale(1.05);
    background-color: #333;
  }
`;