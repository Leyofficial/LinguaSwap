import React, { useState } from "react";
import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from "./StepOne.module.scss";
import CustomInput from "../../../Utility/CustomInput/CustomInput";
import iconImg from "../../../img/images/lilartsy-333oj7zFsdg-unsplash.jpg";
import { useSelector } from "react-redux";

const StepOne = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const name = useSelector((state => state.name))

  const handleTextareaClick = () => {
    setIsClicked(true);
  };

  const handleTextareaBlur = () => {
    setIsClicked(false);
  };

  return (
    <>
      <h2 className={style.title}><b>About you :</b></h2>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.leftBlock}>
            <div className={style.textAreaBlock}>
              <div className={style.inputBlock}>
                <CustomInput value={name.name} width={"70%"} placeholder={"Type your name"} />
                <CustomInput
                  width={"70%"}
                  placeholder={"Type your user tag  #"}
                  heg={true}
                />
              </div>
              <p className={style.areaText}>
                Write about <span>yourself </span>:
              </p>
              <textarea
                onClick={handleTextareaClick}
                onBlur={handleTextareaBlur}
                style={{
                  border: isClicked ? "2px solid dodgerblue" : "1px solid gray",
                }}
                className={style.textArea}
                cols="10"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className={style.rightBlock}>
            <div className={style.iconShape}>
              <img max-width={50} src={iconImg} alt="" />
            </div>
          </div>

          <div className={style.buttonOne}>
            <CustomButton
              title={"Next"}
              typeOfButton={"button"}
              callback={props.nextStep}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
