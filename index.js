const { exec } = require("child_process");

exec("ls -la", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);

    const pid = getPortFromCommand(stdout);
    console.log(getPortFromCommand(`process found: ${pid}`));
});

function getPortFromCommand(output) { 
    return output.trim().substr(output.length - 5);
}