import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppContact = () => {

	return (
		<Link className="text-white focus:outline-none hover:text-accent-orange transition-colors duration-500 flex-between-center gap-2 shrink-0" href="https://wa.me/+380982900236" target="blank" >
						<FaWhatsapp className="fill-current w-6 h-6 "/>
						<span className="">+380 98 290 0236
						</span>
					</Link>
	)
}

