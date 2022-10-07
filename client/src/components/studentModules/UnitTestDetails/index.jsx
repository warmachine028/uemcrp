import { classes, Root } from "./styles";
import {
  FormControl,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Grid,
  Stack
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { students } from "../../../data/users";
import result from "../../../data/unittest";
import Table from "./List";

const UnitTestDetails = () => {
  const navigate = useNavigate();
  const [semester, setSemester] = useState(1);
  const [unittest, setUnittest] = useState(1);
  const [display, setDisplay] = useState(false);

  console.log(result[11]);
  console.log(students[0]);

  return (
    <Root className={classes.root}>
      <div className={classes.header}>
        <Typography textAlign="center" variant="h5">
          Unit Test Marksheet
        </Typography>
        <div className={classes.formControlGroup}>
          <Stack
            direction={"row"}
            spacing={3}
            className={classes.datePickersContainer}
          >
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Semester</InputLabel>
              <Select
                label="Semeter"
                value={semester}
                onChange={e => setSemester(e.target.value)}
              >
                {[...Array(students[0].semester - 1).keys()].map(i =>
                  <MenuItem key={i} value={i + 1}>{`Semester ${i +
                    1}`}</MenuItem>
                )}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Test No.</InputLabel>
              <Select
                label="Unit Test"
                value={unittest}
                onChange={e => setUnittest(e.target.value)}
              >
                <MenuItem value={1}>Class Test 1</MenuItem>
                <MenuItem value={2}>Class Test 2</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </div>
      </div>

      <Paper style={{ padding: 20 }}>
        <Grid container>
          <Grid item xs={12} lg={6} className={classes.grid}>
            <Typography fontSize="17px" gutterBottom>
              <strong>Student Enrollment No.:</strong> {students[0].enrollment}
            </Typography>
            <Typography fontSize="17px" gutterBottom>
              <strong>University Registration No.:</strong>{" "}
              {students[0].registration}
            </Typography>
            <Typography fontSize="17px" gutterBottom>
              <strong>Degree:</strong> {students[0].course}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} className={classes.grid}>
            <Typography fontSize="17px" gutterBottom>
              <strong>Name:</strong> {students[0].name}
            </Typography>
            <Typography fontSize="17px" gutterBottom>
              <strong>University Roll No.:</strong> {students[0].universityroll}
            </Typography>
            <Typography fontSize="17px" gutterBottom>
              <strong>Stream:</strong> {students[0].stream}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <br />
      {result[semester + "" + unittest]
        ? <Table
            sem={semester}
            ut={unittest}
            result={result[semester + "" + unittest]}
          />
        : <h3>No Result Found</h3>}
    </Root>
  );
};

export default UnitTestDetails;
