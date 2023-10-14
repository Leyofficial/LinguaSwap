// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { styled } from '@mui/material/styles';
// import Check from '@mui/icons-material/Check';
// import SettingsIcon from '@mui/icons-material/Settings';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import VideoLabelIcon from '@mui/icons-material/VideoLabel';
// import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
// import {MdGroupAdd} from "react-icons/md";
// import {FaHourglassStart} from "react-icons/fa";
//
// export const QontoConnector = styled(StepConnector)(({ theme }) => ({
//    [`&.${stepConnectorClasses.alternativeLabel}`]: {
//       top: 10,
//       left: 'calc(-50% + 16px)',
//       right: 'calc(50% + 16px)',
//    },
//    [`&.${stepConnectorClasses.active}`]: {
//       [`& .${stepConnectorClasses.line}`]: {
//          borderColor: '#784af4',
//       },
//    },
//    [`&.${stepConnectorClasses.completed}`]: {
//       [`& .${stepConnectorClasses.line}`]: {
//          borderColor: '#784af4',
//       },
//    },
//    [`& .${stepConnectorClasses.line}`]: {
//       borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//       borderTopWidth: 3,
//       borderRadius: 1,
//    },
// }));
//
// export const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
//    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
//    display: 'flex',
//    height: 22,
//    alignItems: 'center',
//    ...(ownerState.active && {
//       color: '#784af4',
//    }),
//    '& .QontoStepIcon-completedIcon': {
//       color: '#784af4',
//       zIndex: 1,
//       fontSize: 18,
//    },
//    '& .QontoStepIcon-circle': {
//       width: 8,
//       height: 8,
//       borderRadius: '50%',
//       backgroundColor: 'currentColor',
//    },
// }));
//
// export function QontoStepIcon(props) {
//    const { active, completed, className } = props;
//
//    return (
//        <QontoStepIconRoot ownerState={{ active }} className={className}>
//           {completed ? (
//               <Check className="QontoStepIcon-completedIcon" />
//           ) : (
//               <div className="QontoStepIcon-circle" />
//           )}
//        </QontoStepIconRoot>
//    );
// }
//
// QontoStepIcon.propTypes = {
//    /**
//     * Whether this step is active.
//     * @default false
//     */
//    active: PropTypes.bool,
//    className: PropTypes.string,
//    /**
//     * Mark the step as completed. Is passed to child components.
//     * @default false
//     */
//    completed: PropTypes.bool,
// };
//
// export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//    [`&.${stepConnectorClasses.alternativeLabel}`]: {
//       top: 22,
//    },
//    [`&.${stepConnectorClasses.active}`]: {
//       [`& .${stepConnectorClasses.line}`]: {
//          backgroundImage:
//              "linear-gradient( 136deg, rgb(40 180 173 / 85%) 0%, rgb(30 155 169 / 48%) 50%, rgb(53 113 230) 100%)"
//       },
//    },
//    [`&.${stepConnectorClasses.completed}`]: {
//       [`& .${stepConnectorClasses.line}`]: {
//          backgroundImage:
//              "linear-gradient( 136deg, rgb(40 180 173 / 85%) 0%, rgb(30 155 169 / 48%) 50%, rgb(53 113 230) 100%)"
//       },
//    },
//    [`& .${stepConnectorClasses.line}`]: {
//       height: 3,
//       border: 0,
//       backgroundColor:
//           theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//       borderRadius: 1,
//    },
// }));
//
// const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
//    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
//    zIndex: 1,
//    color: '#fff',
//    width: 50,
//    height: 50,
//    display: 'flex',
//    borderRadius: '50%',
//    justifyContent: 'center',
//    alignItems: 'center',
//    ...(ownerState.active && {
//       backgroundImage:"linear-gradient( 136deg, rgb(40 180 173 / 85%) 0%, rgb(30 155 169 / 48%) 50%, rgb(53 113 230) 100%)",
//       boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//    }),
//    ...(ownerState.completed && {
//       backgroundImage:
//           "linear-gradient( 136deg, rgb(40 180 173 / 85%) 0%, rgb(30 155 169 / 48%) 50%, rgb(53 113 230) 100%)",
//    }),
// }));
//
// export function ColorlibStepIcon(props) {
//    const { active, completed, className } = props;
//
//    const icons = {
//       1: <MdGroupAdd fontSize={30}/>,
//       2: <FaHourglassStart fontSize={30}/>,
//       3: <FaHourglassStart fontSize={30} style={{rotate:"180deg"}} />,
//    };
//
//    return (
//        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
//           {icons[String(props.icon)]}
//        </ColorlibStepIconRoot>
//    );
// }
//
// ColorlibStepIcon.propTypes = {
//    /**
//     * Whether this step is active.
//     * @default false
//     */
//    active: PropTypes.bool,
//    className: PropTypes.string,
//    /**
//     * Mark the step as completed. Is passed to child components.
//     * @default false
//     */
//    completed: PropTypes.bool,
//    /**
//     * The label displayed in the step icon.
//     */
//    icon: PropTypes.node,
// };
//
//
