import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { BiCircle } from "@react-icons/all-files/bi/BiCircle";
import {IPointsProps} from "./types.ts";

function Points(props : IPointsProps) {
  return (
    <>
      {props.checked ? <AiFillCheckCircle size={25} /> : <BiCircle size={25} />}
    </>
  );
}
export default Points;
