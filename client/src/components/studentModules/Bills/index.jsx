import { useState } from "react";
import {
  //
  IconButton,
  InputAdornment,
  Typography,
  TextField,
  Autocomplete,
  Stack,
  Button,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Search } from "@mui/icons-material";
import Table from "./List";
import { classes, Root } from "./styles";
import moment from "moment";

// *Later to be fetched from DB
import { bills } from "../../../data/bills";

const Bills = ({ user }) => {
  const userBills = Object.keys(bills)
    .filter((billNo) => bills[billNo].enrollment === user.enrollment)
    .reduce(
      (bill, billNo) => Object.assign(bill, { [billNo]: bills[billNo] }),
      {}
    );

  const [dates, setDates] = useState({
    startDate: moment(),
    endDate: moment(),
  });

  const handleChange = (name, value) => {
    if (
      (name === "endDate" && value < dates.startDate) ||
      (name === "startDate" && value > dates.endDate)
    ) {
      setDates({ startDate: value, endDate: value });
    } else {
      setDates({ ...dates, [name]: value });
    }
  };

  return (
    <Root className={classes.root}>
      <div className={classes.header}>
        <Typography textAlign="center" variant="h5">
          Payment List
        </Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Stack
            direction={"row"}
            spacing={3}
            className={classes.datePickersContainer}
          >
            <DesktopDatePicker
              name="startDate"
              label="Start Date"
              inputFormat="DD/MM/YYYY"
              value={dates.startDate}
              onChange={(value) => handleChange("startDate", value)}
              renderInput={(params) => (
                <TextField {...params} name="startDate" />
              )}
            />
            <DesktopDatePicker
              name="endDate"
              label="End Date"
              inputFormat="DD/MM/YYYY"
              value={dates.endDate}
              onChange={(value) => handleChange("endDate", value)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <Autocomplete
          freeSolo
          className={classes.searchInput}
          id="nbills"
          disableClearable
          options={[].map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Bills"
              InputProps={{
                ...params.InputProps,
                type: "search",
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </div>
      <Table
        startDate={dates.startDate}
        endDate={dates.endDate}
        bills={userBills}
      />
      <Button
        className={classes.resetDate}
        variant="contained"
        disableElevation
        startIcon={<RestartAltIcon />}
        onClick={() => setDates({ startDate: moment(), endDate: moment() })}
      >
        Reset Dates
      </Button>
    </Root>
  );
};

export default Bills;
