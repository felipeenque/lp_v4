import mongoose from "mongoose"

const MONGO_URI =
  process.env.MONGODB_URI ??
  "mongodb+srv://eliasfernandes:6bfzG0Z1UyE8NkUO@cluster0.ufzq2.mongodb.net/franchise_store?retryWrites=true&w=majority"

let cached = (global as any).mongoose as { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }

if (!cached) cached = (global as any).mongoose = { conn: null, promise: null }

export async function connectToDB() {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      bufferCommands: false,
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}
