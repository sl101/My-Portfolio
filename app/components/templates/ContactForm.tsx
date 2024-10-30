import { sendForm } from "@/app/apiRequests/sendEmailForm";

export const ContactForm  = () =>{
	async function sendEmailForm(form: FormData) {
		"use server";
		const name: any = form.get("name")?.toString();
		const phone: any = form.get("phone")?.toString();
		const email: any = form.get("email")?.toString();
		const message: any = form.get("message")?.toString();

		const feedback = {
			name,
			phone,
			email,
			message,
		};

		await sendForm(feedback);
	}
	return (
		<section>
			<div className="container">
				<div className="">
					<form id="feedback_form" action={sendEmailForm}>
						<label>
							<input type="text" name="name" required placeholder="Name" />
						</label>

						<label>
							<input type="tel" name="phone" required placeholder="Phone" />
						</label>

						<label>
							<input type="email" name="email" required placeholder="E-mail" />
						</label>

						<label>
							<textarea name="message" required placeholder="Your message" />
						</label>

						<button>Send</button>
					</form>
				</div>
			</div>
		</section>
	);
}
