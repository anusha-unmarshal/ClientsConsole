import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,

    },
    paper: {
        marginTop: '5px',
        margin: 'auto',
        width: '60%',
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: '10px',
        padding: '20px',

    },
    image: {
        width: 128,
        height: 128,
        margin: '20px'
    },
    img: {
        display: 'block',
        borderRadius: '50%',
        border: '3px solid #000',
        width: '130px',
        height: '130px',
        alignItems: 'center'
    }

}));

export default function ClientDetails(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.paper}>
                <Grid container spacing={4}>
                    <Grid item container direction="column">
                        <Grid>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={props.avatar} />
                            </ButtonBase>
                            <Typography gutterBottom variant="h4" style={{ cursor: 'pointer' }}>
                                Client ID: {props.id}
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                Company: {props.company}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Plan: {props.plan}
                            </Typography>
                            <Typography variant="subtitle1">API key: {props.apiKey}</Typography>
                            <Typography variant="subtitle2">Created At: {props.createdAt}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
