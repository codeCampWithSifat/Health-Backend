import express from "express";
import { DoctorsController } from "./doctor.controller";

const router = express.Router();

router.get("/", DoctorsController.getAllDoctors);

export const DoctorRoutes = router;
