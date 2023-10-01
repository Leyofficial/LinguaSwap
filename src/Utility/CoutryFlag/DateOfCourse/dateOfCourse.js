export const dateOfCourse = (start) => {

  const startDateObj = new Date(start)
  const currentDate = new Date();
  return startDateObj > currentDate
}