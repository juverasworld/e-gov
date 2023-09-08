import Cookies from 'js-cookie';
import { USER_AUTH_TOKEN_LS } from './constant';


const UserUtils = {
    saveUserToken: (token:any) => {
        Cookies.set(USER_AUTH_TOKEN_LS, token);
    },
    getUserToken: () => {
        const token = Cookies.get(USER_AUTH_TOKEN_LS);
        return token;
    },
}
export { UserUtils };