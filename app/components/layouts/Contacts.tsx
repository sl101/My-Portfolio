"use client"
import { useLang } from "@/app/hooks/useLang";
import { ContactForm } from "../templates/ContactForm"

export const Contacts = () => {
	const { lang, translations } = useLang();
	const title = translations[lang].contacts.title;
	const subtitle = translations[lang].contacts.subtitle;
	return (
		<section id="contacts" className="section relative bg-contact-image w-full h-screen bg-no-repeat bg-center bg-cover before:bg_shadow">
			<div className="container relative z-20">
				<h2 className="title">{title}</h2>
				<p className="leading-6">{subtitle}</p>
				<ContactForm />
			</div>
		</section>
	)
}
