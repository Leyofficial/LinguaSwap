import React, {useState} from "react";
import style from './ShowTopicCourse.module.scss'
import {GiImbricatedArrows} from "react-icons/gi";
import {ISubjects} from "../../../types/coursesTypes.ts";
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {MdSubject} from "react-icons/md";

interface IShowTopicProps {
    topic: ISubjects,
    changeTopic: (arg: null | number) => void,
    curIndex: number | null,
    currentTopicIndex: number
}

const ShowTopicCourse = (props: IShowTopicProps) => {

    const {topic, changeTopic, curIndex, currentTopicIndex} = props
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className={style.wrapper} key={topic._id}>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <MdSubject></MdSubject>
                        <p>{topic.topic}</p>
                    </ListItemIcon>
                    <ListItemText primary=""/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            <span>{topic.description}</span>
                            </ListItemIcon>
                            <ListItemText primary="" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </div>

        </>
    );
};

export default ShowTopicCourse;