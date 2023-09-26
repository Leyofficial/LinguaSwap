import { useState } from "react";
import style from "./CustomInput.module.scss";

const CustomInput = (props) => {
  const [input, setInput] = useState("");
  const { width = 500, callback, placeholder, heg } = props;
  return (
    <div className={style.container}>
      <div className={style["wave-group"]} style={{ width: width }}>
        <input
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => (heg ? setInput( "#" + input ) : setInput(null))}
          value={input}
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
