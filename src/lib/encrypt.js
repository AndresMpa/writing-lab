import CryptoJS from "crypto-js";

const encryptData = (data) =>
  CryptoJS.AES.encrypt(data, ).toString();

export { encryptData };
