import { useState } from "react";
import CustomButton from "../../../Utility/CustomButton/CustomButton";
import style from "./StepOne.module.scss";
import CustomInput from "../../../Utility/CustomInput/CustomInput";
import iconImg from "../../../img/images/lilartsy-333oj7zFsdg-unsplash.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setBioAC } from "../../../Redux/Profile/Bio/setBioAC";
import toast, { Toaster } from "react-hot-toast";

import { FaHashtag } from "react-icons/fa";

const StepOne = (props) => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const name = useSelector((state) => state.name);
  const userTag = useSelector((state) => state.userTag);
  const bio = useSelector((state) => state.bio);

  const [dirtyName, setDirtyName] = useState(true);
  const [dirtyHash, setDirtyHash] = useState(true);
  const [emptyInputs, setEmptyInputs] = useState([]);
  console.log(emptyInputs)
  function checkNameDirty(name) {
    if (name.trim().length > 1) {
      setEmptyInputs((prevEmptyInputs) =>
        prevEmptyInputs.filter((inputName) => inputName !== name)
      );
      setDirtyName(false);
    } else {
      setEmptyInputs((prevEmptyInputs) => [...prevEmptyInputs, name]);
      setDirtyName(true);
    }
  }
  const checkHashDirty = (hash) => {
    setDirtyHash(hash.trim().length <= 1);
  };

  function errorToaster(text) {
    toast.error(text);
  }

  const handleTextareaClick = () => {
    setIsClicked(true);
  };

  const handleTextareaBlur = () => {
    setIsClicked(false);
  };

  return (
    <>
      <h2 className={style.title}>
        <b>About you :</b>
      </h2>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.leftBlock}>
            <div className={style.textAreaBlock}>
              <div className={style.inputBlock}>
                <CustomInput
                  callback={checkNameDirty}
                  heg={false}
                  value={name}
                  width={"70%"}
                  placeholder={"Type your name"}
                />
                {dirtyName ? <p>Поле ввода не должно быть пустым</p> : null}
                <>
                  <FaHashtag className={style.imgHash} />
                  <CustomInput
                    callback={checkHashDirty}
                    className={style.inputHash}
                    value={userTag}
                    width={"70%"}
                    placeholder={"Type your user tag"}
                    heg={true}
                  />
                  {dirtyHash ? <p>Поле ввода не должно быть пустым</p> : null}
                </>
              </div>
              <p className={style.areaText}>
                Write about <span>yourself </span> (option):
              </p>
              <textarea
                value={bio}
                onClick={handleTextareaClick}
                onBlur={handleTextareaBlur}
                onChange={() => dispatch(setBioAC(event.target.value))}
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

          <div
            onClick={() => errorToaster("Поля ввода не должны быть пустыми!")}
            className={style.buttonOne}
          >
            {dirtyName || dirtyHash ? (
              <>
                <Toaster position="top-right" reverseOrder={false} />
                <CustomButton title={"Next"} typeOfButton={"button"} />
              </>
            ) : (
              <CustomButton
                title={"Next"}
                typeOfButton={"button"}
                callback={props.nextStep}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
