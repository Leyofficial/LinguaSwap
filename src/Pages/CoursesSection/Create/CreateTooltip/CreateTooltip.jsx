import React from 'react';
import {Button, Tooltip, tooltipClasses} from "@mui/material";
import {styled} from "@mui/material/styles";
import {FcInfo} from "react-icons/fc";

const CustomWidthTooltip = styled(({className, ...props}) => (
   <Tooltip {...props} classes={{popper: className}}/>
))({
   [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,
      padding: 15,
      background: "rgba(0,0,0,0.78)",
      fontSize: 13,
   },
});

const CreateTooltip = ({description}) => {

   return (
      <>
         <div>
            <CustomWidthTooltip title={description}>
               <Button sx={{m: 1}}> <FcInfo fontSize={30}></FcInfo></Button>

            </CustomWidthTooltip>
         </div>
      </>
   );
};

export default CreateTooltip;