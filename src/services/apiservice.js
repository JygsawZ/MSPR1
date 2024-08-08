import axios from 'axios';
import CONFIG from '../config.js';

const fetchPosts = async () => {
    try {
        const response = await axios.get(`${CONFIG.API_BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export default fetchPosts;