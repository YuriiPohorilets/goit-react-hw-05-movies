import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 40px;
`;

export const Img = styled.img`
  border-radius: 4px;
  box-shadow: var(--main-shadow);
`;

export const Wrapper = styled.div``;

export const Title = styled.h2`
  margin-bottom: 45px;
  font-weight: 700;
  font-size: 36px;
  color: var(--accent);
  text-shadow: var(--main-shadow);
`;

export const Year = styled.span`
  font-weight: 200;
  color: var(--secondary);
`;

export const Description = styled.p`
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 500;
  color: var(--accent);
`;

export const Text = styled.span`
  font-weight: 300;
  letter-spacing: 0.05em;
  color: var(--secondary);
`;
