import dbConnect from "../db/connectDb";
import User from "../Models/userModel";

export default async function OtpSending(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { phoneNumber, otp } = req.body;

  if (!phoneNumber || !/^[0-9]{10}$/.test(phoneNumber)) {
    return res.status(400).json({ message: "Invalid phone number" });
  }

  await dbConnect();

  try {
    // Check if the user exists
    let user = await User.findOne({ phoneNumber });

    if (!user) {
      // Create a new user if not exists
      const user = await User.create({
        phoneNumber,
        otp,
        otpExpiresAt: new Date(Date.now() + 5 * 60 * 1000), // OTP valid for 5 minutes
      });
    } else {
      // Update the OTP for an existing user
      user.otp = otp;
      user.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP valid for 5 minutes
      await user.save();
    }

    return res.status(200).json({ message: "OTP saved successfully", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
