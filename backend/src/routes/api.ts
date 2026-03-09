import dotenv from "dotenv";
dotenv.config();

import { Router } from "express";
import rateLimit from "express-rate-limit";
import multer from "multer";

import { registerParticipant, checkStatus } from "../controllers/registrationController.js";
import { loginAdmin, getAllRegistrations, updateTeamStatus, exportRegistrations } from "../controllers/adminController.js";
import { examLogin } from "../controllers/examController.js";
import { authenticateAdmin } from "../middleware/auth.js";

const router = Router();

const upload = multer({ storage: multer.memoryStorage() });

const registerLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    message: "Too many registrations from this IP. Try again after 15 minutes."
  }
});

router.post(
  "/ennovatex/register",
  registerLimiter,
  upload.fields([
    { name: "studentIdProof", maxCount: 1 },
    { name: "resume", maxCount: 1 }
  ]),
  registerParticipant
);

router.get("/ennovatex/status/:email", checkStatus);

router.post("/exam/login", examLogin);

router.post("/admin/login", loginAdmin);

router.get(
  "/admin/registrations",
  authenticateAdmin,
  getAllRegistrations
);

router.patch(
  "/admin/update-status/:id",
  authenticateAdmin,
  updateTeamStatus
);

router.get(
  "/admin/export",
  authenticateAdmin,
  exportRegistrations
);

export default router;