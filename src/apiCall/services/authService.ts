import http from '../httpCommon';
import { API_ROUTES } from '../routes';
import type { signUpBody } from '../types/request';

//signup api function
const signUp = async (data: signUpBody) => {
    try {
        const result = await http.post(API_ROUTES.AUTH_SIGNUP, data);
        return result.data;
    } catch (error) {
        return error;
    }
};

export default { signUp };