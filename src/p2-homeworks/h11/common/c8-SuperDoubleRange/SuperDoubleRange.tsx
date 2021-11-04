import React from 'react';
import {ChangeEvent} from 'react';
import s from "../c7-SuperRange/SuperRange.module.css"
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number) => void
    value?: number[]
    setValue: (value: number[]) => void

    // min, max, step, disable, ...
}

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

function valuetext(value: number) {
    return `${value}°C`;
}

export const SuperDoubleRange = (props:SuperDoubleRangePropsType) => {
    const classes = useStyles();

    const handleChange = (event: any, newValue: number | number[]) => {
        props.setValue(newValue as number[]);
    };

    return (
        <div className={classes.root}>
            <Slider
                value={props.value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}



