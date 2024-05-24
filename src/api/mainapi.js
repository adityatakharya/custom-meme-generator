export const getAllMemes = async() => {
    const response1 = await fetch(`https://api.imgflip.com/get_memes`)
    const response2 = await response1.json();
    console.log("Response2: ", response2);
    return response2;
}