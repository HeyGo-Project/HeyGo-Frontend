import {GET} from "../../api/axios";
import {store} from '../store'

const hotelsLink = process.env.VUE_APP_INTEGRATION_LINK + "/hotels/code?code="

export const findHotelsInCity = async (city) => {
    const response = await GET(
        `${hotelsLink}` + `${city}`);

    console.log(response)
    if (!response.success) {
        throw new Error("Error getting the list hotels in this city");
    }

}
