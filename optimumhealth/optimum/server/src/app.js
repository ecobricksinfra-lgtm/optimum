const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const db = require("./utils/db")
const cors = require("cors")
const multer = require("multer")
const {
    getAllClinics,
    getClinicById,
    createClinic,
    updateClinicById,
    deleteClinicById,
} = require("./controllers/clinic.controllers")
const {
    getAllDoctors,
    getDoctorById,
    deleteDoctorById,
    updateDoctorById,
    createDoctor,
} = require("./controllers/doctor.controller")
const {
    getAllPatients,
    getPatientById,
    deletePatientById,
    updatePatientById,
    createPatient,
} = require("./controllers/patient.controller")
const {
    getAllSurgerys,
    getSurgeryById,
    deleteSurgeryById,
    updateSurgeryById,
    createSurgery,
} = require("./controllers/surgery.controller")
const {
    getAllPatientHistorys,
    getPatientHistoryById,
    deletePatientHistoryById,
    updatePatientHistoryById,
    createPatientHistory,
} = require("./controllers/patientHistory.controller")

const {
    getAllTreatments,
    getTreatmentById,
    deleteTreatmentById,
    updateTreatmentById,
    createTreatment,
} = require("./controllers/treatment.controller")

const {
    getAllReviews,
    getReviewById,
    deleteReviewById,
    updateReviewById,
    createReview,
} = require("./controllers/review.controller")

const {
    getAllFaqs,
    getFaqById,
    deleteFaqById,
    updateFaqById,
    createFaq,
} = require("./controllers/faq.controller")

const {
    getAllAppointments,
    getAppointmentById,
    deleteAppointmentById,
    updateAppointmentById,
    createAppointment,
} = require("./controllers/appointment.controller")

const {
    getAllBlogs,
    getBlogById,
    deleteBlogById,
    updateBlogById,
    createBlog,
} = require("./controllers/blog.controller")

const {
    getAllVideos,
    deleteVideoById,
    createVideo,
} = require("./controllers/video.controller")

const {
    getAllHeaders,
    createHeader,
} = require("./controllers/header.controller")
const { getAllHomes, createHome } = require("./controllers/home.controller")
const {
    getAllAboutUs,
    createAboutUs,
} = require("./controllers/aboutUs.controller")
const {
    getAllEnquires,
    createEnquire,
    updateEnquireById,
    deleteEnquireById,
    getEnquireById,
} = require("./controllers/enquire.controller")
const {
    getAllTreats,
    createTreat,
    getTreat,
} = require("./controllers/treat.controller")
const {
    createOurDocs,
    getAllOurDocss,
} = require("./controllers/ourDocs.controller")
const {
    getAllPartners,
    createPartner,
} = require("./controllers/partner.controller")
const {
    getAllMedias,
    getMediaById,
    deleteMediaById,
    updateMediaById,
    createMedia,
} = require("./controllers/media.controller")
const {
    getAllCareers,
    createCareer,
} = require("./controllers/career.controller")
const { handleLogin } = require("./controllers/user.controller")
const {
    getAllEnquireDocs,
    getEnquireDocById,
    createEnquireDoc,
    updateEnquireDocById,
    deleteEnquireDocById,
} = require("./controllers/enquireDoc.controller")
const upload = require("./middlware/multer")

const uploads = multer({ dest: "uploads/" })

const app = express()
const PORT = process.env.PORT || 3002
app.use(
    cors({
	    origin: ["http://localhost:5173","https://scintillating-douhua-3c2827.netlify.app","http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:8080","http://localhost:3000","http://stg.optimumhealth.in/","http://stg.optimumhealth.in"],
        credentials: true,
    })
)

app.use(express.json())

app.get("/healthcheck", (req, res) => {
    res.sendStatus(200)
})

// ####### LOG IN #########

app.post("/api/user", handleLogin)

// ###### CLINICS #########

// get All clinics
app.get("/api/clinic", getAllClinics)

// get 1 clinic by id
app.get("/api/clinic/:id", getClinicById)
// delete  clinic by id
app.delete("/api/clinic/:id", deleteClinicById)

// update  clinic by id
app.put("/api/clinic/:id", uploads.array("image"), updateClinicById)

// Add Clinic
app.post("/api/clinic", uploads.array("image"), createClinic)

// ###### DOCTORS #########

// get All doctors
app.get("/api/doctor", getAllDoctors)

// get 1 doctor by id
app.get("/api/doctor/:id", getDoctorById)
// delete  doctor by id
app.delete("/api/doctor/:id", deleteDoctorById)

// update  doctor by id
app.put("/api/doctor/:id", uploads.array("image"), updateDoctorById)

// Add Doctor
app.post("/api/doctor", uploads.array("image"), createDoctor)

// ###### REVIEWS #########

// get All reviews
app.get("/api/review", getAllReviews)

// get 1 review by id
app.get("/api/review/:id", getReviewById)
// delete  review by id
app.delete("/api/review/:id", deleteReviewById)

// update  review by id
app.put("/api/review/:id", uploads.array("image"), updateReviewById)

// Add Review
app.post("/api/review", uploads.array("image"), createReview)

// ###### SURGERYS #########

// get All surgerys
app.get("/api/surgery", getAllSurgerys)

// get 1 surgery by id
app.get("/api/surgery/:id", getSurgeryById)
// delete  surgery by id
app.delete("/api/surgery/:id", deleteSurgeryById)

// update  surgery by id
app.put("/api/surgery/:id", uploads.array("image"), updateSurgeryById)

