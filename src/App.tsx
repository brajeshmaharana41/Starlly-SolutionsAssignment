import React, { useState } from "react";
import "./App.css";
import nextId from "react-id-generator";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./heading/Header";
import Assignment from "./assignmentpage/Assignment";
import DrawerForm from "./drawerform/DrawerForm";
import Drawer from "@material-ui/core/Drawer";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Button: {
    position: "absolute",
    right: "0",
    marginRight: "5rem",
    backgroundColor: "#b11d00",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));

const App = () => {
  const [rows, setRows] = useState([
    {
      id: "0",
      taskName: "Finish Contributor List",
      assignedTo: "User Name",
      startDate: "",
      endDate: "2020-08-13",
      tags: "tags",
      followers: "User Name",
      description: "Finish Contributor List",
      Action: "",
    },
  ]);

  const [state, setState]: any = React.useState({
    right: false,
  });
  const classes = useStyles();
  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <div className="App">
      <Header />
      <h3>
        Table Data
        {["right"].map((anchor: any) => (
          <React.Fragment key={anchor}>
            <Button
              className={classes.Button}
              onClick={toggleDrawer(anchor, true)}
            >
              Create New Data
            </Button>

            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <DrawerForm
                onSubmit={(data) => {
                  setRows((currentRows) => [
                    ...currentRows,
                    {
                      id: nextId(" "),
                      ...data,
                    },
                  ]);
                }}
              />
            </Drawer>
          </React.Fragment>
        ))}
      </h3>
      <Assignment rows={rows} />
    </div>
  );
};

export default App;
