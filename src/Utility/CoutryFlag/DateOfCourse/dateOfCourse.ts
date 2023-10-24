export const dateOfCourse = (start:string) => {

  const startDateObj = new Date(start)
  const currentDate = new Date();
  return startDateObj > currentDate
}