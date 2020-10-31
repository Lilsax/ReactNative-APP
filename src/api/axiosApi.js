import axios from 'axios'; 

export default axios.create({
    baseURL: 'https://api.happi.dev/v1/music',
    headers: {
        'x-happi-key': 'f7b41dV3xOEEkSoW2ZqmCceGDfzpoEVW3zkOGVObzGhChN3puH436htA' 
    }
});