

//step1: 기정의된 액션타입을 참조합니다.
import {USER_LOGIN} from '../../constants/actionTypes';


//step2: 액션의 표준화된 기본형식정의 
type LoginAction = {type:String,payload:{} | string};

//step3: 화면 컴포넌트에서 호출하는 액션함수 정의 
export const userLogin = (userToken:string):LoginAction=>({
    type:USER_LOGIN,
    payload:{userToken}
});