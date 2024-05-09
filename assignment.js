// Q1
async function logMessageWithDelay(message, delayTime){
     await new Promise(resolve => setTimeout(resolve, delayTime));
     console.log(message);
}
delayTime("I am Jmimah",2000)

// Q2
const userIds=['user1','user2','user3'];
async function fetchAndLogUserData(){
    for(const userId of userIds){
        try{
            const userId = await
            getUserData(userId)
            console.log(userData)
        }
        catch(error){
            console.log(`An error occured for user ${userId}:${error}`);
        }
    }
}
function getUserData(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const userData = {id,name:`user ${id},age:20`}
            resolve(userData)
        },1000)
    });
}
fetchAndLogUserData()

// Q3
async function handleTask() {
    try {
      const result = await performTask();
      console.log("Task completed successfully:", result);
    } catch (error) {
      console.error("Error occurred during task:", error.message);
    }
  }
    handleTask();

// Q4
    function unstableTask(taskName, failureProbability) {
        return new Promise((resolve, reject) => {
            const randomValue = Math.random(); 
            if (randomValue > failureProbability) {
                resolve(`Task '${taskName}' succeeded!`);
            } else {
                reject(`Task '${taskName}' failed!`);
            }
        });
    }
    
    async function executeWithRetry(taskName, retries, failureProbability) {
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                await unstableTask(taskName, failureProbability);
                console.log(`Attempt ${attempt}: Task '${taskName}' succeeded.`);
                return;
            } catch (error) {
                console.log(`Attempt ${attempt}: ${error}`);
            }
        }
        console.log(`All ${retries} attempts failed for task '${taskName}'.`);
    }
    
    let taskName = ' Task';
    let retries = 2;
    let failureProbability = 0.2; 
    
    executeWithRetry(taskName, retries, failureProbability);
    
      
    
