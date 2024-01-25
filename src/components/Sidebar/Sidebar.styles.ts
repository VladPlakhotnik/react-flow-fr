import styled from 'styled-components'

export const Container = styled.div`
  width: 20vw;
  height: 90vh;
  box-sizing: border-box;
  border-right: 1px solid #005eff;
`
export const Box = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Notification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #005eff;
  color: #fff;
  height: 250px;
`
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
`
export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-around;
`
export const Button = styled.button`
  border: 0;
  padding: 0.5rem 1rem;
`
