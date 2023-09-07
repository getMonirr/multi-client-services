import axios from "axios";

const getImgUrl = async (imageFile: string) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_img_hoisting_token}`,
    formData
  );
  const url = data?.data?.display_url;

  return url;
};

export default getImgUrl;