// Add Surgery
app.post("/api/surgery", uploads.array("image"), createSurgery)

// ###### TREATMENTS #########

// get All treatments
app.get("/api/treatment", getAllTreatments)

// get 1 treatment by id
app.get("/api/treatment/:id", getTreatmentById)
// delete  treatment by id
app.delete("/api/treatment/:id", deleteTreatmentById)

// update  treatment by id
app.put("/api/treatment/:id", uploads.array("image"), updateTreatmentById)

// Add Treatment
app.post("/api/treatment", uploads.array("image"), createTreatment)

// ###### FAQS #########

// get All faqs
app.get("/api/faq", getAllFaqs)

// get 1 faq by id
app.get("/api/faq/:id", getFaqById)
// delete  faq by id
app.delete("/api/faq/:id", deleteFaqById)

// update  faq by id
app.put("/api/faq/:id", uploads.array("image"), updateFaqById)

// Add Faq
app.post("/api/faq", uploads.array("image"), createFaq)

// ###### APPOINTMENTS #########

// get All appointments
app.get("/api/appointment", getAllAppointments)

// get 1 appointment by id
app.get("/api/appointment/:id", getAppointmentById)
// delete  appointment by id
app.delete("/api/appointment/:id", deleteAppointmentById)

// update  appointment by id
app.put("/api/appointment/:id", updateAppointmentById)

// Add Appointment
app.post("/api/appointment", createAppointment)

// ###### MEDIAS #########

// get All medias
app.get("/api/media", getAllMedias)

// get 1 media by id
app.get("/api/media/:id", getMediaById)
// delete  media by id
app.delete("/api/media/:id", deleteMediaById)

// update  media by id
app.put("/api/media/:id", uploads.array("image"), updateMediaById)

// Add Media
app.post("/api/media", uploads.array("image"), createMedia)

// ###### BLOGS #########

// get All blogs
app.get("/api/blog", getAllBlogs)

// get 1 blog by id
app.get("/api/blog/:id", getBlogById)
// delete  blog by id
app.delete("/api/blog/:id", deleteBlogById)

// update  blog by id
app.put("/api/blog/:id", updateBlogById)

// Add Blog
app.post("/api/blog",upload.single('file'), createBlog)

// ###### PATIENTS #########

// get All patients
app.get("/api/patient", getAllPatients)

// get 1 patient by id
app.get("/api/patient/:id", getPatientById)
// delete  patient by id
app.delete("/api/patient/:id", deletePatientById)

// update  patient by id
app.put("/api/patient/:id", uploads.array("profilePic"), updatePatientById)

// Add Patient
app.post("/api/patient", uploads.array("profilePic"), createPatient)

// ###### PATIENTHISTORYS #########

// get All patientHistorys
app.get("/api/patientHistory", getAllPatientHistorys)

// get 1 patientHistory by id
app.get("/api/patientHistory/:id", getPatientHistoryById)
// delete  patientHistory by id
app.delete("/api/patientHistory/:id", deletePatientHistoryById)

// update  patientHistory by id
app.put(
    "/api/patientHistory/:id",
    uploads.array("image"),
    updatePatientHistoryById
)

// Add PatientHistory
app.post("/api/patientHistory", uploads.array("image"), createPatientHistory)

// ###### Videos #########

// get All videos
app.get("/api/video", getAllVideos)

// delete  video by id
app.delete("/api/video/:id", deleteVideoById)

// Add Video
app.post("/api/video", createVideo)

// ###### Headers #########

// get All headers
app.get("/api/header", getAllHeaders)

// Add Header
app.post("/api/header", createHeader)

// ###### OurDocs #########

// get All ourDocs
app.get("/api/ourDocs", getAllOurDocss)

// Add OurDoc
app.post("/api/ourDocs", createOurDocs)

// ###### Partners #########

// get All partners
app.get("/api/partner", getAllPartners)

// Add Partner
app.post("/api/partner", createPartner)

// ###### Homes #########

// get All homes
app.get("/api/home", getAllHomes)

// Add Home
app.post("/api/home", createHome)

// ###### Careers #########

// get All careers
app.get("/api/career", getAllCareers)

// Add Career
app.post("/api/career", createCareer)

// ###### Treats #########

// get All treats
app.get("/api/treat", getAllTreats)
// get 1 treat by page
app.get("/api/treat/:page", getTreat)

// Add Treat
app.post("/api/treat", createTreat)

// ###### AboutUss #########

// get All aboutUss
app.get("/api/aboutUs", getAllAboutUs)

// Add AboutUs
app.post("/api/aboutUs", createAboutUs)

// ###### Enquires #########

// get All enquires
app.get("/api/enquire", getAllEnquires)

app.get("/api/enquire/:id", getEnquireById)

// Add Enquire
app.post("/api/enquire", createEnquire)
// Update Enquire
app.put("/api/enquire", updateEnquireById)
// Delete Enquire
app.delete("/api/enquire/:id", deleteEnquireById)

// ###### EnquireDocs #########

// get All enquireDocs
app.get("/api/enquireDoc", getAllEnquireDocs)

app.get("/api/enquireDoc/:id", getEnquireDocById)

// Add EnquireDoc
app.post("/api/enquireDoc", createEnquireDoc)
// Update EnquireDoc
app.put("/api/enquireDoc", updateEnquireDocById)
// Delete EnquireDoc
app.delete("/api/enquireDoc/:id", deleteEnquireDocById)

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
    db()
})
