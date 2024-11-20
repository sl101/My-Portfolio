const SERVER_URL = "https://vercel-server-test-flax.vercel.app"

export const sendForm = async (feedback: {
	name: string,
	phone: string,
	email: string,
	message: string,
}) => {
	
	await fetch(SERVER_URL + "/email/feedback", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(feedback),
	})
		.then((res) => res.json())
		.then((data) => console.log("Responce answer: ", data))
		.catch((error) => console.log("Error: ", error));
};
