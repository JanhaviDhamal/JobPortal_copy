import express from "express"
import { changeJobStatus, changeVisibility, getApplicants, getCompanydata, getPostedJobs, loginCompany, postJob, registerCompany } from "../controllers/companyController.js"
import upload from "../config/multer.js"

const router = express.Router()

//register company
router.post('/register',upload.single('image'), registerCompany)

//company login
router.post('/login', loginCompany)

//get company data
router.get('/company', getCompanydata)

//post a job
router.post('/post-job', postJob)

//get applicants data
router.get('/applicants', getApplicants)

//get company job list
router.get('/list-jobs', getPostedJobs)

//change application status
router.post('/change-status', changeJobStatus)

//change application visibility
router.post('/change-visibility', changeVisibility)

export default router