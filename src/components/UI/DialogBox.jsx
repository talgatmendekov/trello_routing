import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export  function DialogBox(props) {
  

  return (
      <Dialog
        open={props.showPrompt}
        onClose={props.onCancel}
      >
        <DialogTitle>{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This page is asking you to confirm that you want to leave - data you have entered may not be saved
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancel}>Stay on Page</Button>
          <Button onClick={props.onConfirm}>Leave Page</Button>
        </DialogActions>
      </Dialog>
  );
}
