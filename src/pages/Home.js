import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js'; 
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Home() {
    const [awards, setAwards] = useState([]);
    const [engagement, setEngagement] = useState([]);

    useEffect(() => {
        const fetchAwards = async () => {
          const awardsCollection = collection(db, 'awards');
          const awardsSnapshot = await getDocs(awardsCollection);
          const awardsList = awardsSnapshot.docs.map(doc => doc.data());
          setAwards(awardsList);
        };
    
        const fetchEngagement = async () => {
          const engagementCollection = collection(db, 'engagement');
          const engagementSnapshot = await getDocs(engagementCollection);
          const engagementList = engagementSnapshot.docs.map(doc => doc.data());
          setEngagement(engagementList);
        };
    
        fetchAwards();
        fetchEngagement();
      }, []);

    const stats = [
        { number: '200+', text: 'students tutored' },
        { number: '1200+', text: 'hours tutored' },
        { number: '15', text: 'partnered organizations' },
    ];

    const StatCard = ({ stat }) => {
        const { ref, inView } = useInView({ triggerOnce: true });

        return (
            <div ref={ref} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold">
                    {inView && (
                        <CountUp
                            start={0}
                            end={parseInt(stat.number.replace('+', ''))}
                            duration={2.5}
                            separator=","
                            preserveValue
                            suffix={stat.number.includes('+') ? '+' : ''}
                        />
                    )}
                </div>
                <div className="text-lg mt-2 text-gray-600">{stat.text}</div>
            </div>
        );
    };

    return (
        <div className="flex flex-col my-8 w-full overflow-x-hidden">
            <h1 className="text-5xl font-bold text-center mb-8 mt-4">VA Tutors</h1>
            <div className="bg-blue-300 h-84">
                <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-10 max-w-7xl mx-auto">
                    <div className="flex flex-col items-center justify-center p-4">
                        <h2 className="text-3xl font-bold">Learning Together, Growing Together</h2>
                        <p className="text-lg mt-4">VA Tutors is a free tutoring organization from North Carolina aimed to mentor students worldwide. We provide a multitude of services including K-12 tutoring, SAT and ACT preparation, and college counseling. Run by high-achieving students, we strive to provide everyone the opportunity to learn and succeed.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 p-4">
                        <p className="font-bold text-xl">Ready to join our team? Click below to apply to be a tutor!</p>

                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvH0_aKdhefsqPAf1uGdWudKTIgboS202ugUTHJgWxEAmDDg/viewform"
                        target="_blank" rel="noopener noreferrer" className="w-full">
                            <button className="bg-white text-blue-500 w-full py-2 text-lg rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                                Apply to be a Tutor
                            </button>
                        </a>

                        <p className="font-bold text-xl">Looking to receive tutoring? Click below to request a tutor!</p>

                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSevuNn5JBRJVmhptpQnA0ZsvqWvQRZo1AVa1j7ojpVkkwfG-w/viewform"
                        target="_blank" rel="noopener noreferrer" className="w-full">
                            <button className="bg-white text-blue-500 w-full py-2 text-lg rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                                Request a Tutor
                            </button>
                        </a>
                        
                        <p className="mt-4 text-lg">After filling out either form, you will be contacted via phone/email and shortly be paired with a tutor/tutee who best matches 
                            your preferred subjects and needs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-cyan-800 h-28">
                <h2 className="text-center text-bold text-white text-3xl p-10">By the Numbers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 text-center my-10 mx-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                ))}
            </div>  
            <div className="bg-cyan-800 h-28">
                <h2 className="text-center text-bold text-white text-3xl p-10">Awards Received</h2>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {awards.map((award, index) => (
                    <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                        <img 
                            src={award.imageURL}
                            alt={award.name}
                            className="rounded-lg w-80 mx-auto h-60 mb-4"
                        />
                        <h3 className="text-xl font-semibold text-center text-blue-500 underline mb-2">{award.name}</h3>
                        <p className="text-center">{award.bio}</p>
                    </div>
                ))}
            </div>
            <div className="bg-cyan-800 h-28">
                <h2 className="text-center text-bold text-white text-3xl p-10">Public Engagement</h2>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {engagement.map((event, index) => (
                    <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                        <img 
                            src={event.imageURL}
                            alt={event.name}
                            className="rounded-lg w-60 mx-auto h-60 mb-4"
                        />
                        <h3 className="text-xl font-semibold text-center text-blue-500 underline mb-2">{event.name}</h3>
                        <p className="text-center">{event.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
