export default function Feedback() {
    return (
        <div className="flex flex-col my-8 w-screen">
            <h1 className="text-5xl font-bold text-center mb-8 mt-4">Feedback</h1>
            <div className="bg-blue-300 h-84 flex justify-center items-center">
                <div className="text-center p-10 max-w-7xl">
                    <p className="text-lg text-center lg:w-2/3 lg:mx-auto">
                        VA Tutors deeply values all forms of feedback to help our organization grow to be the best it can be. 
                        Please access the form below and share how tutoring lessons from VA impacted you. Even if you took just
                        one class from VA, your feedback will enable us to provide higher quality preparation for our students 
                        and shape our tutors to become better mentors.
                    </p>
                </div>
            </div>
            <div className="flex justify-center my-12">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd1I-VNexDHu5n6bIPBuhSfwLZbOF9qgCAYONut4Y4UqaynKQ/viewform" 
                    className="w-full md:w-2/3 lg:w-1/2 mx-8" 
                    height="600"
                    title="Feedback Form"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
}
