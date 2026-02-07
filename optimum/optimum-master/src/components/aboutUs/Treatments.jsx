import React from "react"

const Treatments = () => {
    return (
        <div className=" mx-auto px-10 md:px-20 lg:px-40 xl:px-60 py-12 overflow-hidden w-full">
            <h2 className="text-4xl text-pri font-bold mb-8">
                Treatments available at Optimum
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 w-max mx-auto">
                <div className="bg-gray-100 border-2 border-pri shadow-lg rounded-lg shadow-black/20 overflow-hidden  ">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-sky-500  mb-2">
                            Proctology
                        </h3>
                        <ul className="list-disc  pl-6">
                            <li>Piles</li>
                            <li>Fistula</li>
                            <li>Fissure</li>
                            <li>Pilonidal sinus</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 border-2 border-pri shadow-lg rounded-lg shadow-black/20 overflow-hidden  ">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-sky-500  mb-2">
                            Laparoscopy
                        </h3>
                        <ul className="list-disc  pl-6">
                            <li>Hernia</li>
                            <li>Gall Stone</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 border-2 border-pri shadow-lg rounded-lg shadow-black/20 overflow-hidden  ">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-sky-500  mb-2">
                            Urology
                        </h3>
                        <ul className="list-disc  pl-6">
                            <li>Kidney stone</li>
                            <li>Frenuloplasty</li>
                            <li>Hydrocele</li>
                            <li>Circumcision</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 border-2 border-pri shadow-lg rounded-lg shadow-black/20 overflow-hidden  ">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-sky-500  mb-2">
                            Vascular
                        </h3>
                        <ul className="list-disc  pl-6">
                            <li>Varicose veins</li>
                            <li>Varicocele</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 border-2 border-pri shadow-lg rounded-lg shadow-black/20 overflow-hidden  ">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-sky-500  mb-2">
                            Ophthalmology
                        </h3>
                        <ul className="list-disc pl-6">
                            <li>Lasik</li>
                            <li>Cataract</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 border-2 border-pri shadow-lg rounded-lg shadow-black/20 overflow-hidden  ">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-sky-500  mb-2">
                            Gynaecology
                        </h3>
                        <ul className="list-disc  pl-6">
                            <li>Vaginoplasty</li>
                            <li>Hysterectomy</li>
                            <li>Vaginal tightening</li>
                            <li>Uterus Removal</li>
                            <li>Cyst &amp; Fibroid Removal</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 border-2 border-pri shadow-lg rounded-lg shadow-black/20 overflow-hidden  ">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-sky-500  mb-2">
                            Cosmetic
                        </h3>
                        <ul className="list-disc  pl-6">
                            <li>Gynecomastia</li>
                            <li>Mole removal</li>
                            <li>Lipoma removal</li>
                            <li>Hymenoplasty</li>
                            <li>Labiaplasty</li>
                            <li>Rhinoplasty</li>
                            <li>PRP</li>
                            <li>Hair transplant</li>
                            <li>Breast Implant</li>
                            <li>Breast Reduction</li>
                            <li>Breast Augmentation</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 border-2 border-pri shadow-lg rounded-lg shadow-black/20 overflow-hidden  ">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-sky-500  mb-2">
                            Dental
                        </h3>
                        <ul className="list-disc  pl-6">
                            <li>IPR</li>
                            <li>Root canal</li>
                            <li>Teeth alignment</li>
                            <li>Teeth whitening</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 border-2 border-pri shadow-lg rounded-lg shadow-black/20 overflow-hidden  ">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-sky-500  mb-2">
                            Ortho
                        </h3>
                        <ul className="list-disc  pl-6">
                            <li>Knee replacement</li>
                            <li>Knee implant</li>
                            <li>Hip replacement</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 border-2 border-pri shadow-lg rounded-lg shadow-black/20 overflow-hidden  ">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-sky-500  mb-2">
                            Mental Wellness
                        </h3>
                        <ul className="list-disc  pl-6">
                            <li>Anxiety disorders</li>
                            <li>Mood disorders</li>
                            <li>Psychotic disorders</li>
                            <li>Eating disorders</li>
                            <li>Personality disorders</li>
                            <li>Sleep-wake disorders</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Treatments
