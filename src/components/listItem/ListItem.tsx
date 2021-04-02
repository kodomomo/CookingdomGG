import React, { FC } from 'react';
import { Zoom, Paper, makeStyles } from '@material-ui/core';
import config from '../../config';

interface Props {}

interface Props {
  image: string;
  name: string;
  index: number;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: 'auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    margin: '8px 7.5px',
    cursor: 'pointer',
    borderRadius: '16px',
  },
  svg: {
    width: 100,
    height: 100,
    border: '0px',
    boxShadow: '0px 0px white',
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  element: {
    margin: '8px auto',
  },
}));

const ListItem: FC<Props> = ({ image, index }) => {
  const classes = useStyles();
  return (
    <Zoom in={true} style={{ transitionDelay: `${index * 20}ms` }}>
      <Paper elevation={3} className={classes.paper}>
        <div
          className={classes.svg}
          style={{ backgroundImage: `url(${config.imageUrl}${image})`, backgroundSize: '100px' }}
        />
      </Paper>
    </Zoom>
  );
};

export default ListItem;
