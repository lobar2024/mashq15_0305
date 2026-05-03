function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("Start");
    await delay(2000);
    console.log("2 sekunddan keyin");
}

run();
