import styled from 'styled-components';


export const FormContainer = styled.div`
    
    width: 50vw;
    height: 400px;
    background-color: #51F238;
    overflow: auto;
    padding: 10px 10px;
    border: 2px solid #0D0D0D;
    border-radius: 5px;
    color: #0D0D0D;
`;

export const Label = styled.label`
    width: 200px;
    height: 30px;
`;

export const Input = styled.input`
    width: 300px;
    height: 30px;
    border: 1px solid #0D0D0D;
    border-radius: 5px;
`;

export const TextArea = styled.textarea`
    width: 300px;
    height: 30px;
    border: 1px solid #0D0D0D;
    border-radius: 5px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
    height: auto;
`;

export const ButtonSair = styled.div`
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

export const ButtonSalvar = styled.div`
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
