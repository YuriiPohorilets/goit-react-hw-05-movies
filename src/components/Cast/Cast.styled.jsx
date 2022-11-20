import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px 10px;
  justify-content: center;
`;

export const Item = styled.li`
  flex-basis: 150px;
`;

export const Img = styled.img`
  margin-bottom: 5px;
  border-radius: 4px;
`;

export const Name = styled.p`
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Character = styled.p`
  color: var(--accent);
`;
