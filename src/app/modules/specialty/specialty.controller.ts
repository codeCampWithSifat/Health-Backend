import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

// const createSpecialty = async (req: Request, res: Response) => {
//   try {
//     const payload = req.body;
//     const result = await SpecialtyService.createSpecialty(payload);

//     res.status(201).json({
//       success: true,
//       message: "Specialy Created Successfully",
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getAllSpeciality = async (req: Request, res: Response) => {
//   try {
//     const result = await SpecialtyService.getAllSpeciality();

//     res.status(200).json({
//       success: true,
//       message: "Get All Successfully",
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await SpecialtyService.createSpecialty(payload);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Specialty Created Successfuly",
    data: result,
  });
});
const getAllSpeciality = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtyService.getAllSpeciality();
  res.status(200).json({
    success: true,
    message: "Specialty Fetched Successfully",
    data: result,
  });
});
const deleteSpecialty = async (req: Request, res: Response) => {
  try {
    const result = await SpecialtyService.deleteSpecialty(
      req.params?.id as string,
    );

    res.status(200).json({
      success: true,
      message: "Delete Doctor Specialty Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const SpecialtyController = {
  createSpecialty,
  getAllSpeciality,
  deleteSpecialty,
};
