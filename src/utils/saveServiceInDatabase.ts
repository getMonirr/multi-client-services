import axios from "axios";

const saveServiceInDatabase = async (serviceData: any) => {
  const { data } = await axios.post("/api/services", serviceData);
  return data;
};

export default saveServiceInDatabase;
