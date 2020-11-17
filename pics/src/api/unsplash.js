import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CxtQDMdiotxVXsOcV_y5ttnOUvCc_FtjxYHoAcqIb_Y'
    }  
}) ;

