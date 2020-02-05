import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useDispatch, useSelector } from "react-redux";
import { Fetch } from "../actions/Apicalls";
import { useStyles } from "../styles/ProfileItemsStyled";

const ProfileItems = props => {
  const classes = useStyles();
  //FIX THIS THING WHEN YOU CAN

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={5}>
          <Grid item>
            <img className={classes.img} alt='complex' src={props.item.imgs} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  {props.item.item_name}
                  {console.log(props.item, "inside item")}
                </Typography>
                <Typography variant='body2' gutterBottom>
                  {props.item.item_name}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: "pointer" }}>
                  Edit
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: "pointer" }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProfileItems;
