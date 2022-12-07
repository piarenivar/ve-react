import axios from 'axios';

const SendEmail = async ({ fname, lname, tel, email, state, subject, message }) => {
    try {
        let res = await axios.post(`http://localhost:5000/send`, { fname, lname, tel, email, state, subject, message });
    } catch (error) {
        alert(error.response.data.message);
    }
};

export default SendEmail;