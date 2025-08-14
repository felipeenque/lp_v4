import mongoose from "mongoose"

export interface IUser extends mongoose.Document {
  name: string
  email: string
  password: string
  questionnaireData?: Record<string, unknown>
  matches?: unknown[]
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, select: false },
    questionnaireData: { type: mongoose.Schema.Types.Mixed, default: {} },
    matches: { type: [mongoose.Schema.Types.Mixed], default: [] },
  },
  { timestamps: true, collection: "users" },
)

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema)

export default User
