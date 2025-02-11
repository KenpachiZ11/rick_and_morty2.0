import styled from '@emotion/styled';

export const WrapperCardsSt = styled.div`
  margin: 0 auto;
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 20px;
  grid-template-columns: auto auto auto auto;

  @media (min-width: 1200px) and (max-width: 1599px) {
    grid-template-columns: auto auto auto;
  }

  @media (min-width: 600px) and (max-width: 1199px) {
    grid-template-columns: auto auto;
  }

`

export const WrapperCardSt = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
`

export const WrapperCardInfoSt = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
`

export const WrapperCardInfoNameSt = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const WrapperCardInfoStatusSt = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`