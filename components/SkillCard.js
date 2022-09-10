export default function SkillCard ({ name, level, image, imageClassName }) {
    const addimageClassName = imageClassName ? `${imageClassName}` : "";
    return (
        <div className="bg-white shadow-skill rounded-lg p-6 flex item-center">
            <img src={ image } alt="icon" className={`mr-6 ${imageClassName}`} />
            <div className="">
                <h4 className="text-lg font-semibold">{ name }</h4>
                <p className="text-sm font-semibold text-gray-400 mt-1">{ level }</p>
            </div>
        </div>
    )
}