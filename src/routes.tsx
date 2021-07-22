import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ListaDeProdutos from './pages/ListaDeProdutos';
import ListaDeClientes from './pages/ListaDeClientes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ListaDeProdutos} />
                <Route path='/produtos' component={ListaDeProdutos} />
                <Route path='/clientes' component={ListaDeClientes} />
            </Switch>
        </BrowserRouter>
        
    )

}
