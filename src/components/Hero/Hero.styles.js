import styled, { css } from 'styled-components'

export const ButtonRight = styled.div`
  display: flex;
  flex: 2;
  background-color: #347aff;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  img {
    transition: all 0.3s;
    ${(props) =>
      props.show
        ? css`
            transform: rotate(0deg);
          `
        : 'transform : rotate(180deg)'};
  }
  &:hover {
    opacity: 0.3;
  }
`

export const ButtonLeft = styled.div`
  display: flex;
  flex: 10;
  justify-content: space-evenly;
  span {
    display: flex;
    color: white;
    text-transform: capitalize;
    cursor: pointer;
  }
`

export const WrapperButton = styled.div`
  width: 236px;
  height: 59px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  padding: 0 0 0 32px;
  border-radius: 8px;
  background-color: var(--blue);
  cursor: pointer;
`

export const ExpenseTotale = styled.span`
  font-family: InterSemiBold;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--white);
`
export const ExpenseTitle = styled.span`
  opacity: 0.5;
  font-family: InterRegular;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--white);
`

export const IncomesTitle = styled(ExpenseTitle)``
export const IncomesTotale = styled(ExpenseTotale)``

export const Expense = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Incomes = styled(Expense)``

export const WrapperExpenseAndBalance = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 50px;
`

export const Balance = styled.span`
  margin-top: 6px;
  font-family: InterBold;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--white);
`

export const TotalBalance = styled.span`
  margin-top: 11px;
  opacity: 0.5;
  font-family: InterRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--white);
  text-transform: capitalize;
`

export const WrapperDate = styled.div`
  width: 103px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 4px 8px 4px 6px;
  border-radius: 20px;
  background-color: var(--green);
  span {
    font-family: InterRegular;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: var(--black);
  }
`

export const Left = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
`

export const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`

export const Container = styled.div`
  height: 196px;
  display: flex;
  flex: 1;
  background-color: var(--light-black);
  flex-direction: row;
  padding-top: 24px;
  padding-bottom: 16px;
  .flex2h {
    display: flex;
    flex: 2;
  }
`
