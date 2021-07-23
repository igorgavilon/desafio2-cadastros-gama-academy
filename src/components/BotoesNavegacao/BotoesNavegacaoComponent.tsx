import React from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';

function BotoesNavegacaoComponent () {
    return (
        <S.ButtonGroup>
            <S.LinkPages to='/produtos'><S.ButtonProdutos>Produtos</S.ButtonProdutos></S.LinkPages>
            <S.LinkPages to='/clientes'><S.ButtonClientes>Clientes</S.ButtonClientes></S.LinkPages>
        </S.ButtonGroup>
    )
}

export default BotoesNavegacaoComponent;