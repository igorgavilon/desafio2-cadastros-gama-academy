import React, { useState, useEffect } from 'react';
import * as S from './styled';

import ListagemClienteComponent from '../../components/ListagemCliente/ListagemClienteComponent';
import DetalhesClienteComponent from '../../components/DetalheClienteBox/DetalhesClienteComponent';
import FormClienteComponent from '../../components/FormDadosCliente/FormClienteComponent';
import FormNovoClienteComponent from '../../components/FormNovoCliente/FormNovoClienteComponent';
import BotoesNavegacaoComponent from '../../components/BotoesNavegacao/BotoesNavegacaoComponent';

interface Cliente {
    codigo: string;
    nome: string;
    cpf_cnpj: string;
    endereco: string;
    telefone: string;
    email: string;
    imagem: string;
}
//localStorage.setItem('clientesArray', JSON.stringfy(clientesArray))
const clientesArray: Cliente[] = [
    {
        codigo: 'CL-001',
        nome: 'José Carlos',
        cpf_cnpj: '111.222.333-33',
        endereco: 'Av. Central, 90. Dourados, MS',
        telefone: '6734248888',
        email: 'joao@sistemas.com',
        imagem: 'cliente.png'
    },
    {
        codigo: 'CL-002',
        nome: 'Daniel Fortuna',
        cpf_cnpj: '222.333.333-33',
        endereco: 'Av. meridional, 1000. São Paulo, SC',
        telefone: '1134558888',
        email: 'daniel.fortuna@sistemas.com',
        imagem: 'cliente.png'
    },
    {
        codigo: 'CL-003',
        nome: 'Maria Antonieta',
        cpf_cnpj: '111.222.555-55',
        endereco: 'Rua das Palmeiras, 33. Salvador, BA',
        telefone: '6698885544',
        email: 'antonieta@developer.com',
        imagem: 'cliente.png'
    },
    {
        codigo: 'CL-004',
        nome: 'Karina Estrela',
        cpf_cnpj: '003.200.999-33',
        endereco: 'Rua III, 4000. Campo Grande, MS',
        telefone: '6797785544',
        email: 'kaestrela@developer.com',
        imagem: 'cliente.png'
    },
    {
        codigo: 'CL-005',
        nome: 'Heitor Augusto',
        cpf_cnpj: '099.111.456-00',
        endereco: 'Alameda Central, 55. Rio de Janeiro, RJ',
        telefone: '2199994567',
        email: 'heitor@sistemas.com',
        imagem: 'cliente.png'
    },
]

function ListaDeClientes() {
    //const arrayClientes: Array<Cliente> = []
    const [clientes, setClientes] = useState(clientesArray);
    const [clienteMostrarDetalhe, setClienteMostrarDetalhe] = useState(clientes[0]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [modoCriacao, setModoCriacao] = useState(false);
    
    useEffect(() => {
        let dadosLocalStorage: string = localStorage.getItem('clientesArray')!;
        let arrayClientes: Cliente[];
        if(dadosLocalStorage !== null) {
            arrayClientes = JSON.parse(dadosLocalStorage);
            setClientes(arrayClientes);
        }
    },[]);

    useEffect(() => {
       localStorage.setItem('clientesArray', JSON.stringify(clientes));
    },[clientes]);

    const atualizarDetalhesBox = (codigo: string) => {
        if(!modoEdicao) {
            const clienteEscolhido: Cliente = clientes.find((cliente) => cliente.codigo === codigo)!;
            setClienteMostrarDetalhe(clienteEscolhido)
        }
        
    }

    const adicionarCliente = () => {
        setModoCriacao(true)
    }

    const salvarCriacao = (cliente: Cliente) => {
        //adicionando um objeto no fim do array
        setClientes(prevState => [...prevState, cliente])
        setClienteMostrarDetalhe(cliente)
        sairModoCriacao()

    }

    const removerCliente = () => {
        if (!modoEdicao && clientes.length !== 0) {
            const index: number = clientes.indexOf(clienteMostrarDetalhe)
            const arrayClientesRestantes: Cliente[] = clientes.filter((cliente) => cliente.codigo !== clienteMostrarDetalhe.codigo)
            setClientes(arrayClientesRestantes)
            setClienteMostrarDetalhe(arrayClientesRestantes[0])
        }
        
    }

    const editarCliente = () => {
        if (clientes.length !== 0) {
            setModoEdicao(true)
        }
    }


    const salvarEdicao = (clienteEditado: Cliente) => {
        const index: number = clientes.indexOf(clienteMostrarDetalhe)
        const arrayClientesEditado: Cliente[] = clientes.map((cliente) => {
            if(cliente.codigo === clienteEditado.codigo) {
                return clienteEditado
            } else {
                return cliente
            }
        })
        setClientes(arrayClientesEditado)
        setClienteMostrarDetalhe(clienteEditado)
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
            <S.Title>Sistema de Inventário Clientes</S.Title>
            <S.MainContainer>
                { modoEdicao ? 
                   <FormClienteComponent 
                   sairEdicao={sairModoEdicao}
                   clienteEditar={clienteMostrarDetalhe}
                   salvarEdicao={salvarEdicao}/> 
                   
                   : modoCriacao ?
                   <FormNovoClienteComponent 
                   sairCriacao={sairModoCriacao}
                   clienteEditar={clienteMostrarDetalhe}
                   salvarCriacao={salvarCriacao}/> 
                    
                  :  <><ListagemClienteComponent 
                    clientesList={clientes} 
                    atualizar={atualizarDetalhesBox} />
                    <S.ButtonAdicionar onClick={adicionarCliente}>+Novo</S.ButtonAdicionar></>
                }
                
                <DetalhesClienteComponent 
                    cliente={clienteMostrarDetalhe} 
                    excluir={removerCliente} iniciarEdicao={editarCliente}/>

            </S.MainContainer>
            

        </>
    )

}

export default ListaDeClientes;