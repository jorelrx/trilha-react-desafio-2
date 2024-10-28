import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    margin: 20px auto 0 auto;
    position: relative;
    color: #e0e0e0;
    text-align: center;
`;

export const Title = styled.h3`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 12px;
`;

export const RepoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px; 
  margin-top: 16px;
  overflow-x: auto;
  padding-bottom: 10px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 10px;
  } 
`;
