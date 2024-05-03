import axios from 'axios';
export const url = '';
export const API = axios.create({
	// baseURL: "https:new-api.carting.uz/",
});

// API.interceptors.request.use(
//     (config) => {
//         const token = getFromLS("a-token");
//         // console.log(config);
//         if (token) {
//             config.headers.authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         console.log("error");
//         return Promise.reject(error);
//     }
// );
