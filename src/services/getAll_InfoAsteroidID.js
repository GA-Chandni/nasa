import Axios from "axios"

export const getAll_InfoAsteroidID =async(id)=>{
    return(
        Axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=kEzIOr88eLhtUW6BKw4syp0HVU9qyfAQM3YJyJx1`)
    )
}