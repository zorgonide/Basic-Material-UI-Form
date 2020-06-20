import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
        const {
            values: { firstname, lastname, email, occupation, city, bio }
          } = this.props;
        const classes = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography  variant="h6" align="inherit" className={classes.title} style={styles.typography, styles.root}>
                                Confirm Data
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <List position="static" style={styles.root, styles.typography}>
                        <ListItem>
                            <ListItemText primary="First Name" secondary={firstname} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Last Name" secondary={lastname} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Email" secondary={email} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Occupation" secondary={occupation} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="City" secondary={city} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Bio" secondary={bio} />
                        </ListItem>
                    </List>
                    <br></br>
                    <ButtonGroup color="secondary" aria-label="outlined secondary button group" style={styles.button}>
                        <Button color="primary"
                            primary="true"
                            variant="contained"
                            onClick={this.continue}>Continue</Button>
                        <Button color="primary"
                            primary="true"
                            variant="contained"
                            onClick={this.back}>Back</Button>
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
