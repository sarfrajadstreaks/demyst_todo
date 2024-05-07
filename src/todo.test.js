const { fetchData,getFilterdData }= require('./todo')

describe("fetchData",()=>{
    it("should fetch todo from default url",async()=>{
        const data=await fetchData();
        expect(data.length).toBeGreaterThan(0);
    });
    it("should give first 10 even todos",async()=>{
        const data=await getFilterdData({limit:'10'});
        expect(data.length).toBe(10);
    });
    it("should give first 20 even todos by default",async()=>{
        const data=await getFilterdData();
        expect(data.length).toBe(20);
    });
    it("should give all attribute of todos",async()=>{
        const data=await getFilterdData({limit:1});
        const keys=Object.keys(data[0]);
        
        expect(data.length).toBe(1);
        expect(keys.length).toBeGreaterThan(2);

        expect(keys.includes("title")).toBe(true);
        expect(keys.includes("completed")).toBe(true);
    })
    it("should give only the title and completed attribute of todos",async()=>{
        const data=await getFilterdData({limit:1},['title','completed']);
        const keys=Object.keys(data[0]);
        
        expect(data.length).toBe(1);
        expect(keys.length).toBe(2);
        
        expect(keys.includes("title")).toBe(true);
        expect(keys.includes("completed")).toBe(true);
    })
})