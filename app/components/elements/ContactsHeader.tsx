"use client"
import { useLang } from "@/app/hooks/useLang";

export const ContactsHeader = () => {
	const { lang, translations } = useLang();
	const title = translations[lang].contacts.title;
	const subtitle = translations[lang].contacts.subtitle;
	return (
		<>
			<h2 className="title">{title}</h2>
			<p className="leading-6">{subtitle}</p>
		</>
	)
}

