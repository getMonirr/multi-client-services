import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

interface Name {
  firstName: string;
  lastName: string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface SocialMedia {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: number;
}

interface Certification {
  name: string;
  issuingOrganization: string;
  year: number;
}

interface Experience {
  title: string;
  company: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

interface Portfolio {
  title: string;
  description: string;
  links: string[];
}

interface Service {
  title: string;
  description: string;
  price: number;
  deliveryTime: number;
}

interface Review {
  reviewer: string; // Replace with a reference to the User type if needed
  text: string;
  rating: number;
  date: Date;
}

interface CustomUser {
  name: Name;
  username: string;
  email: string;
  password: string;
  profilePicture: string | undefined;
  description: string;
  address: Address;
  languages: string[];
  accounts: {
    website: string;
    socialMedia: SocialMedia;
  };
  educations: Education[];
  certifications: Certification[];
  experience: Experience[];
  portfolios: Portfolio[];
  skills: string[];
  services: string[]; // Replace with a reference to the Service type if needed
  reviews: string[]; // Replace with a reference to the Review type if needed
  role: "admin" | "seller" | "buyer" | undefined;
}

declare module "next-auth" {
  interface Session {
    user: CustomUser & DefaultSession;
  }

  interface User extends DefaultUser {
    role?: "admin" | "seller" | "buyer" | undefined;
    profilePicture?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role?: "admin" | "seller" | "buyer" | undefined;
    profilePicture?: string;
  }
}
