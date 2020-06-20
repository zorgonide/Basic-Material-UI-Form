import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
      const classes = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography  variant="h6" align="inherit" className={classes.title} style={styles.typography, styles.root}>
                        Success
                    </Typography>
                </Toolbar>
            </AppBar>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles ={
    button: {
        margin: 15
    },
    root: {
        flexGrow: 1
    },
    typography: {
        align: "center"
    }
};

export default Success;