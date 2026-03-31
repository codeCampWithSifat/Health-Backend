import express from "express";
import { SpecialtyController } from "./specialty.controller";

const router = express.Router();

router.post("/", SpecialtyController.createSpecialty);
router.get("/", SpecialtyController.getAllSpeciality);
router.delete("/:id", SpecialtyController.deleteSpecialty);

export const SpecialtyRoutes = router;
