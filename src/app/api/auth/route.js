// import NextAuth from "next-auth"
// import { authOptions } from "@/utils/auth"


// const handler =  NextAuth(authOptions)

// export { handler as GET, handler as POST}


// import connectDB from "../../../../libs/mongodb";
// import user from "../../../../models/user";
// import { NextResponse } from "next/server";

// export default async function POST(request) {
//     await connectDB();
//     const { name, email, image } = await req.json();
//     await user.create ({name, email}); 
//     return NextResponse.json({message : "User created successfully"}, {status: 201});




import connectDB from "../../../../libs/mongodb";
import user from "../../../../models/user";
import { NextApiRequest, NextApiResponse } from "next/server";
import { ValidationError } from "mongoose";

export default async function handlePost(req, res) {
  // 1. Connect to database
  try {
    await connectDB();
  } catch (error) {
    console.error("Database connection error:", error);
    return res.status(500).json({ message: "Error connecting to database" });
  }

  // 2. Validate incoming data
  const { name, email } = await req.json();

  const validationErrors = [];
  if (!name) {
    validationErrors.push("Name is required");
  }
  if (!email) {
    validationErrors.push("Email is required");
  }
  if (!validateEmail(email)) { // Add email validation function
    validationErrors.push("Invalid email format");
  }

  if (validationErrors.length > 0) {
    return res.status(400).json({ message: "Validation errors", errors: validationErrors });
  }

  // 3. Create user with password hashing (for improved security)
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Requires bcrypt installed
    const newUser = await user.create({ name, email, password: hashedPassword });
    return res.status(201).json({ message: "User created successfully", id: newUser._id });
  } catch (error) {
    if (error instanceof ValidationError) {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ message: "Validation errors", errors: validationErrors });
    } else {
      console.error("User creation error:", error);
      return res.status(500).json({ message: "Error creating user" });
    }
  }
}

// Add a function to validate email format (consider using a library like validator.js)
function validateEmail(email) {
  // Implement email validation logic here
  return true; // Replace with actual validation
}






    // {
    //     case "GET":
    //         try {
    //             const users = await User.find({});
    //             res.status(200).json({ success: true, data: users });
    //         } catch (error) {
    //             res.status(400).json({ success: false });
    //         }
    //         break;
    //     case "POST":
    //         try {
    //             const user = await User.create(req.body);
    //             res.status(201).json({ success: true, data: user });
    //         } catch (error) {
    //             res.status(400).json({ success: false });
    //         }
    //         break;
    //     default:
    //         res.status(400).json({ success: false });
    //         break;
    // }
}