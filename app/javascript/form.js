let form = document.getElementById("default-form");

async function handleSubmit(event) {
	event.preventDefault();
	let status = document.getElementById("form-status");
	let data = new FormData(event.target);

	status.innerHTML = "Секунду..."

	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	}).then(response => {
		if (response.ok) {
			status.innerHTML = "Вы подписаны";
			form.reset()
		} else {
			response.json().then(data => {
				if (Object.hasOwn(data, 'errors')) {
					status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
				} else {
					status.innerHTML = "Oops! There was a problem submitting your form"
				}
			})
		}
	}).catch(error => {
		status.innerHTML = "Что-то сломалось :("
	});
}
form.addEventListener("submit", handleSubmit)
