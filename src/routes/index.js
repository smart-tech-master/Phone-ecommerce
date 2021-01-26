//@flow
import React, {
    Suspense
} from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Explore from 'containers/explore'

const Home = React.lazy(() => import('../containers/home/home.jsx'))
const Versus = React.lazy(() => import('../containers/versus/index.jsx'))
const StandardDetailPage = React.lazy(() => import('../containers/standardpage/index.jsx'))
const Profile = React.lazy(() => import('../containers/profile/index.jsx'))
const Signup = React.lazy(() => import('../containers/signup/index.jsx'))
const Login = React.lazy(() => import('../containers/login/index.jsx'))
const NotFound = React.lazy(() => import('../components/notFound/NotFound'))
const AboutUs = React.lazy(() => import('../components/aboutUs/index.jsx'))
const BrandGuideLines = React.lazy(() => import('../components/brandguidelines/index.jsx'))
const Embedded = React.lazy(() => import('../containers/embedded/index.jsx'))


const Loading = () => {
        return <div className = "appHeader" > ...loading < /div>}

        type Props = {}
        const ProjectRoutes = (props: Props) => {
            return ( < BrowserRouter >
                <
                Suspense fallback = {
                    < Loading / >
                } >
                <
                Switch >

                <
                Route path = "/"
                exact component = {
                    Home
                }
                /> <
                Route path = "/app/versus"
                exact component = {
                    Versus
                }
                /> <
                Route path = "/app/explore"
                exact component = {
                    Explore
                }
                /> <
                Route path = "/profile"
                exact component = {
                    Profile
                }
                />

                <
                Route path = "/signup"
                exact component = {
                    Signup
                }
                />

                <
                Route path = "/login"
                exact component = {
                    Login
                }
                />

                <
                Route path = "/about"
                exact component = {
                    AboutUs
                }
                />

                <
                Route path = "/detail"
                exact component = {
                    StandardDetailPage
                }
                />

                <
                Route path = "/guideline"
                exact component = {
                    BrandGuideLines
                }
                />

                <
                Route path = "/embedded"
                exact component = {
                    Embedded
                }
                />

                <
                Route path = "/detail"
                exact component = {
                    StandardDetailPage
                }
                />

                <
                Route path = "*"
                exact component = {
                    NotFound
                }
                />

                <
                /Switch>  <
                /Suspense >  <
                /BrowserRouter>

            )
        }

        export default ProjectRoutes