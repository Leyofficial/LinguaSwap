import React from "react";

export const TeachersSection = React.lazy(() => import ("../../Pages/TeachersSection/index.tsx"));
export const HomePage = React.lazy(() =>  import( "../../Pages/HomePage/HomePage.tsx" ));
export const ErrorUrl = React.lazy(() => import("../../Router/ErrorUrl/ErrorUrl.tsx")) ;
export const CreateProfile = React.lazy(() => import ("../../Pages/CreateProfilePage/index.tsx"));
export const PersonalProfile = React.lazy(() => import ("../../Pages/PersonalProfile/index.tsx"));
export const Layout = React.lazy(() => import ("../../Router/Layout/Layout.tsx" )) ;
export const SignUp = React.lazy(() => import("../../Components/SignUp/SignUp.tsx"));
export const Login = React.lazy( () =>  import ("../../Components/Login/Login.tsx"));
export const Form = React.lazy(  () => import("../../Components/Form/Form.tsx"));
export const CourseSection = React.lazy(() => import("../../Pages/CourseSection/CourseSection.tsx"))
export const MessagesSection = React.lazy(() => import("../../Pages/Chat/MessagesSection/MessagesSection.tsx"))
export const CourseChat = React.lazy(() => import("../../Pages/CourseChat/CourseChat.tsx"))
export const Create = React.lazy(() => import("../../Pages/CoursesSection/Create/Create.tsx"))
export const CoursesSection = React.lazy(() => import("../../Pages/CoursesSection/CoursesSection.tsx"))