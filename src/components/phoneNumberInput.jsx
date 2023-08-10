import React, {useState} from 'react';
import PhoneInput from 'react-phone-input-2';

const PhoneNumberValidation = ({phoneNumber, onPhoneNumberChange}) => { // Receive phoneNumber and onPhoneNumberChange as props
    const [valid, setValid] = useState(true);

    const handleChange = (value) => {
        onPhoneNumberChange(value); // Call the onPhoneNumberChange function to update the phone_number value in ClubForm
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
        return phoneNumberPattern.test(phoneNumber);
    };

    return (
        <div>
            <PhoneInput
                placeholder="+92 300-000000"
                inputClass="p-1 placeholder text-sm w-[19.5rem]  font-semibold rounded-lg text-slate-300 bg-slate-700  text-center"
                specialLabel=""
                value={phoneNumber}
                onChange={handleChange}
                inputProps={{
                    required: true,
                }}

            />
            {/*{!valid && (*/}
            {/*    <p>Please enter a valid phone number.</p>*/}
            {/*)}*/}
        </div>
    );
};

export default PhoneNumberValidation;
