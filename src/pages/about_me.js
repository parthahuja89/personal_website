export default function About() {
    return (
        <div class="about" style={{marginTop:'5%'}}>
            <div class="grid grid-cols-3">
            <div className="hidden col-span-1 md:block section-text justify-self-start text-white">
                <div className="pink inline-block"> // 01 </div> About
                <hr class="inline-block border-1 border-gray-500 ml-2 w-20 h-2"></hr>
            </div>
            <div className="relative">
                <div class="w-screen max-w-md sm:max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div class="p-4">
                    <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div class="about">
                        I am currently a grad student (12/2023 graduation date 🤞) I like learning about different fields from bioinformatics to machine learning. Some of the stuff I've worked on ranges from full-stack web applications to visualizing galaxy clusters with 5 Million points!<br/><br/>
                        <span href="#" class="about font-semibold text-gray-900">
                        Education
                        <span class="absolute inset-0"></span>
                        </span>
                        <p class="mt-1 text-gray-600">Purdue University, MS CS 2022-2023</p>
                        <p class="mt-1 text-gray-600">University at Buffalo, BS CS 2017-2021</p>
                    </div>
                    </div>
                    <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div>
                        <span href="#" class="font-semibold text-gray-900">
                        Work Experience
                        <span class="absolute inset-0"></span>
                        </span>
                        <p class="mt-1 text-gray-600 pink">LabCorp (Software Intern) May 2023 - Aug 2023</p>
                        <p class="mt-1 text-gray-600">- (Upcoming) </p>
                        <p class="mt-1 text-gray-600 pink">Citrix (Software Intern) May 2020 - Aug 2020</p>
                        <p class="mt-1 text-gray-600">- Developed an automated tool in Jenkins that can update and test up to 1000 project dependencies concurrently </p>
                        <p class="mt-1 text-gray-600 pink">Willis Towers Watson (Software Intern) Aug 2019 - May 2020</p>
                        <p class="mt-1 text-gray-600">- Developed an API using .NET and SQL that stores credit card and other payment information as encrypted data </p>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}