import {GridList, GridListTileBar,GridListTile } from '@material-ui/core';
import React from 'react';
import moviesData from "../../common/moviesData.js";
import "./Home1.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function Home1(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridList} col={4}>
        {moviesData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.poster_url} alt={tile.title} className="images" />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.release_date}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Home1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home1);