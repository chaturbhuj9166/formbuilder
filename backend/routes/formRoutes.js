import express from "express";
import Form from "../models/form.js";

const router = express.Router();

// create
router.post("/", async (req, res) => {
  const form = await Form.create(req.body);
  res.json(form);
});

// get all
router.get("/", async (req, res) => {
  const forms = await Form.find().sort({ createdAt: -1 });
  res.json(forms);
});

// update
router.put("/:id", async (req, res) => {
  const form = await Form.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(form);
});

export default router;
