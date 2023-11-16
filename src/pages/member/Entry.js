import React,{useState,useRef} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';


const Entry = () => {

    const [member,setMember] = useState({
        email:"",
        password:"",
        name:"",
        telephone:""
    });

    const refEmail = useRef();
    const refPassword = useRef();
    const refName = useRef();

    const navigate = useNavigate();

    //사용자 입력 요소값 데이터 바인딩 적용처리 이벤트 핸들러 기능정의 
    const handleMember=(e)=>{
        setMember({...member,[e.target.name]:e.target.value});
    }

    //신규회원 가입 유효성 검사 및 등록처리 반환 
    const handleEntry=()=>{

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

        if(member.name === ""){
            alert("이름을 입력해주세요.");
            refName.current.focus();
            return false;
        }

        //회원가입정보를 백엔드에 전달하여 등록처리한다.
        axios.post('http://localhost:3001/api/member/entry',member)
        .then((res)=>{
            console.log("회원가입 처리결과 :",res.data);
            navigate('/login');
        })
        .catch((err)=>{

        });

    }

    return (
        <div>
            <h1>신규회원가입 페이지</h1>

            메일주소:<input type="text" ref={refEmail} name="email" value={member.email} onChange={handleMember} /><br/>
            암호:<input type="password" ref={refPassword} name="password" value={member.password} onChange={handleMember} /><br/>
            이름:<input type="text" ref={refName} name="name" value={member.name} onChange={handleMember} /><br/>
            전화번호:<input type="text" name="telephone" value={member.telephone} onChange={handleMember} /><br/>
            <button onClick={handleEntry}>회원가입</button>


        </div>
    );
};

export default Entry;