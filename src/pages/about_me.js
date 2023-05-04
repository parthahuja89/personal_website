export default function About() {
    return (
        <div className="about" style={{marginTop:'5%'}}>
            <div className="grid grid-cols-3">
            <div className="hidden col-span-1 md:block section-text justify-self-start text-white">
                <div className="pink"> 01/03 </div> <div className="subtext"> About </div>
            </div>
            <div className="relative">
                <div className="w-screen max-w-xl sm:max-w-xl flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                    <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div className="about">
                        I am currently a grad student (12/2023 graduation date 🤞) I like learning about different fields from bioinformatics to machine learning. Some of the stuff I&apos;ve worked on ranges from full-stack web applications to visualizing galaxy clusters with 5 Million points!<br/><br/>
                        <span href="#" className="about font-semibold text-gray-900">
                        Education
                        <span className="absolute inset-0"></span>
                        </span>
                        <p className="mt-1 text-gray-600">Purdue University, MS CS 2022-2023</p>
                        <p className="mt-1 text-gray-600">University at Buffalo, BS CS 2017-2021</p>
                    </div>
                    </div>
                    <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div>
                        <span href="#" className="font-semibold text-gray-900">
                        Work Experience
                        <span className="absolute inset-0"></span>
                        </span>
                        <p className="mt-1 text-gray-600 pink">LabCorp (Software Intern) May 2023 - Aug 2023</p>
                        <p className="mt-1 text-gray-600">- (Upcoming) </p>
                        <p className="mt-1 text-gray-600 pink">Citrix (Software Intern) May 2020 - Aug 2020</p>
                        <p className="mt-1 text-gray-600">- Developed an automated tool in Jenkins that can update and test up to 1000 project dependencies concurrently </p>
                        <p className="mt-1 text-gray-600 pink">Willis Towers Watson (Software Intern) Aug 2019 - May 2020</p>
                        <p className="mt-1 text-gray-600">- Developed an API using .NET and SQL that stores credit card and other payment information as encrypted data </p>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}