import axios from 'axios'

const API_BASE_URL =  'https://demo2697181.mockable.io/';

const HttpClient = axios.create({
	baseURL: API_BASE_URL,
	timeout: 2000,
	headers: {
		"Content-Type":  "application/json"
	}
});

const getError = error => {
	console.error(error);
	if (!error.response && !error.response.data)
		return 'An unexpected error happened'
	else
		return error.response.data.errors || error.response.data.message || JSON.stringify(error.response.data);
}

export default {

	/**
	 * GET
	 *
	 * Perform a get to a given API endpoint.
	 * The get() param is an object like:
	 *
	 * {
	 * 		endpoint: 'api_endpoint',
	 *		success:  function (resp) {}
	 *		error:    function (err) {}
	 *		finally:  function () {}
	 * }
	 */
	get (p) {
		HttpClient.get(p.endpoint)
			.then(function (resp) {
				if (p.success) {
					p.success(resp);
				}
			})
			.catch(function (error) {
				if (p.error) {
					p.error(getError(error));
				}
			})
			.finally(function () {
				if (p.finally) {
					p.finally();
				}
			});
	},

	/**
	 * POST
	 *
	 * Post data to a given API endpoint.
	 * The {p} param is an object like:
	 *
	 * {
	 * 		endpoint: 'api_endpoint',
	 * 		data: 		json data to send
	 *		success:  function (resp) {}
	 *		error:    function (err) {}
	 *		finally:  function () {}
	 * }
	 */
	post (p) {

		HttpClient.post(p.endpoint, p.data)
			.then(function (response) {
				if (p.success) {
					p.success(response.data);
				}
			})
			.catch(function (error) {
				if (p.error) {
					p.error(getError(error));
				}
			})
			.finally(function () {
				if (p.finally) {
					p.finally();
				}
			});
	}
}