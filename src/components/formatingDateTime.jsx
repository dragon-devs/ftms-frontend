import React from 'react';

const formatDate = (dateTimeStr) => {
    const dateObj = new Date(dateTimeStr);
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('en-US', {month: 'short'}).toUpperCase();

    let timeOfDay = '';
    let hour12 = hour;
    let ampm = 'AM';

    if (hour >= 12) {
        ampm = 'PM';
        if (hour > 12) {
            hour12 = hour - 12;
        }
    } else if (hour === 0) {
        hour12 = 12;
    }

    if (hour >= 5 && hour < 12) {
        timeOfDay = 'Morning';
    } else if (hour >= 12 && hour < 17) {
        timeOfDay = 'Afternoon';
    } else if (hour >= 17 && hour < 21) {
        timeOfDay = 'Evening';
    } else {
        timeOfDay = 'Night';
    }

    // if you want AM or PM with it.
    // return { time: `${hour12}:${minute < 10 ? '0' + minute : minute} ${ampm}`, timeOfDay, day, month };
    return {
        time: `${hour12 < 10 ? '0' + hour12 : hour12}:${minute < 10 ? '0' + minute : minute}`,
        timeOfDay,
        day: `${day < 10 ? '0' + day : day}`,
        month
    };
};

const DateTimeFormating = ({dateTimeStr}) => {
    const {time, timeOfDay, day, month} = formatDate(dateTimeStr);

    return (
        <div className="grid place-items-center">
            <div className="text-[12px] font-bold text-slate-400">{`${timeOfDay.toUpperCase()} `}</div>
            <div className="text-rose-500 text-xl font-black">{`${time}`}</div>
            <div className="text-slate-400 text-[14px] font-semibold">{`${day} ${month}`}</div>
        </div>
    );
};

export default DateTimeFormating;
