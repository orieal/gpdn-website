"use client";
import React, { useState, useEffect } from "react";
import bg from "../../app/assets/HOMEPAGE/new-webps/login-banner.webp";
import Image from "next/image";
import { Input, message as antMessage } from "antd";
import { PiSignInBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { MdOutlineEmail } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { sendForgotPasswordEmail } from "../../api/user";
import { EMAIL_REGEX } from "../../utils/constants";

function ForgotPasswordPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  // Clear message after 5 seconds if it's a success or error message
  useEffect(() => {
    if (
      message.text &&
      (message.type === "success" || message.type === "error")
    ) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  /**
   * Updates form data when input fields change
   * @param {string} field - The field name to update
   * @param {string} value - The new value
   */
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error messages when user starts typing
    if (message.type === "error") {
      setMessage({ text: "", type: "" });
    }
  };

  /**
   * Validates the form data
   * @returns {boolean} - Whether the form is valid
   */
  const validateForm = () => {
    // Check for empty fields
    if (!formData.email.trim()) {
      setMessage({ text: "Email is required", type: "error" });
      return false;
    }

    // Email format validation
    if (!EMAIL_REGEX.test(formData.email)) {
      setMessage({ text: "Please enter a valid email address", type: "error" });
      return false;
    }

    return true;
  };

  /**
   * Handles the forgot password process
   */
  const handleForgotPassword = async () => {
    // Clear previous messages
    setMessage({ text: "", type: "" });

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await sendForgotPasswordEmail(formData.email);

      // Handle different response scenarios
      if (response.error) {
        setMessage({
          text:
            response.error.message ||
            "Failed to send reset email. Please check your email address.",
          type: "error",
        });
      } else if (response.data?.success) {
        setMessage({
          text: "Password reset email sent successfully! Please check your email inbox and follow the instructions to reset your password.",
          type: "success",
        });
        antMessage.success("Password reset email sent!");

        // Redirect to sign-in page after a short delay
        setTimeout(() => {
          router.push("/signin");
        }, 3000);
      } else {
        setMessage({
          text: "Failed to send reset email. Please try again later.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Unexpected forgot password error:", error);

      // Handle network errors separately
      if (error.message?.includes("Network Error")) {
        setMessage({
          text: "Unable to connect to the server. Please check your internet connection.",
          type: "error",
        });
      } else {
        setMessage({
          text: "An unexpected error occurred. Please try again later.",
          type: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handles Enter key press in input fields
   * @param {Event} e - Keyboard event
   */
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleForgotPassword();
    }
  };

  /**
   * Navigates back to sign-in page
   */
  const handleBackToSignIn = () => {
    router.push("/signin");
  };

  return (
    <div className="w-full h-screen bg-white flex items-center px-5 md:px-0">
      <div className="md:w-1/2 h-screen bg-gray-100 relative hidden md:block">
        <Image
          alt="Forgot password background"
          src={bg}
          className="w-full h-full object-cover "
        />
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
        <button
          onClick={() => router.push("/")}
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
          title="Home"
        >
          <HiHome className="text-xl" />
        </button>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col -mt-5 md:-mt-0 items-center md:items-start">
            <h1 className="text-xl font-semibold">Forgot Your Password?</h1>
            <h1 className="text-gray-400 text-sm">
              No worries! Enter your email address and we'll send you a link to
              reset your password.
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            {message.text && (
              <div
                className={`p-3 rounded-md text-sm font-medium ${
                  message.type === "error"
                    ? "bg-red-100 text-red-700 border border-red-300"
                    : message.type === "pending"
                    ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                    : "bg-green-100 text-green-700 border border-green-300"
                }`}
                role="alert"
                aria-live="assertive"
              >
                {message.text}
              </div>
            )}
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-semibold">Email Address</label>
              <Input
                size="large"
                className="w-full md:w-96 text-sm"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onKeyPress={handleKeyPress}
                prefix={<MdOutlineEmail className="text-lg mr-1" />}
                disabled={loading}
                autoComplete="email"
                aria-label="Email Address"
                data-testid="email-input"
              />
            </div>
            <button
              onClick={handleForgotPassword}
              disabled={loading}
              className={`rounded-md text-white w-full h-10 flex items-center justify-center gap-2 transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00A99D] hover:bg-[#197364] cursor-pointer"
              }`}
            >
              <h1>{loading ? "Sending..." : "Send Reset Link"}</h1>
              {!loading && <PiSignInBold className="text-lg" />}
            </button>
            <div className="flex justify-center w-full font-medium text-sm">
              <div className="flex flex-col items-center">
                <h1>
                  Remember your password?
                  <span
                    className="text-blue-600 cursor-pointer hover:underline"
                    onClick={handleBackToSignIn}
                  >
                    {" "}
                    Sign In
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
