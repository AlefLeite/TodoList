import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const Box = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  min-width: 420px;
  max-width: 90vw;
  min-height: 30vh;
`;

export const HeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TitleModal = styled.p`
    font-size: 20px;
    font-weight: 400;
    padding-top: 3px;
`

export const CloseButton = styled.span`
    cursor: pointer;
    font-weight: 600;
    padding: 6px;
    border-radius: 5px;
    background-color:rgb(241, 241, 241);
`

export const ContentForm = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`

export const LabelForm = styled.div`
    margin-top: 15px;
`

export const InputTask = styled.input`
    border-radius: 10px;
    padding: 5px;
    width: 50%;
`

export const ContainerSubmit = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 40px;
`

export const SubmitButton = styled.button`
    border: 1px solid #111111;
    border-radius: 8px;
    padding: 4px;
    background-color:rgb(216, 255, 224);
`
