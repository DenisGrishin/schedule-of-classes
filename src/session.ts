export const startSession = (user:any) => {
	sessionStorage.setItem('email', user.email);
	sessionStorage.setItem('accessToken', user.accessToken);
 };
 
 export const getSession = () => {
	return {
	  email: sessionStorage.getItem('email'),
	  accessToken: sessionStorage.getItem('accessToken'),
	};
 };
 
 export const endSession = () => {
	sessionStorage.clear();
 };
 
 export const isLoggedInSession = () => {
	return getSession().accessToken;
 };
//  ============================ 
export const startStorage = (user:any) => {
	sessionStorage.setItem('email', user.email);
	sessionStorage.setItem('accessToken', user.accessToken);
 };
 
 export const getStorage = () => {
	return {
	  email: sessionStorage.getItem('email'),
	  accessToken: sessionStorage.getItem('accessToken'),
	};
 };
 
 export const endStorage = () => {
	sessionStorage.clear();
 };
 
 export const isLoggedInStorage = () => {
	return getSession().accessToken;
 };
 