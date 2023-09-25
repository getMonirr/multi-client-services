import {
  deleteServiceById,
  getServiceById,
  updateServiceById,
} from "@/controllers/service.controller";
import { handleError } from "@/middleware/errorMiddleware";
import { NextResponse } from "next/server";

// update a service by its id
type ParamsType = {
  params: {
    serviceId: string;
  };
};
export const PATCH = async (req: Request, { params }: ParamsType) => {
  try {
    const serviceId = params?.serviceId;
    const reqBody = await req.json();
    const result = await updateServiceById(serviceId, reqBody);

    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return handleError(error);
  }
};

// delete a service by its id
export const DELETE = async (req: Request, { params }: ParamsType) => {
  try {
    const serviceId = params?.serviceId;
    const result = await deleteServiceById(serviceId);
    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return handleError(error);
  }
};

// get service by id
export const GET = async (req: Request, { params }: ParamsType) => {
  try {
    const serviceId = params?.serviceId;
    const result = await getServiceById(serviceId);
    if (!result) return NextResponse.json({ error: "Service not found" });
    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return handleError(error);
  }
};
