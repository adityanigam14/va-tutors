import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js'; 

const Team = () => {
  const [boardMembers, setBoardMembers] = useState(Array(6).fill({ name: 'Loading...'}));
  const [tutors, setTutors] = useState(Array(6).fill({ name: 'Loading...'}));

  useEffect(() => {
    const fetchBoardMembers = async () => {
      const boardMembersCollection = collection(db, 'boardMembers');
      const boardMembersSnapshot = await getDocs(boardMembersCollection);
      const boardMembersList = boardMembersSnapshot.docs.map(doc => doc.data());
      setBoardMembers(boardMembersList);
    };

    const fetchTutors = async () => {
      const tutorsCollection = collection(db, 'tutors');
      const tutorsSnapshot = await getDocs(tutorsCollection);
      const tutorsList = tutorsSnapshot.docs.map(doc => doc.data());
      setTutors(tutorsList);
    };

    fetchBoardMembers();
    fetchTutors();
  }, []);

  return (
    <div className="flex flex-col my-8 w-full">
        <h1 className="text-5xl font-bold text-center mb-8 mt-4">Our Team</h1>
        <div className="bg-blue-300 h-84 flex justify-center items-center">
            <div className="text-center p-10 max-w-7xl mx-auto">
                <p className="text-lg text-center lg:w-2/5 md:w-4/5 sm:w-full mx-auto">
                    Meet our team of bright and passionate student tutors
                    and leaders, committed to making a lasting difference in the community through education.
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvH0_aKdhefsqPAf1uGdWudKTIgboS202ugUTHJgWxEAmDDg/viewform"
                    target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="bg-white text-blue-500 w-2/3 md:w-1/2 lg:w-1/3 py-2 px-2 mt-4 text-lg rounded-lg shadow-md hover:bg-gray-100 transition duration-500">
                        Join our team
                    </button>
                </a>
            </div>
        </div>
        <div className="bg-cyan-800 h-28 flex justify-center items-center">
            <h2 className="text-center text-bold text-white text-3xl p-10">Executive Board</h2>
        </div>
        <div className="p-8 overflow-x-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {boardMembers.map((member, index) => (
                    <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                        <div className="flex flex-col items-center">
                            <img 
                                src={member.imageURL}
                                alt={member.name}
                                className="rounded-lg w-60 mx-auto h-60"
                            />
                            <h3 className="mt-4 text-xl font-bold">
                                {member.name}
                            </h3>
                            <p className="mt-2 font-bold text-gray-500">{member.position}</p>
                            <p className="mt-2 text-gray-700">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-cyan-800 h-28 flex justify-center items-center">
            <h2 className="text-center text-bold text-white text-3xl p-10">Current Tutors</h2>
        </div>
        <div className="p-8 overflow-x-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {tutors.map((tutor, index) => (
                    <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                        <div className="flex flex-col items-center">
                            <img 
                                src={tutor.imageURL}
                                alt={tutor.name}
                                className="rounded-lg w-60 mx-auto h-60"
                            />
                            <h3 className="mt-4 text-xl font-bold">
                                {tutor.name}
                            </h3>
                            <p className="mt-2 font-bold text-gray-500">{tutor.school}, '{tutor.gradClass}</p>
                            <p className="mt-2 text-gray-700">{tutor.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Team;
