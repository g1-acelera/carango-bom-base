import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {ThemeProvider} from '@material-ui/core/styles';
import {muiTheme, defaultStyles} from './@material/Theme'
import {Container, CssBaseline} from '@material-ui/core';

import ListagemMarcas from './pages/listagem-marca/ListagemMarcas';
import CadastroMarca from './pages/cadastro-marca/CadastroMarca';

function App() {

    const classes = defaultStyles();

    return (
        <ThemeProvider theme={muiTheme}>
            <div className={classes.root}>
                <CssBaseline/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Container component="article" maxWidth="md">
                        <Switch>
                            <Route path="/cadastro-marca" component={CadastroMarca}/>
                            <Route path='/alteracao-marca/:id' component={CadastroMarca}/>
                            <Route path="/" component={ListagemMarcas}/>
                        </Switch>
                    </Container>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;
