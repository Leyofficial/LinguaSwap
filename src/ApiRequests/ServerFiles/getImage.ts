import axios from "axios";

export const getImageFromServer = async (imageName: string | any , callback: (arg: string) => void, isLoad?: (arg: boolean) => void) => {
    try {
        const response: any = await axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses/upload/${imageName.path ? imageName.path : imageName}`, {responseType: 'arraybuffer'})
        const base64 = btoa(
            new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
            ),
        );
        callback("data:;base64," + base64)
        if (isLoad) {
            isLoad(true)
        }
    } catch (err) {
        if (isLoad) {
            isLoad(true)
            console.log(err)
        }
    }
}