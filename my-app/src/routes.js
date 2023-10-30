import App from './App';
// import Main from './Main';
import QuestionList from './QuestionList';
import Filter from './Filter';
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
                element: <><Filter /><QuestionList/></>
            }
        ]
    },
    {
        path: '/question/new',
        element: <Form />
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