import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js'; 

export default function Partners() {
    const [partnersNPC, setPartnersNPC] = useState(Array(8).fill({ name: 'Loading...'}));
    const [partnersASPH, setPartnersASPH] = useState(Array(4).fill({ name: 'Loading...'}));

    useEffect(() => {
        const fetchPartnersNPC = async () => {
          const partnersNPCCollection = collection(db, 'partnersNPC');
          const partnersNPCSnapshot = await getDocs(partnersNPCCollection);
          const partnersNPCList = partnersNPCSnapshot.docs.map(doc => doc.data());
          setPartnersNPC(partnersNPCList);
        };
    
        const fetchPartnersASPH = async () => {
          const partnersASPHCollection = collection(db, 'partnersASPH');
          const partnersASPHSnapshot = await getDocs(partnersASPHCollection);
          const partnersASPHList = partnersASPHSnapshot.docs.map(doc => doc.data());
          setPartnersASPH(partnersASPHList);
        };
    
        fetchPartnersNPC();
        fetchPartnersASPH();
      }, []);

    return (
        <div className="flex flex-col my-8 w-full overflow-x-hidden">
            <h1 className="text-5xl font-bold text-center mb-8 mt-4">Partnered Organizations</h1>
            <div className="bg-blue-300 h-84 flex justify-center items-center">
                <div className="text-center p-10 max-w-7xl mx-auto">
                    <p className="text-lg text-center lg:w-2/5 md:w-4/5 sm:w-full mx-auto">
                        VA Tutors has partnered with many organizations to help serve the community and provide the best for our students.
                    </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScfX_79mqaSiYzR-Wr2vpXv_UGkHplhl06xSonLSBGFcloEjw/viewform" 
                        target="_blank" rel="noopener noreferrer" className="flex-1">
                        <button className="bg-white text-blue-500 w-2/3 md:w-1/2 lg:w-1/3 py-2 px-2 mt-4 text-lg rounded-lg shadow-md hover:bg-gray-100 transition duration-500">
                            Sign up to become a partner!
                        </button>
                    </a>
                    <p className="mt-6 text-lg text-center lg:w-2/5 md:w-4/5 sm:w-full mx-auto">
                        We will contact you via email as soon as possible to revise and detail the partnership. We can't wait to work with you and better 
                        the Research Triangle Park community together!
                    </p>
                </div>
            </div>
            <div className="bg-cyan-800 h-28 flex justify-center items-center">
                <h2 className="text-center text-bold text-white text-3xl sm:text-2xl md:text-3xl lg:text-3xl p-10">Partnered Non-Profits and Companies</h2>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
                    {partnersNPC.map((partner, index) => (
                        <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                            <a href={partner.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <img 
                                    src={partner.imageURL}
                                    alt={partner.name}
                                    className="rounded-lg w-60 mx-auto h-60 mb-4" 
                                />
                            </a>
                            <a href={partner.url} target="_blank" rel="noopener noreferrer">
                                <h3 className="text-xl font-semibold text-center text-blue-500 underline mb-2">{partner.name}</h3>
                            </a>
                            <p className="text-center">{partner.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-cyan-800 h-28 flex justify-center items-center">
                <h2 className="text-center text-bold text-white text-3xl sm:text-2xl md:text-3xl lg:text-3xl p-10">Partnered After-School Programs and Hospitals</h2>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
                    {partnersASPH.map((partner, index) => (
                        <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                            <a href={partner.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <img 
                                    src={partner.imageURL}
                                    alt={partner.name}
                                    className="rounded-lg w-60 mx-auto h-60 mb-4" 
                                />
                            </a>
                            <a href={partner.url} target="_blank" rel="noopener noreferrer">
                                <h3 className="text-xl font-semibold text-center text-blue-500 underline mb-2">{partner.name}</h3>
                            </a>
                            <p className="text-center">{partner.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
