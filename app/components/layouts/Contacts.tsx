import { ContactsHeader } from "../elements/ContactsHeader"
import { ContactsForm } from "../templates/ContactsForm"

export const Contacts = () => {

	return (
		<section id="contacts" className="section relative bg-contact-image w-full h-screen bg-no-repeat bg-center bg-cover before:bg_shadow">
			<div className="container relative z-20">
				<ContactsHeader/>
				<ContactsForm />
			</div>
		</section>
	)
}
