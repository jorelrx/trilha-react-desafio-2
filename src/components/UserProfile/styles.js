import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  color: #e0e0e0;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #2e2e2e;
  color: #e0e0e0;
  font-size: 16px;

  &::placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  padding: 10px 16px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
`;

export const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid #333;
`;

export const UserName = styled.h2`
  font-size: 24px;
  color: #ffffff;
  margin: 0;
`;

export const Bio = styled.p`
  font-size: 16px;
  color: #b3b3b3;
  margin-top: 8px;
`;
