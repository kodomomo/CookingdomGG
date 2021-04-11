import React, { FC } from 'react';
import { Zoom, Paper, makeStyles } from '@material-ui/core';
import config from '../../config';

interface Props {
  image: string;
  name: string;
  index: number;
  width?: string;
  height?: string;
  onClick?: () => void;
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
    width: '100%',
    height: '100%',
    border: '0px',
    backgroundSize: '100%',
    boxShadow: '0px 0px white',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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

const ListItem: FC<Props> = ({ image, index, width, height, onClick }) => {
  const classes = useStyles();
  const itemStyle = {
    width: width ? width : '100px',
    height: height ? height : '100px',
  };
  const listClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) onClick();
  };
  return (
    <Zoom in={true} style={{ transitionDelay: `${index * 20}ms`, ...itemStyle }}>
      <Paper elevation={3} className={classes.paper} onClick={listClickHandler}>
        <div
          className={classes.svg}
          style={{ backgroundImage: `url(${config.imageUrl}${image})` }}
        />
      </Paper>
    </Zoom>
  );
};

export default ListItem;
