import App from './App';
import QuestionContainer from './QuestionContainer';
import Form from './Form';

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/qcontainer",
                element: <QuestionContainer/>
            }
        ]
    },
    {
        path: '/form',
        element: <Form />
    }
]

export default routes;