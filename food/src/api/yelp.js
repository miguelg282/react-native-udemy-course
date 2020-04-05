import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SxQ-EeSn45i-rkpOTpZ0jI9hscQVIyMiFXvndtJFXOYZkxm7xDG-_mYnHcfLnJkCY4dXs1cVSLrepZcXwX7ykaveN-0_PvG7GIJL5CkuyWPGdwUjaXfRc4_gazd-XnYx'
    }

});

