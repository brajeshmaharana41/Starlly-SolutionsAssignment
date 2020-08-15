import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { DrawerField } from "./DrawerField";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  itemPlace: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  Button: {
    position: "absolute",
    right: "0",
    marginRight: "3.5rem",
    marginBottom: "2rem",
    marginTop: ".5rem",
    backgroundColor: "#b11d00",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  list: {
    width: 300,
    textAlign: "left",
    paddingLeft: "1rem",
  },
}));
interface Values {
  taskName: string;
  assignedTo: string;
  startDate: string;
  endDate: string;
  tags: any;
  followers: string;
  description: string;
  Action: any;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const DrawerForm: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        taskName: " ",
        assignedTo: " ",
        startDate: " ",
        endDate: "",
        tags: "",
        followers: "",
        description: "",
        Action: " ",
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values }) => (
        <List className={classes.list}>
          <Form>
            <div>
              <ListItem style={{ display: "block", alignItems: "center" }}>
                <div style={{ paddingLeft: "0.5rem" }}>Task Name</div>
                <form
                  className={classes.itemPlace}
                  noValidate
                  autoComplete="off"
                >
                  <Field
                    name="taskName"
                    placeholder="taskName"
                    component={DrawerField}
                  />
                </form>
              </ListItem>
            </div>
            <div>
              <ListItem style={{ display: "block", alignItems: "center" }}>
                <div style={{ paddingLeft: "0.5rem" }}>Assgined To</div>
                <form
                  className={classes.itemPlace}
                  noValidate
                  autoComplete="off"
                >
                  <Field
                    name="assignedTo"
                    placeholder="assignedTo"
                    component={DrawerField}
                    select
                  />
                </form>
              </ListItem>
            </div>
            <div>
              <ListItem style={{ display: "block", alignItems: "center" }}>
                <div style={{ paddingLeft: "0.5rem" }}>End Date</div>
                <form
                  className={classes.itemPlace}
                  noValidate
                  autoComplete="off"
                >
                  <Field
                    name="endDate"
                    placeholder="endDate"
                    component={DrawerField}
                    type="date"
                    format="MMM Do YYYY"
                  />
                </form>
              </ListItem>
            </div>
            <div>
              <ListItem style={{ display: "block", alignItems: "center" }}>
                <div style={{ paddingLeft: "0.5rem" }}>Tags</div>
                <form
                  className={classes.itemPlace}
                  noValidate
                  autoComplete="off"
                >
                  <Field
                    name="tags"
                    placeholder="tags"
                    component={DrawerField}
                    select
                  />
                </form>
              </ListItem>
            </div>
            <div>
              <ListItem style={{ display: "block", alignItems: "center" }}>
                <div style={{ paddingLeft: "0.5rem" }}>Followers</div>
                <form
                  className={classes.itemPlace}
                  noValidate
                  autoComplete="off"
                >
                  <Field
                    name="followers"
                    placeholder="followers"
                    component={DrawerField}
                    select
                  />
                </form>
              </ListItem>
            </div>
            <div>
              <ListItem style={{ display: "block", alignItems: "center" }}>
                <div style={{ paddingLeft: "0.5rem" }}>Description</div>
                <form
                  className={classes.itemPlace}
                  noValidate
                  autoComplete="off"
                >
                  <Field
                    name="description"
                    placeholder="description"
                    component={DrawerField}
                  />
                </form>
              </ListItem>
            </div>
            <Button className={classes.Button} type="submit">
              Submit
            </Button>
          </Form>
        </List>
      )}
    </Formik>
  );
};

export default DrawerForm;
