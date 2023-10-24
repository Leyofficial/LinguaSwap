export const getStateOfCourse = (startDate:string, finishDate:string) => {

   const start = new Date(startDate)
   const finish = new Date(finishDate)

   const currentDate = new Date()


   if (currentDate < start) {
      return 0
   }
   if (currentDate >= start && currentDate < finish) {
      return 1
   }
   if (currentDate >= finish) {
      return 2
   }
}