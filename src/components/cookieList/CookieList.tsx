import React, { FC, useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';

interface Props {}

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    paper: {
        margin: '8px 7.5px',
        cursor: 'pointer'
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
    element: {
        margin: '8px auto'
    }
}));

const CookieList: FC = () => {
    const classes = useStyles();

    const getList = () => {
        let list = [];
        for (let i = 0; i < 35; i++) {
            list.push(
                <Zoom in={true} style={{ transitionDelay: `${i * 20}ms` }}>
                    <Paper elevation={3} className={classes.paper}>
                        <svg className={classes.svg}></svg>
                    </Paper>
                </Zoom>
            );
        }
        return list;
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                {getList()}
            </div>
        </div>
    );
};

export default CookieList;