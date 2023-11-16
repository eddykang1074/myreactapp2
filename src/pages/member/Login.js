import React,{useState,useRef} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

import {useDispatch} from 'react-redux';
import { userLogin} from '../../redux/actions';



const Login = () => {

    const globalDispatch = useDispatch();

    const [member,setMember] = useState({
        email:"",
        password:""
    });

    const refEmail = useRef();
    const refPassword = useRef();


    const navigate = useNavigate();

    //사용자 입력 요소값 데이터 바인딩 적용처리 이벤트 핸들러 기능정의 
    const handleMember=(e)=>{
        setMember({...member,[e.target.name]:e.target.value});
    }

    //신규회원 가입 유효성 검사 및 등록처리 반환 
    const handleLogin=()=>{

        if(member.email === ""){
            alert("메일주소를 입력해주세요.");
            refEmail.current.focus();
            return false;
        }

        if(member.password === ""){
            alert("암호를 입력해주세요.");
            refPassword.current.focus();
            return false;
        }


        //회원 로그인 정보를 백엔드에 전달하여 등록처리한다.
        axios.post('http://localhost:3001/api/member/login',member)
        .then((res)=>{
            console.log("회원 로그인 처리결과 :",res.data);

            //웹브라우저의 localStorage공간에 발급된 사용자 인증 JWT토큰값을 저장한다.
            //window.localStorage.setItem("jwttoken",res.data.data);

            //dispatch훅을 이용해 해당 액션함수를 호출하고 액션함수에
            //매개변수로 서버에서 전달해준 사용자 jwt토큰값을 전달하여 
            //관련 리듀서함수를 통해 스토어 전역공간의 토큰값을 업데이트한다. 
            globalDispatch(userLogin(res.data.data));

            navigate('/profile');
        })
        .catch((err)=>{

        });

    }


    return (
        <div>
            <h1>로그인 페이지</h1>

            메일주소:<input type="text" ref={refEmail} name="email" value={member.email} onChange={handleMember} /><br/>
            암호:<input type="password" ref={refPassword} name="password" value={member.password} onChange={handleMember} /><br/>

            <button onClick={handleLogin}>로그인</button>


        </div>
    );
};

export default Login;