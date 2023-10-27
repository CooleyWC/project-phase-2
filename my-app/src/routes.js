import App from './App';
import Main from './Main';
import Form from './Form';
import ReviewPage from './ReviewPage';
import ResourcePage from './ResourcePage';
import ErrorPage from './ErrorPage';


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/questions",
                element: <Main />
            }
        ]
    },
    {
        path: '/question/new',
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