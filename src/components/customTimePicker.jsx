import React, {useState} from 'react';

const CustomTimePicker = () => {
    const [selectedTime, setSelectedTime] = useState('');

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    return (
        <div className="flex flex-col items-center">
            <label className="text-gray-600 font-medium mb-2">Select Time:</label>
            <input
                type="time"
                value={selectedTime}
                onChange={handleTimeChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            {selectedTime && (
                <p className="mt-2 text-gray-500">
                    You selected: {selectedTime}
                </p>
            )}
        </div>
    );
};

export default CustomTimePicker;
