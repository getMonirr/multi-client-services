import { handleError } from "@/middleware/errorMiddleware";

const GET = async (req: Request) => {
    try {
        
    }
    catch (error: any) {
        return handleError(error);
    }
};
