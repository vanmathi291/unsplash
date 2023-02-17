url='https://api.unsplash.com/photos/?client_id=FEJJBd3sxqes7cHM3czQxxpqwMAWLrGy1d6cHSi04pM&page=1 '

url='https://api.unsplash.com/photos/?client_id=FEJJBd3sxqes7cHM3czQxxpqwMAWLrGy1d6cHSi04pM&query=%22nature%22 '

async function api(){
    v=fetch(url)
    out1=await v
    prom=out1.json()
    out11=await prom
    console.log(out11.results);
}
api()