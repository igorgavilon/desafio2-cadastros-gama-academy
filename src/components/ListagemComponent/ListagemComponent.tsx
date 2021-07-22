import React from 'react';
import * as S from './styled';

interface Produto {
    codigo: string;
    nome: string;
    imagem: string;
    descricao: string;
    categoria: string;
    estoque: number;
    preco: number;
}

interface ListagemProps {
    produtosList: Produto[];
    atualizar: (codigo: string) => void;
}


function ListagemComponent(props: ListagemProps) {

    const { produtosList, atualizar } = props;

    const selectedItem = (item: string) => {
        atualizar(item)
    }
    
    return (
        <S.ListContainer>
            {
                produtosList.map((produto) => {
                    return (
                        <div>
                            <S.ItemCard onClick={() => selectedItem(produto.codigo)} >
                                <S.ItemCardImage>
                                    <img src={require(`../../assets/${produto.imagem}`).default} 
                                        width={60} height={60} alt="logo do produto"/>
                                </S.ItemCardImage>
                                <S.ItemCardName>
                                    {produto.codigo} -- {produto.nome}
                                </S.ItemCardName>
                            </S.ItemCard>
                        </div>
                    )
                })
            }
        </S.ListContainer>
    )
}

export default ListagemComponent;