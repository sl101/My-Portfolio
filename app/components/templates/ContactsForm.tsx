"use client"
import { sendForm } from "@/app/apiRequests/sendEmailForm";
import { useLang } from "@/app/hooks/useLang";

export const ContactsForm = () => {
	const { lang, translations } = useLang();

	async function sendEmailForm(form: FormData) {
		const name: string = form.get("name")?.toString() || "";
		const phone: string = form.get("phone")?.toString() || "";
		const email: string = form.get("email")?.toString() || "";
		const message: string = form.get("message")?.toString() || "";

		const feedback = {
			name,
			phone,
			email,
			message,
		};

		await sendForm(feedback);
	}

	// TODO: toast function with success message

	const formInputs = [
		{ id: 1, type: "text", name: "name", placeholder: translations[lang].contacts.form[0] },
		{ id: 2, type: "tel", name: "phone", placeholder: translations[lang].contacts.form[1] },
		{ id: 3, type: "email", name: "email", placeholder: translations[lang].contacts.form[2] },
	]

	const formTextArea = translations[lang].contacts.form[3]
	const formButton = translations[lang].contacts.btn
	return (
		<form id="feedback_form"
			className="w-1/2 max-[1024px]:w-4/5 max-[1024px]:mx-auto mt-12 flex flex-col gap-5"
			action={sendEmailForm}>
			{formInputs.map(input => <label key={input.id}>
				<input className="input placeholder-style"
					type={input.type} name={input.name}  placeholder={input.placeholder} required/>
			</label>)}
			<label>
				<textarea className="input placeholder-style min-h-40" name="message"  placeholder={formTextArea} required/>
			</label>

			<button className="border-2 w-2/3 rounded-lg px-5 py-2 outline-none transition-color duration-500 hover:text-accent-orange focus:text-accent-orange hover:border-white hover:bg-white text-xl max-[1024px]:mx-auto font-['Roboto-regular']">{formButton}</button>
		</form>
	);
}
