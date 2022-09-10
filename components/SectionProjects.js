import ProjectItem from "./SectionItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionProjects() {
    return (
        <section className="py-28" id="projects">
            <div className="container mx-auto px-10 2xl:p-0">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Some of my recent projects.</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="w-6/12 px-4 pb-8">
                        <ProjectItem 
                            name="Hasten"
                            description="Exporasi olanding page"
                            image="/projects/1.png"
                        />
                    </div>
                    <div className="w-6/12 px-4 pb-8">
                        <ProjectItem 
                            name="Resources"
                            description="Exporasi olanding page"
                            image="/projects/2.png"
                        />
                    </div>
                    <div className="w-6/12 px-4 pb-8">
                        <ProjectItem 
                            name="Resources"
                            description="Exporasi olanding page"
                            image="/projects/2.png"
                        />
                    </div>
                    <div className="w-6/12 px-4 pb-8">
                        <ProjectItem 
                            name="Hasten"
                            description="Exporasi olanding page"
                            image="/projects/1.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}