import toast from "react-hot-toast";

export const validationFields = (createCourseData,callback,currentStep,setError) => {
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
      callback(currentStep)
   }
}