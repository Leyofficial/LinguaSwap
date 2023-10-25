import toast from "react-hot-toast";
import {ICreateCourseData} from "../../createTypes.ts";

export const validationFields = (createCourseData:ICreateCourseData,moveStepCallback:(currentStep:number) => void,currentStep : number,setError:(arg:boolean) => void) => {
   if (!createCourseData.level) {
      toast.error("Level of course must be in");
      setError(true)
   } else if (!createCourseData.duration) {
      setError(true)
      toast.error("Duration of lesson must be in");
   } else if (!createCourseData.language) {
      setError(true)
      toast.error("Language of course must be in");
   } else if (!createCourseData.startDate) {
      setError(true)
      toast.error("Start date of course must be in");
   } else if (!createCourseData.finishDate) {
      setError(true)
      toast.error("Finish date of course must be in");
   } else {
      moveStepCallback(currentStep)
   }
}