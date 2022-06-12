import Applications from "../pages/Applications";
import Reminders from "../pages/Reminders";
import CreateReminder from "../pages/CreateReminder";
import NotFound from "../pages/NotFound";

const CommonRoutes = [
    {
        path: '/',
        element: <Applications />
    },
    {
        path: '/reminders',
        element: <Reminders />
    },
    {
        path: '/create',
        element: <CreateReminder />
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default CommonRoutes;