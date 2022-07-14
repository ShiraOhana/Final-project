import express, { Router } from "express";
const router = express.Router();

import {
  createJob,
  getAllJobs,
  deleteJob,
  updateJob,
  showStats,
} from "../controllers/jobController.js";

router.route("/").post(createJob).get(getAllJobs);
// remember about :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default Router;
