import { ContactForm } from "../templates/ContactForm"

export const Contacts = () => {
	return (
		<section id="contacts" className="bg-contact-image w-full h-screen bg-no-repeat bg-center bg-cover">
		<div className="container">
			<div className="">
				<h2 className="">
					Contacts
				</h2>

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
