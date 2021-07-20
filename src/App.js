import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles';
import {muiTheme, defaultStyles} from './@material/Theme'
import {Container, CssBaseline} from '@material-ui/core';

import Routes from "./routes";

const App = () => {
    const classes = defaultStyles();

    return (
        <ThemeProvider theme={muiTheme}>
            <div className={classes.root}>
                <CssBaseline/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Container component="article" maxWidth="md">
                        <Routes/>
                    </Container>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;
