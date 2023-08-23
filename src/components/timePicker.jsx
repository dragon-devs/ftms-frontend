import * as React from 'react';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {renderTimeViewClock} from '@mui/x-date-pickers/timeViewRenderers';

export default function TimePickerViewRenderers() {
    return (
        <div className=" ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker

                    viewRenderers={{
                        hours: renderTimeViewClock,
                        minutes: renderTimeViewClock,
                        seconds: renderTimeViewClock,
                    }}
                />
            </LocalizationProvider>

        </div>
    );
}