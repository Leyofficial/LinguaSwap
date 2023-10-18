import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { BiCircle } from "@react-icons/all-files/bi/BiCircle";

function Points(props) {
  return (
    <>
      {props.checked ? <AiFillCheckCircle size={25} /> : <BiCircle size={25} />}
    </>
  );
}
export default Points;
