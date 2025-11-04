import React from "react";

interface InputFieldProps {

    label: string; // The text shown above the input
    name: string; // The input's name attribute
    type?: string; // Optional: text, email, number, etc.
    value: string; // Current value of the input
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle changes
    placeholder?: string; // Optional placeholder text
    required?: boolean; // Optional: is this field required?
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    name,
    type = "text", // Default type is text
    value,
    onChange,
    placeholder,
    required = false,
}) => {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-brandYellow"
            />
        </div>
    );
};

export default InputField;