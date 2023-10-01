export const levelEducation = (level) => {

  let levelStyle = {}
  switch (level) {
    case 'Pre-Intermediate' : {
      return levelStyle = {
        backgroundColor:"yellow",
        color:"#000000"
      }
    }
    case 'Pre-intermediate' : {
      return levelStyle = {
        backgroundColor:"yellow",
        color:"#000000"
      }
    }
    case 'Intermadiate' : {
      return  levelStyle = {
        backgroundColor:"rgba(6,206,69,0.72)",
        color:"#ffffff"
      }
    }
    case 'Advanced' : {
      return  levelStyle = {
        backgroundColor:"rgba(150,5,148,0.56)",
        color:"#000000"
      }
    }
    case 'Uper-intermediate' : {
      return  levelStyle = {
        backgroundColor:"rgba(4,74,164,0.72)",
        color:"#ffffff"
      }
    }
    case 'Beginner' : {
      return  levelStyle = {
        backgroundColor:"rgba(140,32,9,0.63)",
        color:"#ffffff"
      }
    }
    default : return
  }
}