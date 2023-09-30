import {useDropzone} from 'react-dropzone';
import style from './InputImage.module.scss'
import {Avatar} from "@mui/material";
import {useSelector} from "react-redux";
import {stringAvatar} from "../AvatarColor/Avatar.js";

export const ImageInput = () => {
    const firstLetterName = useSelector((state) => state.name)
    const {getRootProps, getInputProps, acceptedFiles} = useDropzone();

    const files = acceptedFiles.map(file => (
        <div key={file.name}>
            <Avatar sx={{width: 206, height: 206}} alt={file.name}
                    src={URL.createObjectURL(file)}></Avatar>
        </div>
    ));

    return (
        <div className={style.dragBlock}>
            <div>{files.length > 0 ? files : <Avatar  {...stringAvatar(firstLetterName)} ></Avatar> }</div>
            <div {...getRootProps()}>
                <label>
                    JPG or PNG file:</label>
                <input {...getInputProps()} type="file"  accept=".jpg, .png"/>
                <p className={style.dragButton}>Drag files here or click to select files.</p>
            </div>
        </div>
    );
};
