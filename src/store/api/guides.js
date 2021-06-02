import {GET} from "../../api/axios";

const guidesLink = process.env.VUE_APP_INTEGRATION_LINK + "/root-service/guides"

export const guidesList = async () => {
    const response = await GET(
        `${guidesLink}`);
        for (let i = 0; i< response.data.length; i++){
            console.log(response.data[i])
        }

    if (!response.success) {
        throw new Error("Error getting the list hotels in this city");
    }
}
