import http from "./httpApi";
import { registrationEndpoint } from "./endpoints";

export function register(user) {
    console.log(registrationEndpoint, user);
    return http.post(registrationEndpoint, {
        email: user.email,
        password: user.password,
    });
}