let frutas = ['bamama', 'maça', 'morango', 'uva']

const onlyM = frutas.filter((item, index) =>{
    if(item.includes("m")) {
        return true
    }
})

console.log(onlyM);