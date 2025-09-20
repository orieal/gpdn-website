"use client";
import React, { useState, useEffect } from "react";
import bg from "../../../app/assets/HOMEPAGE/new-webps/login-banner.webp";
import Image from "next/image";
import { Input, message as antMessage } from "antd";
import { PiSignInBold } from "react-icons/pi";
import { FaAngleLeft } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { useRouter, useParams } from "next/navigation";
import { resetPassword } from "../../../api/user";

function ResetPasswordPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [userId, setUserId] = useState("");

  // Form data for password reset
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  // Get userId from dynamic route parameters
  useEffect(() => {
    const userIdParam = params?.userId;
    if (userIdParam) {
      setUserId(userIdParam);
    } else {
      // If no userId in route, redirect to forgot password page
      setMessage({
        text: "Invalid reset link. Please request a new password reset.",
        type: "error",
      });
      setTimeout(() => {
        router.push("/forgot-password");
      }, 3000);
    }
  }, [params, router]);

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
   * Validates the password
   * @returns {boolean} - Whether the password is valid
   */
  const validatePassword = () => {
    if (!formData.password.trim()) {
      setMessage({ text: "Password is required", type: "error" });
      return false;
    }

    if (formData.password.length < 6) {
      setMessage({
        text: "Password must be at least 6 characters",
        type: "error",
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "Passwords do not match", type: "error" });
      return false;
    }

    return true;
  };

  /**
   * Handles the reset password process
   */
  const handleResetPassword = async () => {
    // Clear previous messages
    setMessage({ text: "", type: "" });

    // Validate password before submission
    if (!validatePassword()) {
      return;
    }

    if (!userId) {
      setMessage({
        text: "Invalid reset link. Please request a new password reset.",
        type: "error",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await resetPassword(userId, formData.password);

      if (response.error) {
        setMessage({
          text:
            response.error.message ||
            "Failed to reset password. Please try again.",
          type: "error",
        });
      } else if (response.data?.success) {
        setMessage({
          text: "Password reset successful! You can now login with your new password.",
          type: "success",
        });
        antMessage.success("Password reset successful!");

        // Redirect to login page after a short delay
        setTimeout(() => {
          router.push("/signin");
        }, 2000);
      } else {
        setMessage({
          text: "Failed to reset password. Please try again later.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Unexpected error resetting password:", error);
      setMessage({
        text: "An unexpected error occurred. Please try again later.",
        type: "error",
      });
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
      handleResetPassword();
    }
  };

  /**
   * Navigates back to login page
   */
  const handleBackToLogin = () => {
    router.push("/signin");
  };

  /**
   * Navigates to forgot password page
   */
  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  /**
   * Renders the password reset form
   */
  const renderResetForm = () => {
    return (
      <>
        <div className="flex flex-col w-full">
          <label className="text-sm font-semibold">New Password</label>
          <Input.Password
            size="large"
            className="w-full md:w-96 text-sm"
            placeholder="Enter your new password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            onKeyPress={handleKeyPress}
            prefix={<FiLock className="text-lg mr-1" />}
            disabled={loading}
            aria-label="New Password"
            data-testid="password-input"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-sm font-semibold">Confirm Password</label>
          <Input.Password
            size="large"
            className="w-full md:w-96 text-sm"
            placeholder="Confirm your new password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            onKeyPress={handleKeyPress}
            prefix={<FiLock className="text-lg mr-1" />}
            disabled={loading}
            aria-label="Confirm Password"
            data-testid="confirm-password-input"
          />
        </div>
        <button
          onClick={handleResetPassword}
          disabled={loading}
          className={`rounded-md text-white w-full h-10 flex items-center justify-center gap-2 transition-colors ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#00A99D] hover:bg-[#197364] cursor-pointer"
          }`}
        >
          <h1>{loading ? "Resetting Password..." : "Reset Password"}</h1>
          {!loading && <PiSignInBold className="text-lg" />}
        </button>
      </>
    );
  };

  return (
    <div className="w-full h-screen bg-white flex items-center px-5 md:px-0">
      <div className="md:w-1/2 h-screen bg-gray-100 relative hidden md:block">
        <Image
          alt="Reset password background"
          src={bg}
          className="w-full h-full object-cover"
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
            <h1 className="text-xl font-semibold">Reset Your Password</h1>
            <h1 className="text-gray-400 text-sm">
              Create a new password for your account
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            {message.text && (
              <div
                className={`p-3 rounded-md text-sm font-medium ${
                  message.type === "error"
                    ? "bg-red-100 text-red-700 border border-red-300"
                    : "bg-green-100 text-green-700 border border-green-300"
                }`}
                role="alert"
                aria-live="assertive"
              >
                {message.text}
              </div>
            )}
            {renderResetForm()}
            <div className="flex justify-center w-full font-medium text-sm">
              <div className="flex flex-col items-center">
                <button
                  onClick={handleBackToLogin}
                  className="text-blue-600 flex items-center justify-center gap-2 hover:underline mb-2"
                >
                  <FaAngleLeft /> Back to login screen
                </button>
                <button
                  onClick={handleForgotPassword}
                  className="text-blue-600 hover:underline"
                >
                  Request new reset link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
