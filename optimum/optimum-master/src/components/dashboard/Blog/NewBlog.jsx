import React, { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { allDiseases } from "../../header/DiseaseModal"
import axios from "axios"

const NewBlog = ({ setTab }) => {
    const [value, setValue] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [treatment, setTreatment] = useState("")
    const [file, setFile] = useState(null);

    const handleSave = async () => {
        console.log("title", title);
        console.log("description", description);
        console.log("treatment", treatment);
        console.log("content", value);
    
     // Create a FormData object to handle the file upload
     const formData = new FormData();
     formData.append("title", title);
     formData.append("description", description);
     formData.append("treatment", treatment);
     formData.append("content", value);
 
     // Append the file if it exists
     if (file) {
         formData.append("file", file); // File will be included here
     }
    
        console.log("formData", formData);
    
        try {
            const res = await axios.post(
                'http://localhost:3000/api/blog', // Added quotes around the URL
                formData, // Use formData as a plain object or use FormData if necessary
                // {
                //     // headers: {
                //     //     'Content-Type': 'application/json' // Use 'application/json' for JSON data
                //     // }
                // }
            );
            setTab("blog");
        } catch (e) {
            console.error("Error posting data", e);
        }
    };
    
    
    
    // const handleSave = async () => {
    //     const formData = {
    //         "title": "testing"
    //     };
    
    //     console.log("formData:", formData);  // Log to see the object
    
    //     try {
    //         const res = await axios.post(
    //             `http://localhost:3000/api/blog`,  // API endpoint
    //             formData,  // Send the object directly
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json'  // Set to JSON format
    //                 }
    //             }
    //         );
    //         setTab("blog");  // Navigate to another tab on success
    //     } catch (e) {
    //         console.log(e);  // Log any errors
    //     }
    // };
    

    const handleBannerChange = (e) => {
        setFile(e.target.files[0])  // Capture the selected file
    }

    return (
        <div className="p-10 flex flex-col gap-y-4">
            <label className="font-semibold text-lg">Title</label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="shadow appearance-none border text-xl font-bold border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                type="text"
                placeholder="Title"
            />

            <label className="font-semibold text-lg">Description</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="shadow appearance-none border border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                placeholder="Description"
            />

            <label className="font-semibold text-lg">Treatment</label>
            <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="shadow appearance-none border border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="disease"
            >
                <option value="">Select Treatment</option>
                {allDiseases.map((disease) => (
                    <option value={disease}>{disease}</option>
                ))}
            </select>

            {/* Banner Upload */}
            <label className="font-semibold text-lg">Upload Banner</label>
            <input 
                type="file" 
                onChange={handleBannerChange}  // Handle file selection
                accept="image/*"  // Only allow image files
                className="shadow appearance-none border border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            />

            <label className="font-semibold text-lg">Content</label>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className="border border-pri"
                modules={{
                    toolbar: {
                        container: [
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            ["bold", "italic", "underline"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link", "image"],
                            [{ color: ["#8b5cf6", "#0ea5e9", "#fff", "#000"] }],
                        ],
                    },
                }}
            />

            <button
                onClick={handleSave}
                className="block ml-auto px-6 py-2 bg-violet-800 text-white font-semibold rounded-md"
            >
                Save Blog
            </button>
        </div>
    )
}

export default NewBlog
