import { Router, Request, Response } from "express";
import {
  createMovie,
  findMovieById,
  getAllMovie,
  removeMovie,
  uptdateMovie,
} from "./controllers/movieController";
import { validate } from "./middlewares/handleValidation";
import { movieCreateValidation } from "./middlewares/movieValidation";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("api working!");
  })
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", findMovieById)
  .get("/movie", getAllMovie)
  .delete("/movie/:id", removeMovie)
  .patch("/movie/:id", movieCreateValidation(), validate, uptdateMovie);
