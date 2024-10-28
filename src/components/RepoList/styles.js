import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  position: relative;
  color: #e0e0e0;
`;

export const Title = styled.h3`
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 12px;
`;

export const RepoContainer = styled.div`
  display: flex;
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

export const NavButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #ffffff;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  margin-left: 8px;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const NavButtonRight = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #ffffff;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  margin-right: 8px;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;
