import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    width: 350px;
    height: auto;
    margin-left: 20px;
`;

export const ButtonProdutos = styled.div`
    margin-top: 10px;
    width: 120px;
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


export const ButtonClientes = styled.div`
    margin-top: 10px;
    width: 120px;
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

export const LinkPages = styled(Link)`
    text-decoration: none;
`;