import React, { useState } from 'react';
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

interface FormProdutoProps {
    sairEdicao: () => void;
    salvarEdicao: (produto: Produto) => void;
    produtoEditar: Produto;
}

function FormProdutoComponent(props: FormProdutoProps) {
    const { sairEdicao, salvarEdicao, produtoEditar } = props;
    const [produto, setProduto] = useState(produtoEditar);
    
    const edit = (e: string, propriedade: string)  => {
        setProduto((prevState) => ({
                ...prevState,
                produto,[propriedade]: e
            }
        ))
    }

    const salvar = () => {
        salvarEdicao(produto)
    }


    return (
        <S.FormContainer>
            Código:<S.Input placeholder='Código' value={produtoEditar.codigo} disabled={true} /><br/>
            <S.Label>Nome:      </S.Label>
            <S.Input placeholder='Nome' value={produto.nome} onChange={e => edit(e.target.value, 'nome')}/><br/>
            <S.Label>Descrição: </S.Label>
            <S.TextArea placeholder='Descrição' value={produto.descricao} onChange={e => edit(e.target.value, 'descricao')}/><br/>
            <S.Label>Categoria: </S.Label>
            <S.Input placeholder='Categoria' value={produto.categoria} onChange={e => edit(e.target.value, 'categoria')}/><br/>
            <S.Label>Estoque:   </S.Label>
            <S.Input type='number' defaultValue={0}  value={produto.estoque} onChange={e => edit(e.target.value, 'estoque')} /><br/>
            <S.Label>Preço:   </S.Label>
            <S.Input type='number' defaultValue={0}  value={produto.preco} onChange={e => edit(e.target.value, 'preco')}/><br/>
            <S.ButtonGroup>
                <S.ButtonSair onClick={sairEdicao}>Sair</S.ButtonSair>
                <S.ButtonSalvar onClick={salvar}>Salvar</S.ButtonSalvar>
            </S.ButtonGroup>
        </S.FormContainer>
    )
}

export default FormProdutoComponent;