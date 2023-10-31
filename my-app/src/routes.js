import App from './App';
import QuestionList from './QuestionList';
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
                path: "/",
                element: <QuestionList/>
            },
            {
                path: '/question/new',
                element: <Form />
            },
        ]
    },
    {
        path: '/review',
        element: <ReviewPage/>
    },
    {
        path: '/resources',
        element: <ResourcePage />
    }
]

export default routes;