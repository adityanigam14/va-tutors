import collegesImage from '../imagery/colleges.png';

export default function Services() {
    return (
        <div className="flex flex-col my-8">
            <h1 className="text-5xl font-bold text-center mb-8 mt-4">Our Services</h1>
            <div className="bg-blue-300 h-84 flex justify-center items-center">
                <div className="text-center p-10 max-w-7xl">
                    <h2 className="text-3xl font-bold text-center">1 on 1 Tutoring</h2>
                    <p className="mt-4 text-lg text-center">
                        VA Tutors offers a wide range of K-12 courses for free 1 on 1 tutoring. We accept all skill levels and differences.\
                        Classes are online by default. If you wish to have in-person tutoring, contact us and we will try to accommodate your request.
                    </p>
                    <h3 className="mt-8 text-2xl font-bold text-center">Courses</h3>
                    <ul className="mt-4 text-lg list-disc list-inside text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <li>Elementary school subjects</li>
                        <li>Middle school subjects</li>
                        <li>Math 1-4</li>
                        <li>English 1-3</li>
                        <li>Spanish 1-4</li>
                        <li>SAT and ACT preparation</li>
                        <li>Over 15 AP courses</li>
                        <li>Dual enrollment courses</li>
                        <li>High school science/social studies</li>
                    </ul>
                    <div className="mt-8 flex justify-center space-x-4">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSevuNn5JBRJVmhptpQnA0ZsvqWvQRZo1AVa1j7ojpVkkwfG-w/viewform" 
                            target="_blank" rel="noopener noreferrer" className="flex-1">
                            <button className="bg-white text-blue-500 w-full py-2 text-lg rounded-lg shadow-md hover:bg-gray-100 transition duration-500">
                                Request 1-on-1 tutoring
                            </button>
                        </a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvH0_aKdhefsqPAf1uGdWudKTIgboS202ugUTHJgWxEAmDDg/viewform"
                            target="_blank" rel="noopener noreferrer" className="flex-1">
                            <button className="bg-white text-blue-500 w-full py-2 text-lg rounded-lg shadow-md hover:bg-gray-100 transition duration-500">
                                Become a 1-on-1 tutor
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-cyan-800 h-28 flex justify-center items-center">
                <h2 className="text-center text-bold text-white text-3xl p-10">College Counseling</h2>
            </div>
            <div className="flex flex-col items-center py-8 bg-blue-200">
                <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 p-10">
                    <div>
                        <p className="text-lg mb-4">
                            As of 2023, VA Tutors provides personalized, effective, and accessible college admission guidance to students from all backgrounds. We offer assistance with writing personal and supplemental essays, compiling resumes, searching for colleges, reviewing applications, and helping with scholarship procedures.
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEoWlAONi_K1tMU_bA2cvy23rLCaozs1InxYlmQ2Sbi2H4Eg/viewform" 
                            target="_blank" rel="noopener noreferrer">
                            <button className="bg-white text-blue-500 w-full py-2 text-lg rounded-lg shadow-md hover:bg-gray-100 transition duration-500 mb-4">
                                Request a College Advisor
                            </button>
                        </a>
                        <p className="text-lg mb-4">
                            We have also recently partnered with an LLM platform, Skylow, that allows users to instantly communicate with students from their dream schools. While you wait to be paired with one of our college application advisors, Skylow has free and premium features that will propel you in your application journey.
                        </p>
                        <a href="https://skylow.ai/" target="_blank" rel="noopener noreferrer">
                            <button className="bg-white text-blue-500 w-full py-2 text-lg rounded-lg shadow-md hover:bg-gray-100 transition duration-500 mb-4">
                                Access the AI Tool
                            </button>
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={collegesImage} alt="Colleges" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    );
}
