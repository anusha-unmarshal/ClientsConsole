import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        marginLeft: '250px',
        marginRight: '250px'
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        borderRadius: '50%',
        border: '3px solid #000',
        width: '60px',
        height: '60px',
    },
    remove: {
        color: '#34D399',
        position: 'relative',
        padding: '10px',
        border: "none",
        width: 'auto',
        height: 'auto',
        fontSize: 'large',
        cursor: 'pointer',
        outline: 'none',
        backgroundColor: 'white',
        float: 'right',
        marginRight: '20px'
    }
}));

export default function Client(props) {
    const classes = useStyles();

    function selectClient() {
        props.OnSelect(props.id);
    }
    function deleteRecord(){
            props.Ondelete(props.id);
            console.log(props.id);
        }
    return (
        <div className={classes.root}>
            <Paper>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={props.avatar} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={2} sm container>
                        <Grid item xs container direction="column">
                            <Grid>
                                <p onClick={selectClient} style={{ cursor: 'pointer' }}>
                                    {props.name}
                                </p>
                                <Typography variant="body2" gutterBottom>
                                    Company: {props.company}
                                </Typography>
                                <Typography variant="body2">
                                <button className={classes.remove} onClick={deleteRecord}>
                                   <DeleteIcon />
                                </button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
