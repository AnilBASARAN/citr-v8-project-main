const fetchPet = async ({queryKey}) => {
    const id = queryKey[1];
    // if its an unsuccessfull request REACT QUERY want you to throw an error
// Fetch will not always throw an error if you get like 500
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

    if(!apiRes.ok){
        throw new Error(`details/${id} fetch not ok`);
        // this is usefull because react query will catch and it is going to know that this doesnt work and
        // get use to it when you using REACT QUERY its standard
    }
//react query expects you to return a promise
// so we dont have to await res.json we can just return apiRes.json; and its still a promise
    return apiRes.json();
}

export default fetchPet;