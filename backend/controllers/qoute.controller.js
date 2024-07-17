
import { Favourites } from "../models/qouteModel.js";
import { favouritesSchemaValidation } from "../schemaValidation/FavouriteSchemaValidation.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";


const addFavourite=async(req,res)=>{
    try {
        const favourite= favouritesSchemaValidation.parse(req.body);
        const newPost=await Favourites.create(favourite);
        res.json(new ApiResponse(201, newPost, "favourite successfully"));
    } catch (error) {
       res.json(new ApiError(500,error.message)) 
    }
}



const getFavourites = async (req, res) => {
  try {
   
    const favouritesList = await Favourites.findAll();

   
    res.json(new ApiResponse(200, favouritesList, "Favourites retrieved successfully"));
  } catch (error) {
    
    res.json(new ApiError(500, error.message));
  }
};



export {addFavourite,getFavourites}