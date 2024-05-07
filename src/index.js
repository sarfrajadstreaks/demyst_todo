#! /usr/bin/env node

const { getFilterdData } = require("./todo");

//get User give arguments i.e url and limit if any
const userArgs = process.argv.slice(2).reduce((acc, arg) => {
    const [key, value] = arg.replace("--","").split('=');
    acc[key] = value;
    return acc;
}, {});
(async () => {
    console.time("fetchData");
    const data= await getFilterdData(userArgs,["title","completed"])
    console.table(data);
    console.timeEnd("fetchData")
}
)();