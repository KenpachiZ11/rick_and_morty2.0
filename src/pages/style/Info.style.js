import styled from '@emotion/styled';

export const WrapperBlockSt = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 10px;
`

export const WrapperBlockOptionsSt = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
`

export const WrapperGenderSt = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const WrapperStatusSt = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const WrapperSpeciesSt = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const WrapperBlockCardsSt = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  gap: 10px;
  box-sizing: border-box;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
`

