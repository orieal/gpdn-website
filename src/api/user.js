import Api from "../services/axios";
import userRoute from "../services/endPoints/userEndpoints";





export const fetchBlogs = async () => {
  try {
    const response = await Api.get(userRoute.FetchNewsAndBlogs);
    return response;
  } catch (error) {
    console.log(error)
    return errorHandle(err);
  }
};

