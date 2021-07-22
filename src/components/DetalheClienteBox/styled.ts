import styled from 'styled-components';

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    height: 400px;
    background-color: #ffffff;
`;

export const ClientDetailBox = styled.div`
    width: 300px;
    height: 400px;
    border: 1px dashed blue;
    border-radius: 5px;
    background-color: #26731A;
    background-color: #0D0D0D;
    color: #fff;
    text-align: center;
    padding: 10px 5px;
    font-size: 1.0rem

`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
    height: auto;
`;

export const ButtonUpdate = styled.div`
    margin-top: 10px;
    width: 85px;
    height: 30px;
    background-color: #26731A;
    border: 3px solid #0D0D0D;
    color: #0D0D0D;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 10px;
    text-align: center;
    padding: 5px;

    &:hover {
        color: #26731A;
        border-color: #26731A;
        background-color: #0D0D0D;
    }
`;


export const ButtonDelete = styled.div`
    margin-top: 10px;
    width: 85px;
    height: 30px;
    background-color: #ffffff;
    border: 3px solid #26731A;
    color: #26731A;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 10px;
    text-align: center;
    padding: 5px;

    &:hover {
        color: #ffffff;
        border-color: #26731A;
        background-color: #26731A;
    }
`;