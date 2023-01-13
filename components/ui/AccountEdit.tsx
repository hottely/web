import { Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import {
  alpha,
  createStyles,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import { Save } from "@material-ui/icons";
import { Fragment } from "react";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(1),
      fontSize: 12,
    },
  },
  input: {
    marginBottom: 20,
    borderRadius: 12,
    position: "relative",
    backgroundColor: "#FAFAFA",
    border: "1px solid #F2F4F7",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) =>
  createStyles({
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      opacity: "0.8",
      transition: ".3s ease",
      backgroundColor: "red",
    },
    editlabel: {
      fontWeight: "bold",
      fontSize: 18,
      color: "#ACACAC",
    },
    conversationItemSelected: {
      background: "#f3f6ff !important",
    },
    conversationItem: {
      background: "white",
    },
    sidebarList: {},
    avatar: {
      width: 130,
      height: 130,
      marginBottom: 30,
    },
    sidebarContent: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
    },
    editButtonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    actionButtons: {
      display: "flex",
      padding: "8px 16px",
      justifyContent: "center",
      width: "100%",
    },
    titleContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    blockButton: {
      borderColor: "#dd417a",
      margin: theme.spacing(1),
      color: "#dd417a",
      borderRadius: "10px",
      "&:hover": {
        color: "#dd417a",
        borderColor: "#dd417a",
        opacity: 0.96,
      },
      boxShadow: "none",
    },
    historyButton: {
      margin: theme.spacing(1),
      color: "white",
      borderRadius: "10px",
      "&:hover": {
        color: "white",
        opacity: 0.96,
      },
      boxShadow: "none",
    },
    closeButton: {
      margin: theme.spacing(1),
      borderRadius: "10px",
      "&:hover": {
        color: "#adadad",
        borderColor: "#adadad",
        opacity: 0.96,
      },
      borderColor: "#adadad",
      color: "#adadad",
      boxShadow: "none",
    },
    form: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
    },
    field: {
      marginBottom: 0,
    },
    divider: {
      width: "100%",
      marginBottom: 10,
    },
    sidebarHeader: {
      padding: "30px 30px 0px 30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    sidebarBody: {
      padding: "10px 30px 30px 30px",
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

const AccountEdit = ({ info }) => {
  const classes = useStyles({});

  return (
    <Fragment>
      <div className={classes.sidebarBody}>
        <div className={classes.form}>
          <InputLabel className={classes.editlabel} shrink>
            Name
          </InputLabel>
          <BootstrapInput disabled value={info.name || "-"} />

          <InputLabel className={classes.editlabel} shrink>
            Email
          </InputLabel>
          <BootstrapInput disabled value={info.email || "-"} />
        </div>
      </div>
      {false && (
        <div className={classes.actionButtons}>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.blockButton}
            startIcon={<Save />}
          >
            Save
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default AccountEdit;
