async function fetchData(userArgs) {
    try {
        const response = await fetch(userArgs?.url || `https://jsonplaceholder.typicode.com/todos`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log("Error:", err);
        throw err;
    }
}
async function getFilterdData(userArgs,userAttributes){
    let count=0;
    const limit=Number(userArgs?.limit) || 20; // setting user defined limit if any else 20.
    const fetchedData = await fetchData(userArgs); //fetching todos
    const final=fetchedData.
    filter((todo) => {
        if (todo.id % 2 == 0 && count <limit) {
            count++;
            return true;
        }
        return false;
    })
    .map(todo=>{
        return userAttributes?userAttributes.reduce((obj,attr)=>{
            obj[attr]=todo[attr];
            return obj
        },{}):todo
    })
    return final;
}
module.exports={getFilterdData,fetchData}