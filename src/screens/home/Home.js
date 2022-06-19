import React from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import {GridList,GridListTile,GridListTileBar} from "@material-ui/core";
import moviesData from "../../common/moviesData.js";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as Colors from 'material-ui-colors'; 
import Home1 from "./Home1";
const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: Colors.white,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  });


const Home=(props)=>{
    const { classes } = props;
    return(
        <div>
            <Header></Header>
            <div className="heading">
                <span>Upcoming Movies</span>
            </div>
            <div className={classes.root}>
                    <GridList className={classes.gridList} cols={6}>
                        {moviesData.map(tile => (
                        <GridListTile key={tile.id}>
                            <img src={tile.poster_url} alt={tile.title} className="images"/>
                            <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            />
                        </GridListTile>
                        ))}
                    </GridList>
            </div>
            <div className="flex-container">
                <div className="left">
                    <Home1></Home1>
                </div>
                <div className="right">
                   right
                </div>
            </div>
        </div>
    )
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(Home);