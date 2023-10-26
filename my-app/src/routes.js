import App from './App';
import Form from './Form';
import ReviewPage from './ReviewPage';
import ResourcePage from './ResourcePage';

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: '/form',
        element: <Form />
    },
    {
        path: './review',
        element: <ReviewPage/>
    },
    {
        path: './resoures',
        element: <ResourcePage />
    }
]

export default routes;