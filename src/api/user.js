import Api from "../services/axios";
import userRoute from "../services/endPoints/userEndpoints";





export const userContactDetails = async (formData) => {
  try {
    const response = await Api.post(userRoute.userContactDetails , {formData});
    return response;
  } catch (error) {
    console.log(error)
  }
};

