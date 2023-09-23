const getDataFromDB = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};
console.log("data")
export default getDataFromDB;
