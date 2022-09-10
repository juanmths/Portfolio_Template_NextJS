import classnames from "classnames"

export default function NavItem({ href, children, scheme }) {
    const schemes = {
        light: "text-white text-opacity-60 hover:text-opacity-100",
        dark: "text-black"
    }

    const pickedSchemes = schemes[scheme]

    return (
        <li>
            <a 
                href={href} 
                className={classnames("text-lg transition font-semibold", pickedSchemes)}
            >
                {children}
                </a>
        </li>
    )
}