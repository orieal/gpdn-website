"use client"
import React, { useState, useMemo } from 'react'
import { ArrowRightOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { MdOutlineEmail } from "react-icons/md";


function ProfessionalInfo({ onContinue }) {
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState('');
    const [formData, setFormData] = useState({
        profilePicture: "",
        countryOfPractice: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});
    const options = useMemo(() => countryList().getData(), []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.profilePicture) tempErrors.profilePicture = "Profile picture is required";
        if (!country) tempErrors.country = "Country is required";
        if (!phone) tempErrors.phone = "Phone number is required";
        if (!formData.password) {
            tempErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
        }
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = "Passwords do not match";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onContinue();
        }
    };

    return (
        <div className="w-full flex flex-col gap-5 justify-center items-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-200">
                <UserOutlined className="text-5xl text-[#00A99D]" />
            </div>
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-3xl font-semibold">Tell Us More About You</h1>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className='flex flex-col'>
                        <label className="text-sm font-semibold">Profile Picture</label>
                        <label className="text-xs font-semibold text-gray-400">This is where people will see your actual face</label>
                    </div>
                    <Input
                        size="large"
                        type="text"
                        name="profilePicture"
                        value={formData.profilePicture}
                        onChange={handleChange}
                        className="w-96 text-sm"
                        placeholder="Profile picture URL"
                        prefix={<UserOutlined className="text-lg mr-1" />}
                    />
                    {errors.profilePicture && <span className="text-red-500 text-xs">{errors.profilePicture}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">Country Or Practice</label>
                    <Input
                        size="large"
                        type="email"
                        className="w-96 text-sm"
                        placeholder="example@gmail.com"
                        prefix={<MdOutlineEmail className="text-lg mr-1" />}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">Country Of Practice</label>
                    <Select
                        options={options}
                        value={country}
                        onChange={changeHandler}
                        className="w-96"
                        classNamePrefix="select"
                        placeholder="Select your country"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">Phone number</label>
                    <PhoneInput
                    inputStyle={{width: '100%'}}
                    country={'us'}
                    value={phone}
                    onChange={phone => setPhone(phone)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">Password</label>
                    <Input
                        size="large"
                        type="password"
                        className="w-96 text-sm"
                        placeholder="password"
                        prefix={<LockOutlined  className="text-lg mr-1" />}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">Confirm Password</label>
                    <Input
                        size="large"
                        type="password"
                        className="w-96 text-sm"
                        placeholder="password"
                        prefix={<LockOutlined  className="text-lg mr-1" />}
                    />
                </div>
                <div 
                    onClick={handleSubmit}
                    className="w-full h-10 rounded-lg font-semibold bg-[#00A99D] flex items-center justify-center text-white cursor-pointer hover:bg-[#008F84] transition-colors"
                >
                    <h1 className="flex items-center gap-2">Continue <ArrowRightOutlined/></h1>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalInfo