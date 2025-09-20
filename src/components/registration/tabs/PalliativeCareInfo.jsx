"use client";
import React, { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Input, Radio, Checkbox, Select } from "antd";
import Link from "next/link";

function PalliativeCareInfo({ onContinue }) {
  const [formData, setFormData] = useState({
    bio: "",
    hasFormalTrainingInPalliativeCare: null,
    affiliatedPalliativeAssociations: "",
    specialInterestsInPalliativeCare: [],
    specialInterestsOther: "",
    confirmedMedicalGraduate: false,
    agreedToGuidelines: false,
  });
  const [errors, setErrors] = useState({});

  const specialInterestsOptions = [
    { value: "Adult Palliative Care", label: "Adult Palliative Care" },
    {
      value: "Paediatric Palliative Care",
      label: "Paediatric Palliative Care",
    },
    { value: "Neuro-palliative care", label: "Neuro-palliative care" },
    { value: "Pulmonary palliative care", label: "Pulmonary palliative care" },
    {
      value: "Ethics / Legal in Palliative Care",
      label: "Ethics / Legal in Palliative Care",
    },
    {
      value: "Research in Palliative Care",
      label: "Research in Palliative Care",
    },
    { value: "Other", label: "Other (please specify)" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      hasFormalTrainingInPalliativeCare: e.target.value,
    }));
  };

  const handleCheckboxChange = (name) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.checked,
    }));
  };

  const handleSpecialInterestsChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      specialInterestsInPalliativeCare: value,
      specialInterestsOther: value.includes("Other")
        ? prev.specialInterestsOther
        : "",
    }));
  };

  const handleOtherSpecialInterestsChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      specialInterestsOther: e.target.value,
    }));
  };

  const validateForm = () => {
    let tempErrors = {};

    // Only validate the required agreement checkboxes
    if (!formData.confirmedMedicalGraduate) {
      tempErrors.confirmedMedicalGraduate =
        "You must confirm that you are a medical graduate";
    }
    if (!formData.agreedToGuidelines) {
      tempErrors.agreedToGuidelines = "You must agree to GPDN guidelines";
    }

    // Optional validation: if "Other" is selected for special interests, require the custom input
    if (
      formData.specialInterestsInPalliativeCare.includes("Other") &&
      !formData.specialInterestsOther.trim()
    ) {
      tempErrors.specialInterestsOther = "Please specify your special interest";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    // Validate only the required agreement checkboxes
    if (!validateForm()) {
      return;
    }

    // Process special interests array - replace "Other" with the custom value if present
    let processedSpecialInterests = [
      ...formData.specialInterestsInPalliativeCare,
    ];
    if (
      processedSpecialInterests.includes("Other") &&
      formData.specialInterestsOther.trim()
    ) {
      // Remove "Other" and add the custom value
      processedSpecialInterests = processedSpecialInterests.filter(
        (item) => item !== "Other"
      );
      processedSpecialInterests.push(formData.specialInterestsOther.trim());
    }

    const dataToSend = {};

    // Only add fields that have values (all fields are now optional except checkboxes)
    if (formData.bio && formData.bio.trim()) {
      dataToSend.bio = formData.bio;
    }

    if (formData.hasFormalTrainingInPalliativeCare !== null) {
      dataToSend.hasFormalTrainingInPalliativeCare =
        formData.hasFormalTrainingInPalliativeCare;
    }

    if (
      formData.affiliatedPalliativeAssociations &&
      formData.affiliatedPalliativeAssociations.trim()
    ) {
      dataToSend.affiliatedPalliativeAssociations =
        formData.affiliatedPalliativeAssociations;
    }

    if (processedSpecialInterests && processedSpecialInterests.length > 0) {
      dataToSend.specialInterestsInPalliativeCare = processedSpecialInterests;
    }

    console.log("=== PALLIATIVE CARE INFO SUBMIT ===");
    console.log("Data being sent from PalliativeCareInfo:", dataToSend);

    onContinue(dataToSend);
  };

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        {/* <h1 className="text-3xl font-semibold">Palliative Care Information</h1> */}
        {/* <p className="text-gray-500">
          Tell us about your experience in palliative care
        </p> */}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">
            Do you have formal training in palliative care?
          </label>
          <Radio.Group
            onChange={handleRadioChange}
            value={formData.hasFormalTrainingInPalliativeCare}
            className="flex flex-col gap-2"
          >
            <Radio className=" hidden md:flex" value={true}>
              Yes
            </Radio>
            <Radio className=" hidden md:flex" value={false}>
              No
            </Radio>
            <div className=" flex items-center gap-2 md:hidden">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </div>
          </Radio.Group>
          {errors.hasFormalTrainingInPalliativeCare && (
            <span className="text-red-500 text-xs">
              {errors.hasFormalTrainingInPalliativeCare}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">
            Affiliated Palliative Associations
          </label>
          <Input
            size="large"
            name="affiliatedPalliativeAssociations"
            value={formData.affiliatedPalliativeAssociations}
            onChange={handleChange}
            className="w-96 text-sm"
            placeholder="e.g., Indian Association of Palliative Care"
          />
          {errors.affiliatedPalliativeAssociations && (
            <span className="text-red-500 text-xs">
              {errors.affiliatedPalliativeAssociations}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">
            Special Interests in Palliative Care
          </label>
          <Select
            mode="multiple"
            size="large"
            value={formData.specialInterestsInPalliativeCare}
            onChange={handleSpecialInterestsChange}
            className="w-96"
            placeholder="Select your special interests"
            options={specialInterestsOptions}
            maxTagCount="responsive"
          />
          {errors.specialInterestsInPalliativeCare && (
            <span className="text-red-500 text-xs">
              {errors.specialInterestsInPalliativeCare}
            </span>
          )}

          {formData.specialInterestsInPalliativeCare.includes("Other") && (
            <div className="flex flex-col gap-2 mt-2">
              <Input
                size="large"
                name="specialInterestsOther"
                value={formData.specialInterestsOther}
                onChange={handleOtherSpecialInterestsChange}
                className="w-96"
                placeholder="Please specify your other special interest"
              />
              {errors.specialInterestsOther && (
                <span className="text-red-500 text-xs">
                  {errors.specialInterestsOther}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Bio</label>
          <Input.TextArea
            size="large"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-96"
            placeholder="Share your passion and experience in palliative care"
            rows={4}
          />
          {errors.bio && (
            <span className="text-red-500 text-xs">{errors.bio}</span>
          )}
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <Checkbox
            checked={formData.confirmedMedicalGraduate}
            onChange={handleCheckboxChange("confirmedMedicalGraduate")}
          >
            <span className="text-sm">
              I confirm that I am a medical graduate and all information
              provided is accurate.
            </span>
          </Checkbox>
          {errors.confirmedMedicalGraduate && (
            <span className="text-red-500 text-xs">
              {errors.confirmedMedicalGraduate}
            </span>
          )}

          <Checkbox
            checked={formData.agreedToGuidelines}
            onChange={handleCheckboxChange("agreedToGuidelines")}
          >
            <span className="text-sm">
              I agree to abide by the guidelines of the Global Palliative
              Doctors Network (GPDN).
            </span>
          </Checkbox>
          {errors.agreedToGuidelines && (
            <span className="text-red-500 text-xs">
              {errors.agreedToGuidelines}
            </span>
          )}
        </div>

        <div
          onClick={handleSubmit}
          className="w-full h-10 rounded-lg font-semibold bg-[#00A99D] flex items-center justify-center text-white cursor-pointer hover:bg-[#008F84] transition-colors mt-4"
        >
          <h1 className="flex items-center gap-2">
            Submit Registration <ArrowRightOutlined />
          </h1>
        </div>
        <Link href="/">
          <button className="w-full  h-10 rounded-lg font-semibold bg-white flex items-center justify-center text-black border border-gray cursor-pointer hover:bg-[#008F84] hover:text-white transition-colors">
            <h1 className="flex items-center gap-2 cursor-pointer">Cancel</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PalliativeCareInfo;
