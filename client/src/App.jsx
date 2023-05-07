import './input.css';
import { BrowserRouter } from 'react-router-dom';
import router from './config/routes';
import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';

import DefaultLayout from './components/DefaultLayout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {router.map((route, index) => {
                    let Layout = DefaultLayout;
                    const Page = route.element;
                    return (
                        <Route>
                            
                            <Route path={'/'} element={<Hero></Hero>}></Route>

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
