import style from './HowWork.module.scss'
import WorkSection from "./WorkSection/WorkSection.js";
import {useEffect, useState} from "react";
import tutorSection from '../../../images/screens/teacher.png'
import courses from '../../../images/screens/courses.png'
import chat from '../../../images/screens/chat.png'
import course from '../../../images/screens/course.png'

const HowWork = () => {

    const items = [{
        title: "Find the best tutor",
        description: "Choose from over 32,000 online tutors.Use filters to narrow your search and find the perfect fit",
        image: tutorSection
    },
        {
            title: "Take lessons anytime",
            description: "Find the perfect time for your busy schedule. Book lessons in seconds via desktop or mobile",
            image: courses
        },
        {
            title: "Enter virtual classroom",
            description: "When it’s lesson time, connect with your tutor through our comprehensive video platform",
            image: chat
        },
        {
            title: "Enjoy structured learning",
            description:"Keep track of your learning progress. Improve your speaking and vocabulary with our Learning plans",
            image: course
        }
    ]
    const [show, setShow] = useState<boolean>(false)


    useEffect(() => {
        setShow(true)
    }, [])


    return (
        <div className={`${style.container} ${show ? style.show : null}`}>
            <div className={style.header}>
                <h2>How Lingua works</h2>
                <p>Learn online with the worlds best tutors</p>
            </div>
            {items.map((item,index : number) =><WorkSection image={item.image} title={item.title} description={item.description} count={index}></WorkSection> )}
        </div>
    );
};

export default HowWork;