/* eslint-disable react/prop-types */
import { useState } from 'react'
import style from './CustomInput.module.scss'
import { useDispatch } from 'react-redux'
import { setUserTagAC } from '../../Redux/Profile/UserTag/setUserTagAC.js'
import {setNameAC} from "../../Redux/Profile/Name/setNameAC.ts";


const CustomInput = (props) => {
  const dispatch = useDispatch()
  function handleChange(event) {
    if (props.heg) {
      props.callback(event.target.value)
      dispatch(setUserTagAC(event.target.value.trim()))
    } else {
      props.callback(event.target.value)
      dispatch(setNameAC(event.target.value))
    }
  }

  const [input, setInput] = useState('')
  const { width = 500, callback, placeholder,  value } = props
  return (
    <div className={style.container}>
      <div className={style.wrapperContainer}></div>
      <div className={style['wave-group']} style={{ width: width }}>
        <div  className={style.inputWrapper}>
          <input
              onChange={handleChange}
              value={value}
              style={{ width: width }}
              placeholder={placeholder}
              required=""
              type="text"
              className={style.input}
          />
          {props.necessarily ? <b className={style.necessarily}>*</b> : null}
        </div>
        <span className={style.bar} style={{ width: width }}></span>
        <label className={style.label} style={{ width: width }}></label>
      </div>
    </div>
  )
}

export default CustomInput
