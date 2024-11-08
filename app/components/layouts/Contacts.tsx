import { ContactForm } from "../templates/ContactForm"

export const Contacts = () => {
	return (
		<section id="contacts" className="section relative bg-contact-image w-full h-screen bg-no-repeat bg-center bg-cover before:bg_shadow">
		<div className="container relative z-20">
			<div className="">
				{/*<div className="text-center md:text-left">*/}
				<h2 className="title">
					Contacts
				</h2>
				{/*</div>*/}

				<div className="">
					<p>
						You can send me&nbsp;a&nbsp;message to&nbsp;contact&nbsp;me.
					</p>
				</div>
			</div>
				<ContactForm/>
		</div>
	</section>
	)
}
