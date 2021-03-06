import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    color: #333;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ButtonAdicionar = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    left: 150px;
    width: 80px;
    height: auto;
    background-color: #26731A;
    color: #0D0D0D;
    text-align:center;
    border: 3px solid #0D0D0D;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
    margin-top: 10px;
    padding: 5px 5px;

    &:hover {
        color: #26731A;
        border-color: #26731A;
        background-color: #0D0D0D;
    }
`;
