import './input.css';
import { BrowserRouter } from 'react-router-dom';
import router from './config/routes';
import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import DefaultLayout from './components/layouts/DefaultLayout';
import { LogIn, SignUp } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {router.map((route, index) => {
                    let Layout = DefaultLayout;
                    const Page = route.element;
                    return (
                        <Route key={index}>
                            <Route key={index} path={'/'} element={<Hero></Hero>}></Route>
                            <Route key={index} path={'/logIn'} element={<LogIn />}></Route>
                            <Route key={index} path={'/signUp'} element={<SignUp />}></Route>
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        </Route>
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
