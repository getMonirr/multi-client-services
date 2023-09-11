// import { model, models, Schema } from "mongoose";

// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   createAt: {
//     type: Date,
//     default: Date.now(),
//   },

//   // more field add later
//   // to add more field first delete old users model
// });

// const User = models.Users || model("Users", userSchema);

// export default User;

import { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    firstName: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    lastName: {
      type: String,
      trim: true,
      maxlength: 50,
    },
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // You may want to implement more complex password rules
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "seller", "buyer"],
  },
  profilePicture: {
    type: String, // You can store a URL to the profile picture
  },
  description: {
    type: String,
    maxlength: 500, // A brief description of the user's skills and services offered
  },
  address: {
    street: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    postalCode: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
  },
  languages: [
    {
      type: String,
      trim: true,
    },
  ],
  accounts: {
    website: {
      type: String,
      trim: true,
    },
    socialMedia: {
      facebook: {
        type: String,
        trim: true,
      },
      twitter: {
        type: String,
        trim: true,
      },
      linkedin: {
        type: String,
        trim: true,
      },
      instagram: {
        type: String,
        trim: true,
      },
    },
  },
  educations: [
    {
      institution: {
        type: String,
        trim: true,
      },
      degree: {
        type: String,
        trim: true,
      },
      fieldOfStudy: {
        type: String,
        trim: true,
      },
      graduationYear: {
        type: Number,
      },
    },
  ],
  certifications: [
    {
      name: {
        type: String,
        trim: true,
      },
      issuingOrganization: {
        type: String,
        trim: true,
      },
      year: {
        type: Number,
      },
    },
  ],
  experience: [
    {
      title: {
        type: String,
        trim: true,
      },
      company: {
        type: String,
        trim: true,
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
      description: {
        type: String,
        maxlength: 500,
      },
    },
  ],
  portfolios: [
    {
      title: {
        type: String,
        trim: true,
      },
      description: {
        type: String,
        maxlength: 500,
      },
      links: {
        type: [String],
        trim: true,
      },
    },
  ],
  skills: [
    {
      type: String, // You can store various skills as an array of strings
    },
  ],
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service", // Reference to the Service collection
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review", // Reference to the Review collection
    },
  ],
});
// Hash the password before saving the user document
userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    return next();
  } catch (error: any) {
    return next(error);
  }
});

const User = models.User || model("User", userSchema);

export default User;

// dummy data according to the schema
const usersData = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    username: "johndoe",
    email: "john@example.com",
    password: "hashedpassword123", // Replace with a hashed password
    profilePicture: "https://example.com/profile.jpg",
    description: "Experienced web developer",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA",
    },
    languages: ["English", "Spanish"],
    accounts: {
      website: "https://johndoe.com",
      socialMedia: {
        facebook: "https://facebook.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
    },
    educations: [
      {
        institution: "University of XYZ",
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        graduationYear: 2015,
      },
    ],
    certifications: [
      {
        name: "Certified Web Developer",
        issuingOrganization: "Web Development Institute",
        year: 2018,
      },
    ],
    experience: [
      {
        title: "Senior Web Developer",
        company: "Tech Solutions Inc.",
        startDate: "2016-01-01",
        endDate: "2021-12-31",
        description: "Led a team of developers in creating web applications.",
      },
    ],
    portfolios: [
      {
        title: "Portfolio Project 1",
        description: "A showcase of my web development work.",
        links: ["https://example.com/project1", "https://example.com/project2"],
      },
    ],
    skills: ["JavaScript", "React", "Node.js"],
    services: ["service_id_1", "service_id_2"], // Replace with actual service IDs
    reviews: ["review_id_1", "review_id_2"], // Replace with actual review IDs
  },
  // Add more user objects here as needed
];
