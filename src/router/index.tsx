import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import HomePage from "../pages";
import RootLayout from "../pages/Layout";
import LearnLayout from "../pages/learn/Layout";
import QuickStartPage from "../pages/learn";
import ThinkingInReact from "../pages/learn/ThinkingInReact";
import Installation from "../pages/learn/Installation";
import Reference from "../pages/Reference";
import WrappedContribution from "../pages/Contribution";
import WrappedBlog from "../pages/Blog";
import WrappedLogin from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";
const isLoggedIn = false
const userData: { email: string } | null = isLoggedIn ? { email: "email@gmail.com" } : null;
const router = createBrowserRouter(createRoutesFromElements(
    <>
        {/* Root Layout */}
        <Route path="/" errorElement={<ErrorHandler />} element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="reference" element={<Reference />} />
            <Route path="contribution" element={<ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
                <WrappedContribution />
            </ProtectedRoute>} />
            <Route path="blog" element={<WrappedBlog />} />
            <Route path="login" element={<ProtectedRoute redirectPath='/contribution' isAllowed={!isLoggedIn} data={userData}>
                <WrappedLogin />
            </ProtectedRoute>} />
        </Route>
        {/* Learn Layout */}
        <Route path="/learn" errorElement={<ErrorHandler />} element={<LearnLayout />}>
            <Route index element={<QuickStartPage />} />
            <Route path="thinking-in-react" element={<ThinkingInReact />} />
            <Route path="installation" element={<Installation />} />
        </Route>
        {/* page not found */}
        <Route path="*" element={<PageNotFound/>}/>
    </>
));


export default router