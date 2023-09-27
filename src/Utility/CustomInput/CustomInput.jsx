/* eslint-disable react/prop-types */
import { useState } from 'react'
import style from './CustomInput.module.scss'
import { useDispatch } from 'react-redux'
import { setNameAC } from '../../Redux/Profile/Name/seNameAC'
import { setUserTagAC } from '../../Redux/Profile/UserTag/setUserTagAC'

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
        <input
          onChange={handleChange}
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
  )
}

export default CustomInput
