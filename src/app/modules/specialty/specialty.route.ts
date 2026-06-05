import express from "express";
import { SpecialtyController } from "./specialty.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = express.Router();

router.post("/", SpecialtyController.createSpecialty);
router.get("/", checkAuth(Role.ADMIN), SpecialtyController.getAllSpeciality);
router.delete("/:id", SpecialtyController.deleteSpecialty);

export const SpecialtyRoutes = router;
