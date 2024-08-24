import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const importAll = (r) => r.keys().map(r);
const imagesAwards = importAll(require.context('../imagery/awards', false, /\.(png|jpe?g|svg)$/));
const imagesEngagement = importAll(require.context('../imagery/engagement', false, /\.(png|jpe?g|svg)$/));

export default function Home() {
    const stats = [
        { number: '200+', text: 'students tutored' },
        { number: '1200+', text: 'hours tutored' },
        { number: '15', text: 'partnered organizations' },
    ];

    const titlesAwards = [
        "2022 RTP Rotary Club Game Changer Award",
        "2023 RTP Rotary Hero Award",
        "Certificate of Acknowledgement of Exceptional Service",
    ];

    const titlesEngagement = [
        "Innovate Carolina Startup Connect",
        "Chipotle Benefit Night",
        "Episode 176 | Vraj Parikh | VA Tutors | The Knowledge Entrepreneurs Show",
    ];

    const descriptionsAwards = [
        "1 of 4 organizations/individuals chosen for performing outstanding community service in the RTP Area.",
        "1 of 5 organizations/individuals chosen for expressing continuous dedication to positively influence today's youth.",
        "1 of 8 organizations awarded by Representative Kanika Brown for exceptional service to North Carolina House District 71 and the Triad.",
    ];

    const descriptionsEngagement = [
        "Carolina Startup Connect offered students and startups two meet-and-greet events. These events gave students learning and career development opportunities with high-growth startup companies and social ventures in the Research Triangle region. Both sessions brought students together with local companies and nonprofits that were eager to work with talented students through internship and job opportunities.",
        "This fundraiser was a community-oriented event aimed at enhancing our organization by integrating more effective technological tools for our tutors. These upgrades enabled us to offer even more effective and dynamic tutoring services. Additionally, the funds raised will support our article production costs on Apple News and Google News, which will allow our organization to be further publicized.",
        "Vraj Parikh, the founder of VA Tutors, was invited to be a guest on the Knowledge Entrepreneurs Show by EdisonOS. During this podcast, which explores the world of knowledge commerce through the perspectives of leading entrepreneurs, Vraj shared his experiences in education, discussed his journey with VA Tutors, and gave his opinion on standardized tests.",
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
                {imagesAwards.map((src, index) => (
                    <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                        <img 
                            src={src}
                            alt={`${titlesAwards[index]} Logo`}
                            className="rounded-lg w-80 mx-auto h-60 mb-4"
                        />
                        <h3 className="text-xl font-semibold text-center text-blue-500 underline mb-2">{titlesAwards[index]}</h3>
                        <p className="text-center">{descriptionsAwards[index]}</p>
                    </div>
                ))}
            </div>
            <div className="bg-cyan-800 h-28">
                <h2 className="text-center text-bold text-white text-3xl p-10">Public Engagement</h2>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {imagesEngagement.map((src, index) => (
                    <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                        <img 
                            src={src}
                            alt={`${titlesEngagement[index]} Logo`}
                            className="rounded-lg w-60 mx-auto h-60 mb-4"
                        />
                        <h3 className="text-xl font-semibold text-center text-blue-500 underline mb-2">{titlesEngagement[index]}</h3>
                        <p className="text-center">{descriptionsEngagement[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
