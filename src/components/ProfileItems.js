import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "../styles/ProfileItemsStyled";
import SaveIcon from "@material-ui/icons/Save";
import { IconButton } from "@material-ui/core";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@bootstrap-styled/v4";
import Alert from "@bootstrap-styled/v4/lib/Alert";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "../actions/Apicalls";
import { Link } from "react-router-dom";
import { EDIT_CHANGE } from "../reducers";

const ProfileItems = props => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentuser = useSelector(state => state.currentuser);
  const [modal, setModal] = useState(false);
  //FIX THIS THING WHEN YOU CAN
  const toggle = () => setModal(!modal);

  return (
    <div className={classes.root}>
      <Modal isOpen={modal} toggle={toggle} backdrop={true}>
        <ModalHeader toggle={toggle}>
          <Alert color='danger' style={{ textAlign: "center" }}>
            ARE YOU SURE YOU WANT TO "DELETE" {props.item.item_name}
          </Alert>
        </ModalHeader>
        <ModalBody>
          <img className='savethesmurf' alt='' />
        </ModalBody>
        <ModalFooter>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => dispatch(Delete(props.item.id)) & toggle}>
            Delete {props.item.item_name}
          </Button>
          <Button variant='outlined' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Paper elevation={5} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <img className={classes.img} alt='complex' src={props.item.imgs} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='h4'>
                  {props.item.item_name}
                  {console.log(props.item, "inside item")}
                </Typography>

                <Typography variant='h6' color='textSecondary'>
                  {props.item.description}
                </Typography>
              </Grid>
              <Grid item>
                <Link
                  to={{
                    pathname: `/equipmentupdate/${props.item.id}`,
                    state: { itemid: props.item.id }
                  }}>
                  <Button
                    onClick={() =>
                      dispatch({
                        type: EDIT_CHANGE,
                        item_name: props.item.item_name,
                        description: props.item.description,
                        availability: props.item.availability,
                        daily_rate: props.item.daily_rate,
                        condition: props.item.condition,
                        location: props.item.location,
                        img: props.item.imgs
                      })
                    }
                    variant='contained'
                    color='primary'
                    size='small'
                    startIcon={<SaveIcon />}>
                    EDIT
                  </Button>
                </Link>
                &nbsp; &nbsp;
                <IconButton
                  onClick={toggle}
                  color='secondary'
                  aria-label='delete'>
                  <DeleteIcon fontSize='large' />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='h6'>
                Daily Rate : ${props.item.daily_rate}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProfileItems;
