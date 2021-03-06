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

interface DetalhesProdutoProps {
    produto: Produto;
    excluir: () => void;
    iniciarEdicao: () => void;
}

function DetalhesProdutoComponent (props: DetalhesProdutoProps) {
    const { produto, excluir, iniciarEdicao } = props;

    return (
        <S.DetailsContainer>
            <S.ProductDetailBox>
                { produto ? ( <>
                    <img src={require(`../../assets/${produto.imagem}`).default} 
                    width={90} height={90} alt="logo do produto" />
                    <br/>
                    <p>{produto.nome}</p>
                    <hr/>
                    <p>Código: {produto.codigo}</p>
                    <p>Descrição: {produto.descricao}</p>
                    <p>Estoque: {produto.estoque}</p>
                    <p>Preço: ${produto.preco}</p>
                    </>)
                    :
                    (<>
                    <p>Lista de Produtos vazia!</p>
                    <p>Adicione novos produtos.</p>
                    </>)
                }
                
            </S.ProductDetailBox>
            <S.ButtonGroup>
                <S.ButtonUpdate onClick={iniciarEdicao}>Editar</S.ButtonUpdate>
                <S.ButtonDelete onClick={excluir}>Excluir</S.ButtonDelete>
            </S.ButtonGroup>
        </S.DetailsContainer>
    )
}

export default DetalhesProdutoComponent;