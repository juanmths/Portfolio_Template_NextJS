import Navbar from "./Navbar"
import Button from "./Button"

export default function hero() {
    return (
        <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
        <div className="container mx-auto px-10 2xl:p-0">
          <Navbar />
          <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
            <h1 className="text-3xl font-semibold font-mono text-white 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed">
            I am a back-end engineer, and a front-end engineer 
            </h1>
            <p className="text-white text-opacity-60 text-lg 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-6 leading-relaxed">
            I have more or less 2 years experience in the world of web developer.
            </p>
            <Button pill className="mt-14" variant="yellow" href="#contact">Hire me</Button>
          </div>
        </div>
      </div>
    )
}