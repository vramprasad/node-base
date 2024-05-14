const queueName = "inputQueue"

async function main() {
    console.log("Inside main")
    console.log(queueName)
}

main().catch((err) => {
    console.log("Error occured", err);
    process.exit(1);
})