import axios from "axios";

export const getImageFromServer = (imageName,callback) => {

   return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses/upload/${imageName}`, { responseType: 'arraybuffer' })
      .then(res => {
         const base64 = btoa(
            new Uint8Array(res.data).reduce(
               (data, byte) => data + String.fromCharCode(byte),
               '',
            ),
         );
         callback("data:;base64," + base64)
      });
}