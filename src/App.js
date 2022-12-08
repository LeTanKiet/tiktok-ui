import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { publicRoutes } from './routes';
import './scss/App.scss';

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
                            Layout = 'div';
                        }

                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout full={route.full}>
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
