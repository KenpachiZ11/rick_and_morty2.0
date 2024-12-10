import styled from '@emotion/styled';

export const WrapperBlockSt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
    transition-duration: 500ms;
  }
`

export const WrapperBlockNamesSt = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`