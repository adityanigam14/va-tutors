import React from 'react';

const importAll = (r) => r.keys().map(r);
const imagesNPC = importAll(require.context('../imagery/partnersNPC', false, /\.(png|jpe?g|svg)$/));
const imagesASPH = importAll(require.context('../imagery/partnersASPH', false, /\.(png|jpe?g|svg)$/));

export default function Services() {
    const titlesNPC = [
        "Cary Teen Council",
        "EdMotion",
        "Givefinity",
        "Key Club",
        "Morrisville Youth Leadership Council",
        "RTP Rotary Club",
        "Skylow AI",
        "The Wakaboomee Program",
    ];

    const titlesASPH = [
        "All About Melanated Excellence",
        "Fayetteville Street Elementary School",
        "iLead Kids",
        "P.O.O.F.",
        "Purpose Learning Lab",
        "RWA Center",
        "Taylor Family YMCA",
    ];

    const descriptionsNPC = [
        "Cary Teen Council’s mission is to empower youth and enrich communities through teen-led volunteerism. This organization has 800+ active Cary teen volunteers who demonstrate leadership and a heart of service by assisting at local events, attending civic and leadership-building forums, and host their own sponsored community events.",
        "EdMotion's SMALLab is an advanced 3D mixed reality classroom that fosters curiosity, teamwork, and discovery through whole-body movements. Supported by grants from the National Science Foundation, the Bill and Melinda Gates Foundation, and Intel, SMALLab enhances student understanding by 86%, engagement by 6.7X, and teacher performance by 33%.",
        "Givefinity allows volunteer organizations to manage their programs effortlessly. Givefinity simplifies your administrative work, accelerates your daily operations, and vividly demonstrates your group’s positive impact. It generates detailed reporting on the hours of each member and a clear view of the impact your organization is making.",
        "Key Club, the oldest and largest high school service program, is a student-led organization that fosters leadership through community service. With about 250,000 members across 5,000 clubs in 30 countries, Key Club members enhance their schools and communities. VA Tutors has partnered with three Key Clubs in the RTP area: Panther Creek, Green Hope, and Apex Friendship.",
        "Morrisville Youth Leadership Council is a 501(c)(3) licensed non-profit organization partnership with the Town of Morrisville that promotes leadership and service within the Morrisville Youth community. It does this through a wide range of youth-led volunteering events.",
        "RTP Rotary Program 501(c)(3) is a STEAM club dedicated to providing service to others, promoting integrity, and advancing world understanding, goodwill, and peace through our fellowship of business, professional, and community leaders.",
        "Skylow AI is an AI-powered college admission app. The tool allows users to connect with college students from their dream schools and receive immediate responses, propelling them in their academic journeys.",
        "The Wakaboomee Program 501(c)(3) provides STEAM Education to children in the form of numerous activities. These include Coding, Mindfulness, Yoga, Music, Chess, Tae Kwon Do, Art, Science, Zumba, Tutoring and so much more!",
    ];

    const descriptionsASPH = [
        "In April 2019, All About Melanated Excellence CEC began as a tutoring service for children ages 5-12 in Southeast Raleigh. As demand grew, parents requested additional services, highlighting a need for quality childcare in the area. In response, the organization planned to expand into childcare. Despite pandemic-related challenges and educator burnout, the opportunity arose to open a dedicated childcare center in 2021, and the All About M.E. CEC. was created.",
        "Fayetteville Street School is a traditional K-5 school that provides a 1:20 teacher/student ratio. Teachers engage students in varied and innovative instructional techniques and strategies. Parents are an integral part of the learning process. The school views parental involvement as a critical aspect of the many educational initiatives we have undertaken with our students.",
        "iLead Kids is a versatile organization specializing in summer camps, track-out camps, and half-day before and after-school care for pre-K students. Their comprehensive programs encompass STEAM development, team building, homework assistance, academic enrichment, and leadership workshops, which ensure a well-rounded and enriching experience for young learners.",
        "P.O.O.F is a double acronym that stands for Planning Our Own Future/Funerals. It is an entrepreneurship Program that provides Durham teens ages 13-17 with the opportunity to learn the skills necessary to become an entrepreneur. They emphasize teaching the building blocks of becoming an entrepreneur, along with preparing for life finances such as opening bank accounts and obtaining insurance.",
        "Purpose Learning Lab empowers youth through enrichment and wellness programs that foster confidence, innovation, and academic growth. They offer pathways for minority students to explore STEM and Integrated Arts careers through labs, in-class wellness workshops, after-school programs, private tutoring, summer camps, mentorship, entrepreneurship, substance abuse education, and access to mental health services.",
        "The RWA Center is a non-profit organization that believes that every child deserves to be offered the best opportunities to thrive. Their mission is to provide 'comprehensive education & support services ....from cradle to career.' Their vision is to educate, equip, and empower children & youth and their families, especially those in at-risk, underserved, and special needs communities.",
        "The Taylor Family YMCA is committed to nurturing the potential of children through Youth Development, improving the nation’s health and well-being by promoting Healthy Living, and fostering a sense of Social Responsibility by providing opportunities to give back and support neighbors.",
    ];

    const linksNPC = [
        "https://www.caryteencouncil.com/",
        "https://www.edmotionlearning.com/",
        "https://www.givefinity.com/",
        "https://www.keyclub.org/",
        "https://morrisvilleyouth.weebly.com/",
        "https://www.linkedin.com/in/rtprotary/",
        "https://www.skylow.ai/",
        "https://www.wakaboomers.com/",
    ];

    const linksASPH = [
        "https://www.allaboutmecec.com/",
        "https://www.dpsnc.net/fayetteville-street/",
        "https://www.ileadkidscamp.com/",
        "https://www.poofcenter.com/",
        "https://www.purposelearninglab.org/",
        "https://www.rwanc.org/",
        "https://www.ymcatriangle.org/locations/taylor-family-ymca/",
    ];

    return (
        <div className="flex flex-col my-8 w-screen">
            <h1 className="text-6xl font-bold text-center mb-8 mt-4">Partnered Organizations</h1>
            <div className="bg-blue-300 h-84 flex justify-center items-center">
                <div className="text-center p-10 max-w-7xl">
                    <p className="text-lg text-center">
                        VA Tutors has partnered with many organizations to help serve the community and provide the best for our students.
                    </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScfX_79mqaSiYzR-Wr2vpXv_UGkHplhl06xSonLSBGFcloEjw/viewform" 
                        target="_blank" rel="noopener noreferrer" className="flex-1">
                        <button className="bg-white text-blue-500 lg:w-1/3 md:w-1/2 sm:w-full py-2 px-2 mt-4 text-lg rounded-lg shadow-md hover:bg-gray-100 transition duration-500">
                            Sign up to become a partner!
                        </button>
                    </a>
                    <p className="mt-6 text-lg text-center w-1/2 mx-auto">
                        We will contact you via email as soon as possible to revise and detail the partnership. We can't wait to work with you and better 
                        the Research Triangle Park community together!
                    </p>
                </div>
            </div>
            <div className="bg-cyan-800 h-28 flex justify-center items-center">
                <h2 className="text-center text-bold text-white text-3xl p-10">Partnered Non-Profits and Companies</h2>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {imagesNPC.map((src, index) => (
                        <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                            <a href={linksNPC[index]} target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={src}
                                    alt={`${titlesNPC[index]}`}
                                    className="rounded-lg w-2/3 mx-auto h-72"
                                />
                            </a>
                            <div className="mt-4 flex flex-col items-center">
                                <h3 className="text-xl font-bold">
                                    <a href={linksNPC[index]} target="_blank" rel="noopener noreferrer" className="underline text-blue-500">
                                        {titlesNPC[index] || "No title available"}
                                    </a>
                                </h3>
                                <p className="mt-2 text-gray-700">{descriptionsNPC[index]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-cyan-800 h-28 flex justify-center items-center">
                <h2 className="text-center text-bold text-white text-3xl p-10">Partnered Schools and Organizations</h2>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {imagesASPH.map((src, index) => (
                        <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md h-full">
                            <a href={linksASPH[index]} target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={src}
                                    alt={`${titlesASPH[index]}`}
                                    className="rounded-lg w-2/3 mx-auto h-72"
                                />
                            </a>
                            <div className="mt-4 flex flex-col items-center">
                                <h3 className="text-xl font-bold">
                                    <a href={linksASPH[index]} target="_blank" rel="noopener noreferrer" className="underline text-blue-500">
                                        {titlesASPH[index] || "No title available"}
                                    </a>
                                </h3>
                                <p className="mt-2 text-gray-700">{descriptionsASPH[index]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
