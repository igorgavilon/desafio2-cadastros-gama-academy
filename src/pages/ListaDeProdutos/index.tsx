import React, { useState, useEffect } from 'react';
import * as S from './styled';

import ListagemComponent from '../../components/ListagemComponent/ListagemComponent';
import DetalhesProdutoComponent from '../../components/DetalheProdutoBox/DetalhesProdutoComponent';
import FormProdutoComponent from '../../components/FormDadosProduto/FormProdutoComponent';
import FormNovoProdutoComponent from '../../components/FormNovoProduto/FormNovoProdutoComponent';
import BotoesNavegacaoComponent from '../../components/BotoesNavegacao/BotoesNavegacaoComponent';

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
    const [modoEdicao, setModoEdicao] = useState(false);
    const [modoCriacao, setModoCriacao] = useState(false);

    useEffect(() => {
        let dadosLocalStorage: string = localStorage.getItem('produtosArray')!;
        let arrayProdutos: Produto[];
        if(dadosLocalStorage) {
            arrayProdutos = JSON.parse(dadosLocalStorage);
            setProdutos(arrayProdutos);
        }
    },[]);

    useEffect(() => {
       localStorage.setItem('produtosArray', JSON.stringify(produtos));
    },[produtos]);
    
    const atualizarDetalhesBox = (codigo: string) => {
        if(!modoEdicao) {
            const produtoEscolhido: Produto = produtos.find((produto) => produto.codigo === codigo)!;
            setProdutoMostrarDetalhe(produtoEscolhido)
        }
        
    }

    const adicionarProduto = () => {
        setModoCriacao(true)
    }

    const salvarCriacao = (produto: Produto) => {
        //adicionando um objeto no fim do array
        setProdutos(prevState => [...prevState, produto])
        setProdutoMostrarDetalhe(produto)
        sairModoCriacao()

    }

    const removerProduto = () => {
        if (!modoEdicao && produtos.length !== 0) {
            const index: number = produtos.indexOf(produtoMostrarDetalhe)
            const arrayProdutosRestantes: Produto[] = produtos.filter((produto) => produto.codigo !== produtoMostrarDetalhe.codigo)
            setProdutos(arrayProdutosRestantes)
            setProdutoMostrarDetalhe(arrayProdutosRestantes[0])
        }
        
    }

    const editarProduto = () => {
        if (produtos.length !== 0) {
            setModoEdicao(true)
        }
    }


    const salvarEdicao = (produtoEditado: Produto) => {
        const arrayProdutosEditado: Produto[] = produtos.map((produto) => {
            if(produto.codigo === produtoEditado.codigo) {
                return produtoEditado
            } else {
                return produto
            }
        })
        setProdutos(arrayProdutosEditado)
        setProdutoMostrarDetalhe(produtoEditado)
        sairModoEdicao();
    }

    const sairModoEdicao = () => {
        setModoEdicao(false)
    }

    const sairModoCriacao = () => {
        setModoCriacao(false)
    }

    return (
        <>
            <BotoesNavegacaoComponent />
            <S.Title>Sistema de Inventário Produtos</S.Title>
            <S.MainContainer>
                { modoEdicao ? 
                   <FormProdutoComponent 
                   sairEdicao={sairModoEdicao}
                   produtoEditar={produtoMostrarDetalhe}
                   salvarEdicao={salvarEdicao}/> 
                   
                   : modoCriacao ?
                   <FormNovoProdutoComponent 
                   sairCriacao={sairModoCriacao}
                   produtoEditar={produtoMostrarDetalhe}
                   salvarCriacao={salvarCriacao}/> 
                    
                  :  <><ListagemComponent 
                    produtosList={produtos} 
                    atualizar={atualizarDetalhesBox} />
                    <S.ButtonAdicionar onClick={adicionarProduto}>Novo</S.ButtonAdicionar></>
                }
                
                <DetalhesProdutoComponent 
                    produto={produtoMostrarDetalhe} 
                    excluir={removerProduto} iniciarEdicao={editarProduto}/>

            </S.MainContainer>
            

        </>
    )

}

export default ListaDeProdutos;