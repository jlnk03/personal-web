import Link from "next/link";
import {redirect} from "next/navigation";

function HomeLink({title, href, setMenuOpen, current, children}) {

    function handleClick(e) {
        // e.preventDefault()

        setMenuOpen(false)

        // setInterval(() => {
        //     console.log('redirecting...')
        //     console.log(href)
        //     redirect(href)
        // }
        // , 400)
    }

    return (
        <>
            <Link href={href} className="w-fit h-fit group" onClick={handleClick}>
                <h2 className="textl-xl text-white font-bold flex flex-row items-center relative">
                    <span className={`absolute left-0 mr-2 w-2 h-2 rounded-full ${current ? 'bg-yellow-600' : 'opacity-0 group-hover:opacity-100 bg-blue-600 transition-opacity'}`} />
                    <span className={`${current ? 'translate-x-3' : 'group-hover:translate-x-3 transition-transform'}`} >
                    {title}
                    </span>
                    </h2>
                <div className="bg-white sm:aspect-[2] aspect-[1] w-[30vw] min-w-56 rounded-lg shadow-lg mt-2 grid place-items-center">
                    {children}
                </div>
            </Link>
        </>
    )
}

export default HomeLink