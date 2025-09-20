"use client";

import React, { useState, useEffect } from "react";
import {
  fetchUserById,
  editUserProfile,
  requestActivationLink,
} from "../../api/user";
import Image from "next/image";
import { Input, message, Select, Alert, Button, Tooltip } from "antd";
import logo from "../../app/assets/registation/logo.png";
import { MdClose, MdDashboard, MdMenu } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";
import { PiBuildings } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import UserResources from "./UserResources";
import UserDiscussions from "./UserDiscussions";
import UserPalliativeUnits from "./UserPalliativeUnits";
import { usePathname } from "next/navigation"; // Add this import

const defaultAvatar = `data:image/svg+xml,${encodeURIComponent(
  '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="#E5E7EB"/><path d="M40 42C46.6274 42 52 36.6274 52 30C52 23.3726 46.6274 18 40 18C33.3726 18 28 23.3726 28 30C28 36.6274 33.3726 42 40 42ZM56 60C56 52.268 48.837 46 40 46C31.163 46 24 52.268 24 60V62H56V60Z" fill="#9CA3AF"/></svg>'
)}`;

// Helper function to handle API responses
const handleResponse = async (response) => {
  console.log("Response status:", response.status);

  try {
    const data = await response.json();
    console.log("Response data:", data);

    if (!response.ok || !data.success) {
      return {
        success: false,
        message: data.message || "Failed to update profile",
        error: data.error || "Unknown error",
      };
    }

    return {
      success: true,
      message: "Profile updated successfully",
      data: data.data, // The API returns user data in the 'data' property
    };
  } catch (parseError) {
    console.error("Error parsing response:", parseError);
    return {
      success: false,
      message: `Error parsing response: ${parseError.message}`,
      error: parseError,
    };
  }
};

