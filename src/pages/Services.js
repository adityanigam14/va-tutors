export default function Services() {
    return (
        <div className="flex flex-col my-8">
            <h1 className="text-6xl font-bold text-center mb-8 mt-4">Our Services</h1>
            <div className="bg-blue-300 w-screen h-84 flex justify-center items-center">
                <div className="text-center p-10 max-w-7xl">
                    <h2 className="text-3xl font-bold text-center">1 on 1 Tutoring</h2>
                    <p className="mt-4 text-lg text-center">
                        VA Tutors offers a wide range of K-12 courses for free 1 on 1 tutoring. We accept all skill levels and differences.
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
            <div className="bg-cyan-800 w-screen h-28 flex justify-center items-center">
                <h2 className="text-center text-bold text-white text-3xl p-10">By the Numbers</h2>
            </div>
        </div>
    );
}

