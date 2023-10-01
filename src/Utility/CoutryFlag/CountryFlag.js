import england from '../../images/Flags/GreatBritan.png'
import turkish from '../../images/Flags/Turkish.png'
import germany from '../../images/Flags/Germany.png'
import poland from '../../images/Flags/poland.png'
import italy from '../../images/Flags/Italy.png'
import spanish from '../../images/Flags/Spanish.png'
import japan from '../../images/Flags/Japan.png'
export const countryFlag = (country) => {
  switch (country) {
    case 'English' : return england
    case 'Turkish' : return turkish
    case 'Germany' : return germany
    case 'Poland' : return  poland
    case 'Italy' : return italy
    case 'Spanish' : return spanish
    case 'Japan' : return japan

    default : return
  }
}