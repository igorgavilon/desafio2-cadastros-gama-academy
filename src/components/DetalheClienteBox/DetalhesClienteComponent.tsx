import React from 'react';
import * as S from './styled';

interface Cliente {
    codigo: string;
    nome: string;
    cpf_cnpj: string;
    endereco: string;
    telefone: string;
    email: string;
    imagem: string;
}

interface DetalhesClienteProps {
    cliente: Cliente;
    excluir: () => void;
    iniciarEdicao: () => void;
}

function DetalhesClienteComponent (props: DetalhesClienteProps) {
    const { cliente, excluir, iniciarEdicao } = props;

    return (
        <S.DetailsContainer>
            <S.ClientDetailBox>
                { cliente ? ( <>
                    <img src={require(`../../assets/${cliente.imagem}`).default} 
                    width={90} height={90} alt="logo do cliente" />
                    <br/>
                    <br/>
                    <p>Código: {cliente.codigo}</p>
                    <p>{cliente.nome}</p>
                    <p>Telefone: {cliente.telefone}</p>
                    <p>Email: ${cliente.email}</p>
                    </>)
                    :
                    (<>
                    <p>Lista de Clientes vazia!</p>
                    <p>Adicione novos clientes.</p>
                    </>)
                }
                
            </S.ClientDetailBox>
            <S.ButtonGroup>
                <S.ButtonUpdate onClick={iniciarEdicao}>Editar</S.ButtonUpdate>
                <S.ButtonDelete onClick={excluir}>Excluir</S.ButtonDelete>
            </S.ButtonGroup>
        </S.DetailsContainer>
    )
}

export default DetalhesClienteComponent;