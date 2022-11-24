import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './scss/App.scss';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { publicRoutes } from './routes';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Comp = route.element;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Comp />
                                    </Layout>
                                }
                                key={index}
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
