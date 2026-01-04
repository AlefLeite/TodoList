import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    border: 2px solid black;
    border-radius: 20px;
    flex-direction: column;
    padding: 10px;
    max-width: 200px;
    margin-bottom: 10px;
`

export const LineCard = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TitleCard = styled.span`
    font-weight: 600;
    font-size: 18px;
`

export const Deletebutton = styled.span`
    margin-top: 1px;
    padding: 3px;
    /* border: 2px solid #f7213d;
    border-radius: 10px; */
`
