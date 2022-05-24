const axios = require('axios');

srtUpdateCaptainsInterval();

async function srtUpdateCaptainsInterval(){ 
    try{
        const response = await axios.get("https://stream-raiders-tips.vercel.app/api/updateCurrentRaids");
        console.log(response.data, new Date());
    } catch(error) { 
        console.log(error);
        console.log('Received the above error on this attempt')
    }
    setTimeout( async ()=>{ await srtUpdateCaptainsInterval() }, 17000)
}
