import styled from 'styled-components';

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 400px;
    background-color: #51F238;
    overflow: auto;
    padding: 10px 0;
    border: 2px solid #0D0D0D;
    border-radius: 5px;
`;

export const ItemCard = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    height: auto;
    border: 1px solid #26731A;
    border-radius: 5px;
    background-color: #0D0D0D;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
    padding: 5px;
`;

export const ItemCardImage = styled.div`
    margin-right: 5px;
`;

export const ItemCardName = styled.div`
    font-weight: bold;
`;