import mongoose from "mongoose";
interface User {
  email: string;
  password: string;
  name: string;
  lastlogin: Date;
  isVerified: Boolean;
  resetPasswordToken: Date;
  resetPasswordExpiresAt: Date;
  verificationToken: string;
  verificationTokenExpiresAt: Date;
}

const userSchema = new mongoose.Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastlogin: {
      type: Date,
      default: Date.now(),
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<User>("user", userSchema);