import { updateUserProfileWithFile } from "../../api/user";
import Link from "next/link";
import { LogOut } from "lucide-react";
import Sidebar from "../Sidebar";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Account");
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [updating, setUpdating] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    countryOfPractice: "",
    bio: "",
    medicalQualification: "",
    yearOfGraduation: "",
    medicalRegistrationAuthority: "",
    medicalRegistrationNumber: "",
    hasFormalTrainingInPalliativeCare: false,
    affiliatedPalliativeAssociations: "",
    specialInterestsInPalliativeCare: [],
  });

  // State for "Other" specification
  const [otherSpecialInterest, setOtherSpecialInterest] = useState("");

  const tabs = ["Account", "Discussions", "Resources", "Palliative Units"];

  // Special interests options
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

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          message.error("User not authenticated");
          return;
        }

        const response = await fetchUserById(userId);
        console.log("API Response:", response);
        if (response?.data?.success && response.data.data) {
          setUserProfile(response.data.data);
          // Initialize form data with user profile data
          setFormData({
            fullName: response.data.data.fullName || "",
            phoneNumber: response.data.data.phoneNumber || "",
            email: response.data.data.email || "",
            countryOfPractice: response.data.data.countryOfPractice || "",
            bio: response.data.data.bio || "",
            medicalQualification: response.data.data.medicalQualification || "",
            yearOfGraduation: response.data.data.yearOfGraduation || "",
            medicalRegistrationAuthority:
              response.data.data.medicalRegistrationAuthority || "",
            medicalRegistrationNumber:
              response.data.data.medicalRegistrationNumber || "",
            hasFormalTrainingInPalliativeCare:
              response.data.data.hasFormalTrainingInPalliativeCare || false,
            affiliatedPalliativeAssociations:
              response.data.data.affiliatedPalliativeAssociations || "",
            specialInterestsInPalliativeCare: Array.isArray(
              response.data.data.specialInterestsInPalliativeCare
            )
              ? response.data.data.specialInterestsInPalliativeCare.filter(
                  (interest) =>
                    specialInterestsOptions.some(
                      (option) => option.value === interest
                    )
                )
              : [],
          });

          // Extract "Other" values
          if (
            Array.isArray(response.data.data.specialInterestsInPalliativeCare)
          ) {
            const otherValues =
              response.data.data.specialInterestsInPalliativeCare.filter(
                (interest) =>
                  !specialInterestsOptions.some(
                    (option) => option.value === interest
                  )
              );
            if (otherValues.length > 0) {
              setOtherSpecialInterest(otherValues.join(", "));
              // Add "Other" to the selected values if there are custom interests
              setFormData((prev) => ({
                ...prev,
                specialInterestsInPalliativeCare: [
                  ...prev.specialInterestsInPalliativeCare,
                  "Other",
                ],
              }));
            }
          }

          console.log("Setting user profile:", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        message.error("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear "Other" specification if "Other" is deselected
    if (
      field === "specialInterestsInPalliativeCare" &&
      !value.includes("Other")
    ) {
      setOtherSpecialInterest("");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original user profile data
    if (userProfile) {
      setFormData({
        fullName: userProfile.fullName || "",
        phoneNumber: userProfile.phoneNumber || "",
        email: userProfile.email || "",
        countryOfPractice: userProfile.countryOfPractice || "",
        bio: userProfile.bio || "",
        medicalQualification: userProfile.medicalQualification || "",
        yearOfGraduation: userProfile.yearOfGraduation || "",
        medicalRegistrationAuthority:
          userProfile.medicalRegistrationAuthority || "",
        medicalRegistrationNumber: userProfile.medicalRegistrationNumber || "",
        hasFormalTrainingInPalliativeCare:
          userProfile.hasFormalTrainingInPalliativeCare || false,
        affiliatedPalliativeAssociations:
          userProfile.affiliatedPalliativeAssociations || "",
        specialInterestsInPalliativeCare: Array.isArray(
          userProfile.specialInterestsInPalliativeCare
        )
          ? userProfile.specialInterestsInPalliativeCare.filter((interest) =>
              specialInterestsOptions.some(
                (option) => option.value === interest
              )
            )
          : [],
      });

      // Reset "Other" values
      if (Array.isArray(userProfile.specialInterestsInPalliativeCare)) {
        const otherValues = userProfile.specialInterestsInPalliativeCare.filter(
          (interest) =>
            !specialInterestsOptions.some((option) => option.value === interest)
        );
        setOtherSpecialInterest(
          otherValues.length > 0 ? otherValues.join(", ") : ""
        );
      } else {
        setOtherSpecialInterest("");
      }
    }
  };

  const [profileImage, setProfileImage] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleUpdate = async () => {
    try {
      setUpdating(true);
      const userId = localStorage.getItem("userId");
      if (!userId) {
        message.error("User not authenticated");
        return;
      }

      // Create FormData and append all required fields
      const formDataToSend = new FormData();

      // Always append userId
      formDataToSend.append("_id", userId);

      // Append all fields from formData (these are the edited values)
      formDataToSend.append("fullName", formData.fullName || "");
      formDataToSend.append("email", formData.email || "");
      formDataToSend.append("phoneNumber", formData.phoneNumber || "");
      formDataToSend.append("bio", formData.bio || "");
      formDataToSend.append(
        "countryOfPractice",
        formData.countryOfPractice || ""
      );
      formDataToSend.append(
        "medicalQualification",
        formData.medicalQualification || ""
      );
      formDataToSend.append(
        "yearOfGraduation",
        formData.yearOfGraduation ? formData.yearOfGraduation.toString() : ""
      );

      // Convert boolean to string for FormData
      formDataToSend.append(
        "hasFormalTrainingInPalliativeCare",
        formData.hasFormalTrainingInPalliativeCare.toString()
      );

      formDataToSend.append(
        "medicalRegistrationAuthority",
        formData.medicalRegistrationAuthority || ""
      );
      formDataToSend.append(
        "medicalRegistrationNumber",
        formData.medicalRegistrationNumber || ""
      );
      formDataToSend.append(
        "affiliatedPalliativeAssociations",
        formData.affiliatedPalliativeAssociations || ""
      );
      // Handle specialInterestsInPalliativeCare as array
      let interestsArray = [
        ...(formData.specialInterestsInPalliativeCare || []),
      ];

      // If "Other" is selected and there's a custom specification, replace "Other" with the custom values
      if (interestsArray.includes("Other") && otherSpecialInterest.trim()) {
        // Remove "Other" from the array
        interestsArray = interestsArray.filter(
          (interest) => interest !== "Other"
        );
        // Add custom interests
        const customInterests = otherSpecialInterest
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item);
        interestsArray = [...interestsArray, ...customInterests];
      } else if (
        interestsArray.includes("Other") &&
        !otherSpecialInterest.trim()
      ) {
        // Remove "Other" if no custom specification is provided
        interestsArray = interestsArray.filter(
          (interest) => interest !== "Other"
        );
      }

      formDataToSend.append(
        "specialInterestsInPalliativeCare",
        JSON.stringify(interestsArray)
      );

      // Append additional fields from userProfile that might be required by backend
      if (userProfile) {
        // Add any other fields that exist in userProfile but not in formData
        if (userProfile.role !== undefined && userProfile.role !== null) {
          formDataToSend.append("role", userProfile.role);
        }
        if (userProfile.registrationStatus) {
          formDataToSend.append(
            "registrationStatus",
            userProfile.registrationStatus
          );
        }
      }

      // Handle file - only append if there's a new image
      if (profileImage) {
        formDataToSend.append("file", profileImage);
      }

      // Debug: Log FormData contents (this is the correct way to see FormData contents)
      console.log("FormData contents:");
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await fetch(
        "https://api.thegpdn.org/api/user/EditUser",
        {
          method: "PATCH",
          body: formDataToSend,
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (data.success) {
        message.success("Profile updated successfully!");
        setIsEditing(false);
        setProfileImage(null);

        // Update the userProfile state with the new data from response
        if (data.data) {
          setUserProfile(data.data);
          // Also update formData to reflect the new values
          setFormData({
            fullName: data.data.fullName || "",
            phoneNumber: data.data.phoneNumber || "",
            email: data.data.email || "",
            countryOfPractice: data.data.countryOfPractice || "",
            bio: data.data.bio || "",
            medicalQualification: data.data.medicalQualification || "",
            yearOfGraduation: data.data.yearOfGraduation || "",
            medicalRegistrationAuthority:
              data.data.medicalRegistrationAuthority || "",
            medicalRegistrationNumber:
              data.data.medicalRegistrationNumber || "",
            hasFormalTrainingInPalliativeCare:
              data.data.hasFormalTrainingInPalliativeCare || false,
            affiliatedPalliativeAssociations:
              data.data.affiliatedPalliativeAssociations || "",
            specialInterestsInPalliativeCare: Array.isArray(
              data.data.specialInterestsInPalliativeCare
            )
              ? data.data.specialInterestsInPalliativeCare.filter((interest) =>
                  specialInterestsOptions.some(
                    (option) => option.value === interest
                  )
                )
              : [],
          });

          // Update "Other" values after successful save
          if (Array.isArray(data.data.specialInterestsInPalliativeCare)) {
            const otherValues =
              data.data.specialInterestsInPalliativeCare.filter(
                (interest) =>
                  !specialInterestsOptions.some(
                    (option) => option.value === interest
                  )
              );
            setOtherSpecialInterest(
              otherValues.length > 0 ? otherValues.join(", ") : ""
            );
          } else {
            setOtherSpecialInterest("");
          }
        }
      } else {
        message.error(data.message || "Failed to update profile");
        console.error("Update failed:", data);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      message.error("Error updating profile");
    } finally {
      setUpdating(false);
    }
  };

  const handleOpenChangePassword = () => {
    // Navigate to forgot password page instead of opening modal
    window.location.href = "/forgot-password";
  };

  const sidebarMenus = [
    { menu: "Forum", icon: <MdDashboard />, link: "/forum" },
    {
      menu: "Resource Library",
      icon: <FaRegFolder />,
      link: "/resource-library",
    },
    { menu: "Members", icon: <TbUsers />, link: "/members" },
    {
      menu: "Palliative Units",
      icon: <PiBuildings />,
      link: "/palliative-units",
    },
    { menu: "News & Blogs", icon: <IoNewspaperOutline />, link: "/news-blogs" },
    { menu: "Settings", icon: <MdOutlineSettings />, link: "/settings" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="flex md:hidden w-full h-16 bg-[#00A99D] fixed top-0 z-30 px-5 items-center justify-between">
        <Image alt="GPDN Logo" src={logo} width={100} className="h-auto" />

        {/* Animated Menu/Close Button */}
        <div
          onClick={handleMobileMenuToggle}
          className="text-2xl text-white cursor-pointer p-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-all duration-200 relative"
        >
          {/* Menu Icon */}
          <MdMenu
            className={`absolute inset-0 transition-all duration-300 ${
              mobileMenuOpen
                ? "rotate-180 opacity-0 scale-75"
                : "rotate-0 opacity-100 scale-100"
            }`}
          />

          {/* Close Icon */}
          <MdClose
            className={`absolute inset-0 transition-all duration-300 ${
              mobileMenuOpen
                ? "rotate-0 opacity-100 scale-100"
                : "rotate-180 opacity-0 scale-75"
            }`}
          />
        </div>
      </div>
      {/* Sidebar */}
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        handleMobileMenuToggle={handleMobileMenuToggle}
      />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64 overflow-y-auto h-screen mt-16 md:mt-0">
        <div
          className={
            isEditing
              ? "md:flex justify-between items-center mb-6"
              : "flex justify-between items-center mb-6"
          }
        >
          <h1 className="text-2xl mb-2 md:mb-0 font-semibold">Settings</h1>
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="px-6 py-2 text-sm text-white bg-[#00A99D] rounded hover:bg-[#008F84] transition-colors"
            >
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="px-6 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                disabled={updating}
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                disabled={updating}
                className="px-6 py-2 text-sm text-white bg-[#00A99D] rounded hover:bg-[#008F84] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {updating ? "Updating..." : "Update Profile"}
              </button>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-8 overflow-scroll border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-4 text-xs md:text-base ${
                activeTab === tab
                  ? "text-[#00A99D] border-b-2 border-[#00A99D]"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "Account" && (
          <div className="max-w-3xl">
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-2">Your Profile</h2>
              <p className="text-gray-500 text-sm">
                Please update your profile settings here
              </p>
              {userProfile?.registrationStatus && (
                <div className="mt-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      userProfile.registrationStatus === "approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    Status:{" "}
                    {userProfile.registrationStatus.charAt(0).toUpperCase() +
                      userProfile.registrationStatus.slice(1)}
                  </span>
                </div>
              )}
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="text-gray-500">Loading profile...</div>
              </div>
            ) : (
              <>
                {/* Profile Picture */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium mb-4">Profile Picture</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                      {userProfile?.imageURL ? (
                        <img
                          src={
                            userProfile.imageURL.startsWith("http")
                              ? userProfile.imageURL
                              : `${process.env.NEXT_PUBLIC_API_URL}/${userProfile.imageURL}`
                          }
                          alt="Profile"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultAvatar;
                          }}
                        />
                      ) : (
                        <img
                          src={defaultAvatar}
                          alt="Default Profile"
                          className="w-full h-full"
                        />
                      )}
                    </div>
                    <div className="flex gap-2">
                      {isEditing ? (
                        <label className="px-4 py-2 text-sm text-white bg-[#00A99D] rounded hover:bg-[#008F84] transition-colors cursor-pointer">
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                            disabled={!isEditing}
                          />
                          {profileImage ? "Change Image" : "Upload Image"}
                        </label>
                      ) : (
                        <button
                          className="px-4 py-2 text-sm text-white bg-[#00A99D] rounded hover:bg-[#008F84] transition-colors cursor-pointer"
                          onClick={handleEdit}
                        >
                          Edit Profile
                        </button>
                      )}
                      {profileImage && isEditing && (
                        <button
                          className="px-4 py-2 text-sm text-white bg-[#FF3B30] rounded hover:bg-red-600 transition-colors"
                          onClick={() => setProfileImage(null)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                  {profileImage && isEditing && (
                    <div className="mt-2 text-sm text-green-600">
                      New image selected: {profileImage.name}
                    </div>
                  )}
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full"
                      readOnly={!isEditing}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <PhoneInput
                      country={"us"}
                      value={formData.phoneNumber}
                      onChange={(value) =>
                        handleInputChange("phoneNumber", value)
                      }
                      inputStyle={{
                        width: "100%",
                        height: "40px",
                      }}
                      disabled={!isEditing}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full"
                      readOnly={!isEditing}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Country of Practice
                    </label>
                    <Input
                      placeholder="Select your country"
                      value={formData.countryOfPractice}
                      onChange={(e) =>
                        handleInputChange("countryOfPractice", e.target.value)
                      }
                      className="w-full"
                      readOnly={!isEditing}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Bio
                    </label>
                    <Input.TextArea
                      placeholder="Enter your bio"
                      value={formData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      className="w-full"
                      autoSize={{ minRows: 3, maxRows: 5 }}
                      readOnly={!isEditing}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Medical Qualifications
                    </label>
                    <Input
                      value={formData.medicalQualification}
                      onChange={(e) =>
                        handleInputChange(
                          "medicalQualification",
                          e.target.value
                        )
                      }
                      className="w-full"
                      readOnly={!isEditing}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Year of Graduation
                    </label>
                    <Input
                      value={formData.yearOfGraduation}
                      onChange={(e) =>
                        handleInputChange("yearOfGraduation", e.target.value)
                      }
                      className="w-full"
                      readOnly={!isEditing}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Medical Registration
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Authority"
                        value={formData.medicalRegistrationAuthority}
                        onChange={(e) =>
                          handleInputChange(
                            "medicalRegistrationAuthority",
                            e.target.value
                          )
                        }
                        className="w-full"
                        readOnly={!isEditing}
                      />
                      <Input
                        placeholder="Number"
                        value={formData.medicalRegistrationNumber}
                        onChange={(e) =>
                          handleInputChange(
                            "medicalRegistrationNumber",
                            e.target.value
                          )
                        }
                        className="w-full"
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Palliative Care Training
                    </label>
                    {isEditing ? (
                      <Select
                        value={formData.hasFormalTrainingInPalliativeCare}
                        onChange={(value) =>
                          handleInputChange(
                            "hasFormalTrainingInPalliativeCare",
                            value
                          )
                        }
                        className="w-full"
                        options={[
                          { value: true, label: "Has Formal Training" },
                          { value: false, label: "No Formal Training" },
                        ]}
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            formData.hasFormalTrainingInPalliativeCare
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {formData.hasFormalTrainingInPalliativeCare
                            ? "Has Formal Training"
                            : "No Formal Training"}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Affiliated Palliative Associations
                    </label>
                    <Input.TextArea
                      value={formData.affiliatedPalliativeAssociations}
                      onChange={(e) =>
                        handleInputChange(
                          "affiliatedPalliativeAssociations",
                          e.target.value
                        )
                      }
                      className="w-full"
                      autoSize={{ minRows: 2, maxRows: 4 }}
                      readOnly={!isEditing}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Special Interests in Palliative Care
                    </label>
                    {isEditing ? (
                      <div className="space-y-3">
                        <Select
                          mode="multiple"
                          placeholder="Select your special interests"
                          value={formData.specialInterestsInPalliativeCare}
                          onChange={(value) =>
                            handleInputChange(
                              "specialInterestsInPalliativeCare",
                              value
                            )
                          }
                          options={specialInterestsOptions}
                          className="w-full"
                          size="large"
                          showSearch
                          filterOption={(input, option) =>
                            (option?.label ?? "")
                              .toLowerCase()
                              .includes(input.toLowerCase())
                          }
                        />
                        {formData.specialInterestsInPalliativeCare?.includes(
                          "Other"
                        ) && (
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-600">
                              Please specify other interests:
                            </label>
                            <Input.TextArea
                              value={otherSpecialInterest}
                              onChange={(e) =>
                                setOtherSpecialInterest(e.target.value)
                              }
                              placeholder="Enter custom interests separated by commas"
                              className="w-full"
                              autoSize={{ minRows: 2, maxRows: 3 }}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Separate multiple custom interests with commas
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="min-h-[40px] p-3 border border-gray-200 rounded-md bg-gray-50">
                        {formData.specialInterestsInPalliativeCare?.length >
                        0 ? (
                          <div className="flex flex-wrap gap-2">
                            {formData.specialInterestsInPalliativeCare.map(
                              (interest, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-[#00A99D] text-white rounded-full text-sm"
                                >
                                  {interest}
                                </span>
                              )
                            )}
                            {otherSpecialInterest && (
                              <>
                                {otherSpecialInterest
                                  .split(",")
                                  .map((customInterest, index) => (
                                    <span
                                      key={`custom-${index}`}
                                      className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                                    >
                                      {customInterest.trim()}
                                    </span>
                                  ))}
                              </>
                            )}
                          </div>
                        ) : (
                          <span className="text-gray-500">
                            No special interests selected
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Change Password Section */}
                <div className="mt-8">
                  <div className="mb-6">
                    <h2 className="text-lg font-medium">Change Password</h2>
                    <p className="text-gray-500 text-sm">
                      Request a password reset email to change your password
                    </p>
                  </div>
                  <button
                    onClick={handleOpenChangePassword}
                    className="px-6 py-2 text-sm text-white bg-[#00A99D] rounded hover:bg-[#008F84] transition-colors"
                  >
                    Reset Password
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === "Discussions" && <UserDiscussions />}

        {activeTab === "Resources" && <UserResources />}

        {activeTab === "Palliative Units" && <UserPalliativeUnits />}
      </div>
    </div>
  );
};

export default Settings;
