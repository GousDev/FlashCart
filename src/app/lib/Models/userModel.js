import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    addressLine: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    zipCode: {
      type: String,
      required: true,
      match: /^[0-9]{5,6}$/, // Validate 5 or 6 digit postal codes
    },
    country: {
      type: String,
      required: true,
      default: "India",
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: /^[0-9]{10}$/, // Ensure only valid 10-digit phone numbers
  },
  otp: {
    type: String, // Store OTP temporarily
  },
  otpExpiresAt: {
    type: Date, // Store when the OTP expires
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
