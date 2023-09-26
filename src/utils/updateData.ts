import axios from "axios";

const updateData = async (url: string, data: any) => {
  const { data: result } = await axios.patch(url, data);
  return result;
};

export default updateData;
