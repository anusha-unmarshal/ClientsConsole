import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "auto",
        alignContent: "center",
        marginBottom: '50px'
    },
    title: {
        flexGrow: 1,
        // fontSize: '40px',
        color: '#34D399',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        margin: "auto",
        textAlign: "center"
    },
    back: {
        color: '#34D399',
        position: 'relative',
        float: 'left',
        marginRight: '10px',
        border: "none",
        width: 'auto',
        height: 'auto',
        fontSize: 'large',
        cursor: 'pointer',
        outline: 'none',
        backgroundColor: 'aliceblue'
    },
}));

export default function Header(props) {
    const classes = useStyles();
    // console.log(props);
    return (
        <div className={classes.root}>
                <Toolbar>
                    <button className={classes.back} onClick={props.onBack}>{props.status === "single" &&
                    <ArrowBackIosIcon />}</button>
                    <Typography className={classes.title} variant="h3" noWrap>
                        {props.status === "all" ? "Clients" : props.name}
                    </Typography>

                </Toolbar>
        </div>
    );
}
