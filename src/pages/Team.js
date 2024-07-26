import React from 'react';

export default function Team() {
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../pfps', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="bg-blue-200 flex flex-col text-center h-screen mb-8">
            <div>
                <h1 className="text-4xl font-bold mt-10">Our Team</h1>
                <p className="text-xl mt-4 max-w-4xl mx-auto">Meet our team of bright and passionate student tutors
                    and leaders, committed to making a difference in the community through education.</p>
                <hr className="mt-8 border-1 border-black"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {images.map((src, index) => (
                    <div key={index} className="flex justify-center">
                        <img src={src} alt={`Team member ${index + 1}`} className="w-full h-auto object-cover"/>
                    </div>
                ))}
            </div>
        </div>
    );
}
