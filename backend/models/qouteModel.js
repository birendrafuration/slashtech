import { DataTypes, Model } from "sequelize";
import { sequelize } from '../dbConfig/dbConnect.js';

class Favourites extends Model {}

Favourites.init({
   id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
   }
   ,
   qauteId:{
    type:DataTypes.STRING,
    allowNull:false
   }
   ,
   content:{
    type:DataTypes.STRING,
    allowNull:false
   }
   ,
   author:{
    type:DataTypes.STRING,
    allowNull:false
   }
   ,
   authorId:{
    type:DataTypes.STRING,
    allowNull:false
   }
   ,
   authorSlug:{
    type:DataTypes.STRING,
    allowNull:false
   }
}, {
    sequelize,
    modelName: "Favourites"
});


export { Favourites };
