import React, { useState } from 'react';
import * as S from './styled';

import ListagemComponent from '../../components/ListagemComponent/ListagemComponent';
import DetalhesProdutoComponent from '../../components/DetalheProdutoBox/DetalhesProdutoComponent';

interface Produto {
    codigo: string;
    nome: string;
    imagem: string;
    descricao: string;
    categoria: string;
    estoque: number;
    preco: number;
}

const produtosArray: Produto[] = [
    {
        codigo: 'PR-001',
        nome: 'Tênis Esportivo',
        imagem: 'produto.png',
        descricao: 'Tênis esportivo Nike Air',
        categoria: 'Calçados',
        estoque: 2,
        preco: 99.99
    },
    {
        codigo: 'PR-002',
        nome: 'Apple Watch Relógio Esportivo',
        imagem: 'produto.png',
        descricao: 'Relógio esportivo Apple Watch',
        categoria: 'Relógios',
        estoque: 4,
        preco: 399.99
    },
    {
        codigo: 'PR-003',
        nome: 'Calça Jeans',
        imagem: 'produto.png',
        descricao: 'Calça Jeans Wrangler',
        categoria: 'Vestuário',
        estoque: 5,
        preco: 119.00
    },
    {
        codigo: 'PR-004',
        nome: 'Boné',
        imagem: 'produto.png',
        descricao: 'Boné NicoBoco',
        categoria: 'Acessórios',
        estoque: 10,
        preco: 49.99
    },
    {
        codigo: 'PR-005',
        nome: 'Tênis de Corrida',
        imagem: 'produto.png',
        descricao: 'Tênis de corrida Adidas',
        categoria: 'Calçados',
        estoque: 10,
        preco: 249.99
    },
]

function ListaDeProdutos() {
    
    const [produtos, setProdutos] = useState(produtosArray);
    const [produtoMostrarDetalhe, setProdutoMostrarDetalhe] = useState(produtos[0]);
    
    const atualizarDetalhesBox = (codigo: string) => {
        const produtoEscolhido: Produto = produtos.find((produto) => produto.codigo === codigo)!;
        setProdutoMostrarDetalhe(produtoEscolhido)
    }

    const removerProduto = () => {
        const index: number = produtos.indexOf(produtoMostrarDetalhe)
        const arrayProdutosRestantes: Produto[] = produtos.filter((produto) => produto.codigo !== produtoMostrarDetalhe.codigo)
        setProdutos(arrayProdutosRestantes)
    }

    return (
        <>
            <S.Title>Sistema de Inventário Produtos</S.Title>
            <S.MainContainer>
                <ListagemComponent 
                    produtosList={produtos} 
                    atualizar={atualizarDetalhesBox} />
                <DetalhesProdutoComponent 
                    produto={produtoMostrarDetalhe} 
                    excluir={removerProduto}/>
            </S.MainContainer>
        </>
    )

}

export default ListaDeProdutos;