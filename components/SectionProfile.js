import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionProfile() {
    return (
        <section className="py-28" id="profile">
            <div className="container mx-auto px-10 2xl:p-0">
                <SectionTitle>Profile</SectionTitle>
                <SectionParagraph>Get to know me briefly.</SectionParagraph>
                <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
                    <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
                        <img src="/profile.png" className="w-full" alt="profile" />
                        
                    </div>
                    <div className="md:w-7/12 w-full px-10">
                        <p className="text-lg leading-relaxed"> I am a back-end engineer, and a front-end engineer with approximately 2 years of experience. I am a graduate of the Bachelor of Informatics Engineering in 2021 from the Satya Wacana Christian University, Salatiga.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}