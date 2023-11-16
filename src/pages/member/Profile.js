import React,{useEffect,useState} from 'react';
import axios from 'axios';

//전역공간 특정 전역데이터를 Subscribe(구독)할수 있게 설정하는 훅참조
import { useSelector } from 'react-redux';

const Profile = () => {

    const value = useSelector((state) => state.Login.token);
    console.log("전역데이터에 저장된 jwt토큰값 조회하기 :",value);

    useEffect(()=>{
        //웹브라우저의 로컬스토리지에 저장된 jwt토큰값을 가져온다.
        var token = window.localStorage.getItem("jwttoken");

        axios.get('http://localhost:3001/api/member/profile',{
        	headers: {Authorization: `Bearer ${token}`}
        })
        .then((res)=>{
            console.log("현재 로그인한 사용자 정보:",res.data);
        })
        .catch();

    },[]);


    return (
        <div>
            <h1>로그인 사용자 프로필 확인</h1>


        </div>
    );
};

export default Profile;