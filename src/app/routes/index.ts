import { Router } from "express";
import { SpecialtyRoutes } from "../modules/specialty/specialty.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.routes";
import { DoctorRoutes } from "../modules/doctors/doctor.routes";

const router = Router();

router.use("/specialties", SpecialtyRoutes);
router.use("/auth", AuthRoutes);
router.use("/users", UserRoutes);
router.use("/doctors", DoctorRoutes);

export const IndexRoutes = router;
