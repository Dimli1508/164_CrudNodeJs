function samplePromise(){
    return Promise.resolve("Asroni");
}

const name = await samplePromise();
console.info(name);
