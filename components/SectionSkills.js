import SectionTitle from "./SectionTitle"
import SectionParagraph from "./SectionParagraph"
import SkillCard from "./SkillCard"

export default function SectionSkills () {
    return (
        <section className="py-28 bg-primarygray" id="skills">
            <div className="container mx-auto px-10 2xl:p-0">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraph>Some of my abilities.</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap justify-center">
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Laravel"
                            level="Expert"
                            image="/skills-icon/laravel.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Next JS"
                            level="Beginner"
                            image="/skills-icon/nextjs.svg"
                            imageClassName="h-16 w-20"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="React JS"
                            level="Beginner"
                            image="/skills-icon/react.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="PHP"
                            level="Intermediate"
                            image="/skills-icon/php.svg"
                            imageClassName="h-16 rounded-full w-20"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Bootstrap"
                            level="Expert"
                            image="/skills-icon/bootstrap.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Tailwind CSS"
                            level="Beginner"
                            image="/skills-icon/tailwindcss-icon.svg"
                            imageClassName="h-16 w-20"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="CSS"
                            level="Beginner"
                            image="/skills-icon/css-3.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="HTML 5"
                            level="Expert"
                            image="/skills-icon/html-5.svg"
                            imageClassName="h-16"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}