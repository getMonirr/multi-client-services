import {
  getServices,
  getServicesByEmail,
  postService,
} from "@/controllers/service.controller";
import { handleError } from "@/middleware/errorMiddleware";
import { NextResponse } from "next/server";

// get all services or get all services by seller email
export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const sellerEmail = searchParams.get("email");

    // get individual seller services
    if (sellerEmail) {
      const services = await getServicesByEmail(sellerEmail);

      return NextResponse.json({ success: true, data: services });
    } else {
      // get all seller services
      const services = await getServices();
      return NextResponse.json({ success: true, data: services });
    }
  } catch (error: any) {
    return handleError(error);
  }
};

// post or save a services in DB
export const POST = async (req: Request) => {
  try {
    const reqBody = await req.json();
    const result = await postService(reqBody);
    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return handleError(error);
  }
};
