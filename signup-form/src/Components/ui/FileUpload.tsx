import React from 'react';

interface FileUploadProps {
    label: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    accept?: string;
    required?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
    label,
    name,
    onChange,
    accept,
    required = false,
}) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
                id={name}
                name={name}
                type="file"
                accept={accept}
                onChange={onChange}
                required={required}
                className="hidden"
            />
            <label
                htmlFor={name}
                className="cursor-pointer bg-brandBlue text-white px-4 py-2 rounded hover:bg-brandYellow transition"
            >
                Upload {label}
            </label>
        </div>
    );
};

export default FileUpload;