import React from 'react';

const importAll = (r) => r.keys().map(r);
const imagesBoard = importAll(require.context('../imagery/board', false, /\.(png|jpe?g|svg)$/));
const imagesTutors = importAll(require.context('../imagery/tutors', false, /\.(png|jpe?g|svg)$/));

export default function Team() {
    const namesBoard = [
        'Vraj Parikh',
        'Dharan Kadakia',
        'Aashish Anantharaman',
        'Pranav Thota',
        'Sana Mittal',
        'Juliana Tolentino',
    ];

    const namesTutors = [
        'Aashvi Patel',
        'Advait Cheruku',
        'Agata Tulchinskaya',
        'Anay Ravindra',
        'Anice Jackson',
        'Bhuwan Bashyal',
        'Chandana Herlekar',
        'Gianna Gupta',
        'Hasini Janakanoori',
        'Himank Kadakia',
        'Kriya Patel',
        'Nevinka Lenora',
        'Prabin Adhikari',
        'Pranjal Rawat',
        'Ridhima Mahajan',
        'Sejal Seavey',
        'Sibi Santharaam',
        'Vanshi Mota'
    ]

    const positionsBoard = [
        'Founder',
        'President',
        'Vice President',
        'Secretary',
        'Marketing Coordinator',
        'Video Production Manager'
    ];

    const biosBoard = [
        "My name is Vraj Parikh, and I am a sophomore at UNC-Chapel Hill. I created VA Tutors because I realized that not every student has the same opportunity to learn as there are different circumstances in each student's life. In addition, my desire to help the community and my passion for tutoring further pushed me to create this organization.",
        "My name is Dharan Kadakia, and I am a senior at Panther Creek High School. I have always wanted to help others succeed in any way I can, and this is the reason I joined VA Tutors. I will do my best to help students who are struggling and make sure they feel confident in what they are learning.",
        "My name is Aashish Anantharaman, and I am a senior at Panther Creek High School. Some of my hobbies include taekwondo as well as programming. I initially joined VA Tutors in my sophomore year, and I have enjoyed being able to help students grow and reach the best of their abilities.",
        "My name is Pranav Thota, and I’m a junior at Panther Creek High School. I am passionate to help students by contributing to the community. I'm excited about the chance to make a positive impact through tutoring. I enjoy teaching and believe this is an excellent opportunity to do so.",
        "My name is Sana Mittal and I am a senior at Panther Creek High School. Some of my hobbies include swimming, Taekwondo, and listening to music. I joined VA tutors so I can use my knowledge and passions to make an impact on kids who are facing academic challenges. I believe this program is an amazing way to give back to our community, and I am excited to be able to help those in need!",
        "My name is Juliana Tolentino, and I am a junior at Panther Creek High School. As a fellow student who also experienced struggling in academics, I realized how much support we all need and how, most of the time, we find it hard to get academic assistance, which is why I joined VA Tutors to lend a lending hand to students like me. I hope to share my knowledge and skills to enhance students' understanding and drive for learning.",
    ];

    const biosTutors = [
        "My name is Aashvi Patel and I am a sophomore at the Wake Early College of Information and Biotechnologies. I have experience teaching kids, and I strive to lead them to reaching higher test scores. I've helped a few children raise their scores.",
        "My name is Advait Cheruku and I’m a sophomore at Panther Creek High School, I joined VA Tutors because I needed some volunteer hours and a professional environment around me. Some of my interests and hobbies are playing and watching soccer. ",
        "My name is Agata Tulchinskaya and I am a freshman at NC State University. I love helping kids, and VA Tutors is a perfect way of doing that. I believe that teaching can help kids succeed in the future and propel themselves forward.",
        "My name is Anay Ravindra, and I am a senior at Panther Creek High School. I joined VA Tutors because I wanted to help others who faced similar challenges in the courses I have already taken, and hopefully make their learning process easier. I hope to make an impact on my students and help them take what they learn from me into the classroom to succeed.",
        "My name is Anice, I’m a junior. So far, my experience as a VA Tutor is pleasant! My first session was the sweetest first grader. She is an incredibly gifted little girl and I had fun teaching her. I am anticipating my next session with a positive attitude.",
        "Hi, my name is Bhuwan Bashyal, and I am a freshman at Panther Creek High School. I love reading books in my free time. I joined VA Tutors because I can share my knowledge with others and make a difference in the community. I will make sure you are comfortable with your upcoming class!",
        "My name is Chandana Herlekar, and I am a sophomore at Cary High School. I am particularly interested in biology, history, and literature, although I enjoy tutoring other subjects as well! I joined VA tutors as I love the idea of passing on my knowledge from previous classes and using it to mentor younger students.",
        "My name is Gianna, and I am a sophomore at Panther Creek High School, and I really like sports, I love to read, and I love music, and play piano. I have really liked tutoring in VA tutors because it’s given me an opportunity to help kids and be there to help them.",
        "Hi, I’m Hasini Janakanoori, and I am a senior at Panther Creek High School. Being a part of this organization has been one of the best decisions I’ve made! Outside of school, I love to bake and spend time with friends and family. I’m looking forward to growing the organization and helping more students in the upcoming year!",
        "My name is Himank Kadakia and am a freshman at Panther Creek High School. I am interested in teaching and volunteering through tutoring because I like to watch others succeed. Some of my hobbies include playing sports and hanging out with my friends.",
        "My name is Kriya Patel, I'm a senior at Panther Creek High School and my favorite hobbies include dancing, painting, and photography. I haven’t had much experience with VA Tutors specifically but I have tutored kids in the past.",
        "My name is Nevinka Lenora, and I am a sophomore at Thales Academy. Some of my passions are psychology and teaching, and I love applying these interests when I mentor students at VA Tutors. In my free time, I enjoy ice skating and reading.",
        "My name is Prabin Adhikari, and I am a sophomore in Panther Creek High School. I joined VA Tutors because I enjoy teaching younger kids, as it makes a difference in the community and I can grow as a mentor. In my free time, I enjoy spending time with my friends and playing sports.",
        "My name is Pranjal Rawat, and I am a senior at Willow Spring High School. I like to listen to diverse genres of music and play cricket in my free time. I’ve been teaching my friends at school by creating a friendly and productive environment. Now, I would like to help the whole community with the same passion.",
        "My name is Ridhima Mahajan, and I am a junior at Panther Creek High School. Some things I like include baking, dancing, and music, and my favorite subjects are math and science. I believe having a positive mindset toward these subjects can make them easier and more enjoyable for students, which is why I began tutoring. My experience with everyone has been great so far, and I hope it is the same for you!",
        "My name is Sejal, and graduated from Cary High School. I have always loved school, but I understand that for some students, it may be difficult to get through. I think it's best to have someone around the same age as you to be your mentor as you can relate and understand better that way. I have a strong interest in teaching and want to help struggling students make the most of their school experience!",
        "My name is Sibi Santharaam, and I am a junior at Panther Creek High School. I decided to join VA Tutors to help others succeed in their classes and share knowledge to give back to the community. I hope to help kids who are having trouble in their classes and to create a long-lasting pathway for future generations to grow through these footsteps, aiming to make a difference by contributing to the future of stdents and tutors.",
        "My name is Vanshi Mota, and I am a senior at Panther Creek High School. I enjoy playing beach volleyball and dancing in my free time. I joined VA Tutors to help younger kids grow to reach their full potential and build confidence in themselves!",



    ]

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
                    {imagesBoard.map((src, index) => (
                        <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                            <img 
                                src={src}
                                alt={`${namesBoard[index]}`}
                                className="rounded-lg w-60 mx-auto h-60"
                            />
                            <div className="mt-4 flex flex-col items-center">
                                <h3 className="text-xl font-bold">
                                    {namesBoard[index] || "No title available"}
                                </h3>
                                <p className="mt-2 font-bold text-gray-500">{positionsBoard[index]}</p>
                                <p className="mt-2 text-gray-700">{biosBoard[index]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-cyan-800 h-28 flex justify-center items-center">
                <h2 className="text-center text-bold text-white text-3xl p-10">Current Tutors</h2>
            </div>
            <div className="p-8 overflow-x-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
                    {imagesTutors.map((src, index) => (
                        <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                            <img 
                                src={src}
                                alt={`${namesTutors[index]}`}
                                className="rounded-lg w-60 mx-auto h-60"
                            />
                            <div className="mt-4 flex flex-col items-center">
                                <h3 className="text-xl font-bold">
                                    {namesTutors[index] || "No title available"}
                                </h3>
                                <p className="mt-2 text-gray-700 text-center">{biosTutors[index]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
