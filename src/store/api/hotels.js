import {GET} from "../../api/axios";
import {store} from '../store'

const hotelsLink = process.env.VUE_APP_INTEGRATION_LINK + "/hotels/code?code="

export const findHotelsInCity = async (city) => {
    const response = await GET(
        `${hotelsLink}` + `${city}`);
        for (let i = 0; i< response.data.length; i++){
            console.log(response.data[i])
        }

    // response.data.forEach(element =>
    //     console.log(element)
    //     // store.state.hotels.forEach(hotel =>
    //     //     hotel.name = element.name)
    // )

    if (!response.success) {
        throw new Error("Error getting the list hotels in this city");
    }
}
