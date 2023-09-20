import { FaHome, FaUserAlt, FaUserEdit, FaUsers } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaCartShopping, FaNetworkWired } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { BsQuestionCircleFill } from "react-icons/bs";
// seller routes links
export const sellerLinks = [
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: FaUserAlt,
  },
  {
    name: "Update Profile",
    path: "/dashboard/update_profile",
    icon: FaUserEdit,
  },
  {
    name: "Manage Order",
    path: "/dashboard/manage-orders",
    icon: FaCartShopping,
    count: 5,
  },
  {
    name: "Service",
    path: "/dashboard/all-jobs",
    icon: MdOutlineMedicalServices,
    count: 5,
  },
  {
    name: "Create service",
    path: "/dashboard/create-service",
    icon: MdOutlineMedicalServices,
  },
];
// admin route links
export const adminLinks = [
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: FaUserAlt,
  },
  {
    name: "Update Profile",
    path: "/dashboard/update_profile",
    icon: FaUserEdit,
  },
  {
    name: "All Users",
    path: "/dashboard/all-users",
    icon: FaUsers,
    count: 5,
  },
  {
    name: "Manage Services",
    path: "/dashboard/manage-service",
    icon: FaNetworkWired,
    count: 5,
  },
  {
    name: "Payment Management",
    path: "/dashboard/payment-management",
    icon: FaNetworkWired,
    count: 5,
  },
];
// buyer routes links
export const buyerLinks = [
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: FaUserAlt,
  },
  {
    name: "Update Profile",
    path: "/dashboard/update_profile",
    icon: FaUserEdit,
  },
  {
    name: "Manage Orders",
    path: "/dashboard/manage-orders",
    icon: FaCartShopping,
    count: 5,
  },
];

// importance links for dashboard

export const importanceLinks = [
  {
    name: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: BiSupport,
  },
  {
    name: "About Us",
    path: "/about",
    icon: BsQuestionCircleFill,
  },
];
