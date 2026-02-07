import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Menubar from "./components/header/Menubar"
import Home from "./components/home/Home"
import AboutUs from "./components/aboutUs/AboutUs"
import Treatments from "./components/treatements/Treatments"
import Footer from "./components/Footer"
import BMI from "./components/BMI"
import PartnerWithUs from "./components/partner/PartnerWithUs"
import DoctorOnboarding from "./components/doctor-onboarding/DoctorOnboarding"
import Carrers from "./components/carrers/Carrers"
import Media from "./components/media/Media"
import Videos from "./components/videos/Videos"
import OurDoctors from "./components/ourDoctors/OurDoctors"
import OurClinic from "./components/ourClinic/OurClinic"
import FAQ from "./components/faq/FAQ"
import Blogs from "./components/blogs/Blogs"
import Blog from "./components/blogs/Blog"
import ContactUs from "./components/ContactUs"
import Login from "./components/Login"
import Dashboard from "./components/dashboard/Dashboard"
import NewBlog from "./components/dashboard/Blog/NewBlog"
import ViewBlog from "./components/dashboard/Blog/ViewBlog"
import axios from "axios"
import useDatas from "./store/useDatas"

function App() {
    const [isNav, setIsNav] = useState(false)
    const [city, setCity] = useState("City")
    const [disease, setDisease] = useState("")
    const [headers, setHeaders] = useState()

    const { setTreatments, setTreatmentCategories, setCities } = useDatas()

    const fetchHeaders = async () => {
        try {
            const headers = await axios.get("http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/header")
            setHeaders(headers.data)
            setCities(headers.data[0].cities)
            let cat = []
            let treats = []
            Object.keys(headers.data[0].treatments).map((keys) => {
                cat = [...cat, keys]
                headers.data[0].treatments[keys].forEach((tr) =>
                    treats.push(tr.name)
                )
            })
            setTreatmentCategories(cat)
            setTreatments(treats)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchHeaders()
    }, [])

    return (
        <Router>
            <Header
                headers={headers}
                isNav={isNav}
                setIsNav={setIsNav}
                city={city}
                setCity={setCity}
                disease={disease}
                setDisease={setDisease}
            />
            <Menubar
                headers={headers}
                isNav={isNav}
                setIsNav={setIsNav}
                city={city}
                setCity={setCity}
                disease={disease}
                setDisease={setDisease}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                {/* <Route path="/header2" element={<Home />} /> */}
                <Route path="/treatments/:treatment" element={<Treatments />} />
                <Route path="/bmi" element={<BMI />} />
                <Route path="/partner" element={<PartnerWithUs />} />
                <Route path="/doctor-partner" element={<DoctorOnboarding />} />
                <Route path="/careers" element={<Carrers />} />
                <Route path="/media" element={<Media />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/our-doctors" element={<OurDoctors />} />
                <Route path="/our-clinics" element={<OurClinic />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:blogid" element={<Blog />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/blog/:blogId" element={<ViewBlog />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
