import React from "react";
import "./Assignment.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Popover from "@material-ui/core/Popover";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 450,
  },
  container: {
    maxWidth: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

interface Props {
  rows: Array<{
    id: string;
    taskName: string;
    assignedTo: string;
    startDate: any;
    endDate: string;
    tags: any;
    followers: string;
    description: string;
    Action: any;
  }>;
}

export default function Assignment({ rows }: Props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [textvalue, setTextvalue] = React.useState(" ");

  //Edit value stored but not added
  const handleChange = (e: any) => {
    console.log(textvalue);
    setTextvalue(e.target.value);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="Userlist">
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No&nbsp;</TableCell>
              <TableCell align="left">Task Name&nbsp;</TableCell>
              <TableCell align="right">Assigned To&nbsp;</TableCell>
              <TableCell align="right">Start Date&nbsp;</TableCell>
              <TableCell align="right">End Date&nbsp;</TableCell>
              <TableCell align="right">Tags&nbsp;</TableCell>
              <TableCell align="right">Followers&nbsp;</TableCell>
              <TableCell align="center">Description&nbsp;</TableCell>
              <TableCell align="right">Action&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.taskName}
                </TableCell>
                <TableCell align="right">{row.assignedTo}</TableCell>
                <TableCell align="right">
                  {moment().format("YYYY-MM-D")}
                </TableCell>
                <TableCell align="right">{row.endDate}</TableCell>
                <TableCell align="right">
                  <button>{row.tags}</button>
                </TableCell>
                <TableCell align="right">{row.followers}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">
                  <Button
                    aria-describedby={id}
                    type="button"
                    onClick={handleClick}
                  >
                    Edit
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <div>
                      <TextField
                        variant="outlined"
                        onChange={handleChange}
                      ></TextField>
                      <Button
                        type="submit"
                        onClick={handleClose}
                        style={{
                          height: "3.5rem",
                          backgroundColor: "#b11d00",
                          color: "white",
                        }}
                      >
                        Done
                      </Button>
                    </div>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
