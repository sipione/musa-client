import {HashRouter, Route, Routes} from 'react-router-dom';
import GlobalStyle from './common/foundation/globalStyle';
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';
import AboutPage from './pages/aboutUs';
import PageAdmin from './pages/admin';
import ChangePasswordPage from './pages/changePassword';
import EditProfilePage from './pages/editProfile';
import PageError404 from './pages/error404';
import PageHome from './pages/home';
import PageJobs from './pages/jobs';
import PageLogin from './pages/login';
import PartnershipPage from './pages/partnership';
import PageProfile from './pages/profile';
import PageRegister from './pages/register';
import PageTest from './pages/test';



function App() {
  return (
    <HashRouter>
      <GlobalStyle/>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<PageHome/>}/>
        <Route path='/test' element={<PageTest/>}/>
        <Route path='/jobs' element={<PageJobs/>}/>
        <Route path='/login' element={<PageLogin/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/register' element={<PageRegister/>}/>
        <Route path='/partnership' element={<PartnershipPage/>}/>
        <Route path='/profile/:id' element={<PageProfile/>}/>
        <Route path='/profile/edit/:id' element={<EditProfilePage/>}/>
        <Route path='/change/:token' element={<ChangePasswordPage/>}/>
        <Route path='/admin' element={<PageAdmin/>}/>
        <Route path='*' element={<PageError404/>}/>
      </Routes>
      <FooterComponent/>
    </HashRouter>
  );
}

export default App;
