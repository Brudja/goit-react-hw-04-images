import axios from "axios";

const galleryApi = axios.create({
    baseURL: "https://pixabay.com/api",
    params:{
        key: "30101164-5b6631461b97d2f195e0e6d6e",
    }
});

export const getGalleryService = async (query, page) => {
    const {data} = await galleryApi.get("/", {
        params: {
        q: query,
        image_type:'photo',
        orientation:'horizontal',
        per_page: 12,
        page,        
        }
    })
    return data.hits;
}