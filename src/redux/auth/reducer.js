//step1: 기정의된 액션타입을 참조합니다.
import {USER_LOGIN} from '../../constants/actionTypes';


//step2:해당 리듀서 함수에서 관리하는 전역데이터의 구조를 정의하고 초기값 설정
const INIT_STATE ={
    token:"",
    loginUser:{}
};

//step3: 리듀셔 함수에서 사용하는 액션의 표준화된 기본형식정의 
type LoginAction = {type:String,payload:{} | string};

type State = { token?: "0" | null, loginUser?: {} | null };



//step4:리듀서 함수를 정의한다.
const Login = (state:State = INIT_STATE,action:LoginAction)=>{
    switch(action.type){
        case USER_LOGIN:
            return { ...state,token:action.payload.userToken};
        default:
            return {...state};
    }
};

//Todo리듀서 함수를 외부로 노출한다.
export default Login;