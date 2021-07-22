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

interface ListagemProps {
    clientesList: Cliente[];
    atualizar: (codigo: string) => void;
}


function ListagemClienteComponent(props: ListagemProps) {

    const { clientesList, atualizar } = props;

    const selectedItem = (item: string) => {
        atualizar(item)
    }
    
    return (
        <S.ListContainer>
            {
                clientesList.map((cliente) => {
                    return (
                        <div>
                            <S.ItemCard onClick={() => selectedItem(cliente.codigo)} >
                                <S.ItemCardImage>
                                    <img src={require(`../../assets/${cliente.imagem}`).default} 
                                        width={60} height={60} alt="logo do cliente"/>
                                </S.ItemCardImage>
                                <S.ItemCardName>
                                    {cliente.codigo} -- {cliente.nome}
                                </S.ItemCardName>
                            </S.ItemCard>
                        </div>
                    )
                })
            }
            
        </S.ListContainer>        
    )
}

export default ListagemClienteComponent;