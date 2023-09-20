import {
  getCategoriesStatistic,
  getPopularServices,
  getServices,
  getServicesByEmail,
  postService,
  powerFullSearch,
} from "@/controllers/service.controller";
import { handleError } from "@/middleware/errorMiddleware";
import { NextResponse } from "next/server";

// get all services or get all services by seller email
export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const sellerEmail = searchParams.get("email");
    const popularCategories = searchParams.get("category");
    const categoriesStatistic = searchParams.get("statistics");

    // power full search
    const searchQuery = searchParams.get("searchQuery");
    if (searchQuery) {
      const searchResult = await powerFullSearch(searchQuery);
      return NextResponse.json({ success: true, data: searchResult });
    }

    // get individual seller services
    if (sellerEmail) {
      // get individual seller services
      const services = await getServicesByEmail(sellerEmail);
      return NextResponse.json({ success: true, data: services });
    } else if (popularCategories) {
      // get all popular categories
      const popularServices = await getPopularServices();
      return NextResponse.json({ success: true, data: popularServices });
    } else if (categoriesStatistic) {
      // get all the categories statistics
      const categoriesStatistic = await getCategoriesStatistic();
      return NextResponse.json({ success: true, data: categoriesStatistic });
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