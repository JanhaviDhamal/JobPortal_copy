import company from "../models/company.js"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import generateToken from "../utils/generateToken.js"
// register a new company
export const registerCompany = async(req,res) =>{
    const {name, email, password} = req.body
    const imageFile  = req.file 

    if(!name || !email || ! password || !imageFile){
        return res.json({success:false , message:"missing details" })
    }
    try {
        const companyExists = await company.findOne({email})
        if (companyExists) {
            return res.json({success:false, message: 'company already registered'})
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        const Company = await company.create({
            name,
            email, 
            password: hashPassword,
            image: imageUpload.secure_url
        })
        res.json({
            success:true,
            Company:{
                _id: Company._id,
                name: Company.name,
                email: Company.email,
                image: Company.image
            },
            token:generateToken(company._id)
            
        })

    } catch (error) {
        res.json({success:false, message:error.message})
    }
}
//company login
export const loginCompany = async(req,res)=>{

}

//get company data
export const getCompanydata = async(req,res) =>{

}
//post job
export const postJob = async(req,res) =>{

}
//get company job applicants
export const getApplicants = async(req,res) =>{

}
//get company posted jobs
export const getPostedJobs = async(req,res) =>{

}
//change job application status
export const changeJobStatus = async(req,res) =>{

}
//change job visibility
export const  changeVisibility = async(req,res ) =>{

}