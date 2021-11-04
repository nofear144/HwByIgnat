import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


type SuperRangeType = {
    value: number[]
    setValue: (value: number[]) => void
}

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

export default function SuperRange(props: SuperRangeType) {
    const classes = useStyles();
    const handleChange = (event: any, newValue: number | number[]) => {
        if (typeof newValue  ===  "number") {
            props.setValue([newValue, props.value[1]]);
        }
    };

    return (
        <div className={classes.root}>

            <Grid container spacing={2}>

                <Grid item xs>
                    <Slider value={props.value[0]} onChange={handleChange} aria-labelledby="continuous-slider"/>
                </Grid>

            </Grid>

        </div>
    );
}










