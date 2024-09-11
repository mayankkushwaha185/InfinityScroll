//Unsplash Api
const count = 50;
const apikey = 'ePUSLK_AQitDIKqQHqVKNjHsOCkIAUtcVwDe_cKJdS0';
const apiurl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

// Get photos from unspalsh api

async function getPhotos() {
    try {
        const response = await fetch(apiurl);
        const data = await response.json()
        console.log(data);
    } catch (error) {
        // catch Error here 
    }
}

//On load

getPhotos();