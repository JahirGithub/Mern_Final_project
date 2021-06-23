import axios from 'axios'; 

export default axios.create({
    baseUrl:"https://api.unsplash.com/",
    headers: {
        Authorization:"Client-ID mD66zoXPNBaSXxBGhgLWkasPiHn6zEcm3BBwbf77zZs",
    }
})