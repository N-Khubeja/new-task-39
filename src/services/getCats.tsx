export const getCats = async () => {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=20&api_key=${process.env.CAT_API}`)
    return res.json()     
}