import React, {useContext} from 'react';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {SlideContext} from '../Context/slideContext';

export default function DatePicker () {
  const {Slide, setStartDate, setEndDate, startDate, endDate} = useContext(SlideContext);

  return(
    <div className="datePickerContainer">
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="yyyy-MM-dd"
						dateFormat="yyyy-MM-dd"
						margin="normal"
						id="date-picker-inline"
						label="Start Date"
						value={startDate}
						onChange={(date) => setStartDate(date)}
						KeyboardButtonProps={{
							"aria-label": "change date",
						}}
					/>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="yyyy-MM-dd"
						dateFormat="yyyy-MM-dd"
						margin="normal"
						id="date-picker-inline"
						label="End Date"
						value={endDate}
						onChange={(date) => setEndDate(startDate() +30)}
						KeyboardButtonProps={{
							"aria-label": "change date",
						}}
					/>
				</MuiPickersUtilsProvider>
				</div>
  );
}