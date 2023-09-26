import { useState } from "react";
import style from "./CustomInput.module.scss";
import { useDispatch } from "react-redux";
import { setNameAC } from "../../Redux/Profile/Name/seNameAC";


const CustomInput = (props) => {
  const dispatch = useDispatch()
  function handleChange(event) {
      dispatch(setNameAC(event.target.value))
  }

  const [input, setInput] = useState("");
  const { width = 500, callback, placeholder, heg  , value} = props;
  return (
    <div className={style.container}>
      <div className={style["wave-group"]} style={{ width: width }}>
        <input
          onChange={handleChange}
          onFocus={() => (heg ? setInput( "#" + input ) : setInput(null))}
          value={value}
          style={{ width: width }}
          placeholder={placeholder}
          required=""
          type="text"
          className={style.input}
        />
        <span className={style.bar} style={{ width: width }}></span>
        <label className={style.label} style={{ width: width }}></label>
      </div>
    </div>
  );
};

export default CustomInput;
