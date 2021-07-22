import React, { useState } from 'react';
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

interface FormClienteProps {
    sairEdicao: () => void;
    salvarEdicao: (cliente: Cliente) => void;
    clienteEditar: Cliente;
}

function FormClienteComponent(props: FormClienteProps) {
    const { sairEdicao, salvarEdicao, clienteEditar } = props;
    const [cliente, setCliente] = useState(clienteEditar);
    
    const edit = (e: string, propriedade: string)  => {
        setCliente((prevState) => ({
                ...prevState,
                cliente,[propriedade]: e
            }
        ))
    }

    const salvar = () => {
        salvarEdicao(cliente)
    }


    return (
        <S.FormContainer>
            <S.Label>Código:</S.Label>
            <S.Input placeholder='Código' value={clienteEditar.codigo} disabled={true} /><br/>
            <S.Label>Nome:</S.Label>
            <S.Input placeholder='Nome' value={cliente.nome} onChange={e => edit(e.target.value, 'nome')}/><br/>
            <S.Label>CPF/CNPJ: </S.Label>
            <S.Input placeholder='CPF/CNPJ' value={cliente.cpf_cnpj} onChange={e => edit(e.target.value, 'cpf_cnpj')}/><br/>
            <S.Label>Endereço: </S.Label>
            <S.Input placeholder='Endereço' value={cliente.endereco} onChange={e => edit(e.target.value, 'endereco')}/><br/>
            <S.Label>Telefone:   </S.Label>
            <S.Input placeholder='Telefone'  value={cliente.telefone} onChange={e => edit(e.target.value, 'telefone')} /><br/>
            <S.Label>Email:   </S.Label>
            <S.Input placeholder='Email' value={cliente.email} onChange={e => edit(e.target.value, 'email')}/><br/>
            <S.ButtonGroup>
                <S.ButtonSair onClick={sairEdicao}>Sair</S.ButtonSair>
                <S.ButtonSalvar onClick={salvar}>Salvar</S.ButtonSalvar>
            </S.ButtonGroup>
        </S.FormContainer>
    )
}

export default FormClienteComponent;