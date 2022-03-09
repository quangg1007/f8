var courseAPI = 'http://localhost:3000/db'

fetch(courseAPI)
    .then((response)=>{
        return response.json();
    })
    .then((courses)=>{
        console.log(courses)
    })