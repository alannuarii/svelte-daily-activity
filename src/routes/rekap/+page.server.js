import { API_ENDPOINT } from '$env/static/private'

export const load = async () => {
	const res = await fetch(`${API_ENDPOINT}/api/activities`);
	const data = await res.json();

	console.log(data)

	return {
		data: data
	};
};