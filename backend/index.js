import express from "express";
import cors from "cors"
import { sequelize } from "./dbConfig/dbConnect.js";
import { QouteRouter } from "./routes/qouteRouter.js";


const app = express();
app.use(cors({
  origin:"*"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "OK",
  });
});

app.use("/api/v1/qoute/favourites",QouteRouter);


const PORT = 3000;


app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({
      alter:true
    });
    console.log("Data base is connected" );
  console.log('Database synchronise')
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log("Data base is not connected!", error.message);
    process.exit(1);
  }
});
