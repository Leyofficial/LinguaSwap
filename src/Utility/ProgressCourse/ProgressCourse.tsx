import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import {MdGroupAdd} from "react-icons/md";
import {FaHourglassStart} from "react-icons/fa";

export const QontoConnector = styled(StepConnector)(({ theme }) => ({
   [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
   },
   [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         borderColor: '#0e96d0',
      },
   },
   [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         borderColor: '#1466b2',
      },
   },
   [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#166caf',
      borderTopWidth: 3,
      borderRadius: 1,
   },
}));

export const QontoStepIconRoot = styled('div')(({ theme, ownerState } : any) => ({
   color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#1e63a4',
   display: 'flex',
   height: 22,
   alignItems: 'center',
   ...(ownerState.active && {
      color: 'linear-gradient(#363795, #005C97)',
   }),
   '& .QontoStepIcon-completedIcon': {
      color: '#1d46a6',
      zIndex: 1,
      fontSize: 18,
   },
   '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'linear-gradient(#363795, #005C97)',
   },
}));

export function QontoStepIcon(props:any) {
   const { active, completed, className } = props;

   return (
       //@ts-ignore
       <QontoStepIconRoot ownerState={{ active }} className={className}>
          {completed ? (
              <Check className="QontoStepIcon-completedIcon" />
          ) : (
              <div className="QontoStepIcon-circle" />
          )}
       </QontoStepIconRoot>
   );
}

QontoStepIcon.propTypes = {
   /**
    * Whether this step is active.
    * @default false
    */
   active: PropTypes.bool,
   className: PropTypes.string,
   /**
    * Mark the step as completed. Is passed to child components.
    * @default false
    */
   completed: PropTypes.bool,
};

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
   [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
   },
   [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         backgroundImage: "linear-gradient(#363795, #005C97)"

},
   },
   [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         backgroundImage:
             "linear-gradient(#363795, #005C97)"
      },
   },
   [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
          theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
   },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState } : any) => ({
   backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
   zIndex: 1,
   color: '#fff',
   width: 50,
   height: 50,
   display: 'flex',
   borderRadius: '50%',
   justifyContent: 'center',
   alignItems: 'center',
   ...(ownerState.active && {
      backgroundImage:"linear-gradient(#363795, #005C97)",
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
   }),
   ...(ownerState.completed && {
      backgroundImage:
          "linear-gradient(#363795, #005C97)",
   }),
}));

export function ColorlibStepIcon(props : any) {
   const { active, completed, className } = props;

   const icons = {
      1: <MdGroupAdd fontSize={30}/>,
      2: <FaHourglassStart fontSize={30}/>,
      3: <FaHourglassStart fontSize={30} style={{rotate:"180deg"}} />,
   };


   return (
       //@ts-ignore
       <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
          {/*// @ts-ignore*/}
          {icons[String(props.icon)]}
       </ColorlibStepIconRoot>
   );
}

ColorlibStepIcon.propTypes = {
   /**
    * Whether this step is active.
    * @default false
    */
   active: PropTypes.bool,
   className: PropTypes.string,
   /**
    * Mark the step as completed. Is passed to child components.
    * @default false
    */
   completed: PropTypes.bool,
   /**
    * The label displayed in the step icon.
    */
   icon: PropTypes.node,
};


