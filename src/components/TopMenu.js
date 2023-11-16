import React from 'react';
import {Link} from 'react-router-dom';

const TopMenu = () => {
    return (
        <div style={{width:"100%",height:"50px",backgroundColor:"gray"}}>

            <span>
                <Link to="/">메인</Link>
            </span>
            |
            <span>
                <Link to="/entry">회원가입</Link>
            </span>
            |
            <span>
                <Link to="/login">로그인</Link>
            </span>
            |
            <span>
                <Link to="/profile">프로필</Link>
            </span>

        </div>
    );
};

export default TopMenu;