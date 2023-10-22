import Select from "react-select";
import React from "react";
import {useDispatch} from "react-redux";
import makeAnimated from 'react-select/animated';
// import {languageStyles} from "../Languages/languagesStyle.js";
import {languageOptions} from "../Languages/languages.ts";
import {languageStyles} from "../Languages/languagesStyle.tsx";

function CustomSelector ({actionCreater , selecter}) {
    const animatedComponents = makeAnimated();
    const dispatch = useDispatch();
    return (
            <Select
                onChange={(choice) =>
                    dispatch(actionCreater(choice))
                }
                closeMenuOnSelect={true}
                defaultValue={selecter}
                components={animatedComponents}
                isMulti
                name="languages"
                options={languageOptions}
                classNamePrefix="select"
                styles={languageStyles}
            />
    )
}

export default CustomSelector