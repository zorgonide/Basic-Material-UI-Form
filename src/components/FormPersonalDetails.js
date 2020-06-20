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
import ButtonGroup from '@material-ui/core/ButtonGroup';

export class FormPersonalDetails extends Component {
    continue = e => { 
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.previousStep();
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
              },
            },
          }));
        const classes = useStyles;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                            </IconButton>
                            <Typography  variant="h6" align="inherit" className={classes.title} style={styles.typography, styles.root}>
                            Enter Personal Details
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <TextField
                        label = "Enter Your Occupation"
                        floatingLabelText = "Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue= {values.occupation}
                    />
                    <br></br>
                    <TextField
                        label = "Enter Your City"
                        floatingLabelText = "City"
                        onChange={handleChange('city')}
                        defaultValue= {values.city}
                    />
                    <br></br>
                    <TextField
                        label = "Enter Your Bio"
                        floatingLabelText = "Bio"
                        onChange={handleChange('bio')}
                        defaultValue= {values.bio}
                    />
                    <br></br>
                    {/* <br></br> */}
                    <ButtonGroup color="secondary" aria-label="outlined secondary button group" style={styles.button}>
                        <Button color="primary"
                            primary="true"
                            variant="contained"
                            onClick={this.continue}
                            
                            >Continue</Button>
                        <Button color="primary"
                            primary="true"
                            variant="contained"
                            onClick={this.back}
                            
                            >Back</Button>
                    </ButtonGroup>
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
export default FormPersonalDetails
