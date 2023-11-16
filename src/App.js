import logo from './logo.svg';
import './App.css';

//리액트 라우팅 주소 체계수립을 위한 라우츠,라우트객체 참조하기
import {Routes,Route} from 'react-router-dom';

//공용컴포넌트 참조하기
import TopMenuBar from './components/TopMenu';
import FooterBar from './components/Footer';



//주요 페이지 컴포넌트 참조하기
import MainPage  from './pages/Main';

import EntryPage  from './pages/member/Entry';
import LoginPage  from './pages/member/Login';
import ProfilePage  from './pages/member/Profile';


function App() {

  return (
    <div className="App">
      <TopMenuBar></TopMenuBar>
      {/* 컨텐츠 페이지 표시 영역 */}

      {/* 리액트 라우팅 주소체계를 정의한다. */}
       <Routes>
          <Route path='/' Component={MainPage} exact={true}></Route>
          <Route path='/entry' Component={EntryPage}></Route>
          <Route path='/login' Component={LoginPage}></Route>
          <Route path='/profile' Component={ProfilePage}></Route>
       </Routes>

      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
