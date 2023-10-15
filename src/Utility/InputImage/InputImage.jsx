import {useDropzone} from 'react-dropzone';
import style from './InputImage.module.scss'
import {Avatar} from "@mui/material";
import {stringAvatar} from "../AvatarColor/Avatar.js";
import {useDispatch} from "react-redux";
import {ImCross} from "react-icons/im";
import {setPhotoAC} from "../../Redux/Profile/Photo/deletePhotoAC.js";



export const ImageInput = ({avatarText, actionCreater, selector}) => {
    const dispatch = useDispatch();

    const {getRootProps, getInputProps, acceptedFiles = selector} = useDropzone({
        onDrop: (acceptedFiles) => {
            dispatch(actionCreater(acceptedFiles[0]));
        },
    });


    function deleteAvatarImg() {
        dispatch(setPhotoAC())
    }

    let files = acceptedFiles.map((file, index) => {
        if (index > 0) {
            return
        }
        return <div key={file.name} className={style.avatarBlock}>
            <button onClick={deleteAvatarImg} className={style.dragCancel}>
                <ImCross size={50}/>
            </button>
            <div className={style.avatar}>
                <Avatar
                    sx={{width: 206, height: 206}}
                    alt={file.name}
                    src={URL.createObjectURL(file)}
                ></Avatar>
            </div>
        </div>
    })

    return (
        <div className={style.dragBlock}>
            <div >
                {files.length > 0 ? (
                    files
                ) : selector ? (
                    <div className={style.avatarBlock}>
                        <button onClick={deleteAvatarImg} className={style.dragCancel}>
                            <ImCross size={50}/>
                        </button>
                        <div className={style.avatar}>
                            <Avatar
                                sx={{width: 206, height: 206}}
                                alt="avatar"
                                src={URL.createObjectURL(selector)}
                            />
                        </div>
                    </div>
                ) : (
                    <div className={style.avatarBlock}>
                        <Avatar {...stringAvatar(avatarText)}></Avatar>
                    </div>
                )}
            </div>
            <div {...getRootProps()}>
                <label>JPG or PNG file:</label>
                <input  {...getInputProps()} type="file" multiple={false} accept=".jpg, .png"/>
                <p className={style.dragButton}>Drag files here or click to select files.</p>
            </div>
        </div>
    );
};
