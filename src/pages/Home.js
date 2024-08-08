export default function Home() {
    const stats = [
        { number: '15+', text: 'active students' },
        { number: '1200+', text: 'hours tutored' },
        { number: '16', text: 'partnered organizations' },
        { number: '3', text: 'recognitions received' },
    ];

    return (
        <div className="flex flex-col my-8">
            <h1 className="text-5xl font-bold text-center mb-8 mt-4">VA Tutors</h1>
            <div className="bg-blue-300 w-screen h-84">
                <div className="text-center grid grid-cols-2 gap-4 p-10 max-w-7xl mx-auto">
                    <div className="flex flex-col items-center justify-center p-4">
                        <h2 className="text-3xl font-bold">Learning Together, Growing Together</h2>
                        <p className="text-lg mt-4">VA Tutors is a free tutoring organization from North Carolina aimed to help students worldwide. We provide various services including K-12 tutoring, SAT and ACT preparation, and college counseling. Run by high-achieving students, we strive to provide everyone the opportunity to learn and succeed.</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center m-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="text-4xl font-bold">{stat.number}</div>
                        <div className="text-lg mt-2 text-gray-600">{stat.text}</div>
                    </div>
                ))}
            </div>     
        </div>
    );
}
