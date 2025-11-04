import React from 'react';

interface SelectFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    required?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
    label,
    name,
    value,
    onChange,
    options,
    required = false,
}) => {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-brandYellow"
            >
                <option value="">Select {label}</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;