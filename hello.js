function createuser(name,age=18,isActive=true){
    return { 
        name:name||"isActive",
        age,
        isActive,
        createdAt: new Date()
    };
    }
    console.log(createuser("John"));
    