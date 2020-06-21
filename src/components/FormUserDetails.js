import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export class FormUserDetails extends Component {
    continue = e => { 
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange} = this.props;
        const useStyles = makeStyles((theme) => ({
            root: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > *': {
                margin: theme.spacing(1),
                flexGrow: 1
              },
              typography: {
                align: "center"
              }
            },
          }));
        const classes = useStyles;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton> */}
                            <Typography  variant="h6" align="inherit" className={classes.title} style={styles.typography && styles.root}>
                                Enter User Details
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <TextField
                        label = "Enter Your First Name"
                        floatingLabelText = "First Name"
                        onChange={handleChange('firstname')}
                        defaultValue= {values.firstname}
                    />
                    <br></br>
                    <TextField
                        label = "Enter Your Last Name"
                        floatingLabelText = "Last Name"
                        onChange={handleChange('lastname')}
                        defaultValue= {values.lastname}
                    />
                    <br></br>
                    <TextField
                        label = "Enter Your Email"
                        floatingLabelText = "Email"
                        onChange={handleChange('email')}
                        defaultValue= {values.email}
                    />
                    <br></br>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.continue}
                        style={styles.button}
                    >   
                     Continue
                    </Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
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
export default FormUserDetails
