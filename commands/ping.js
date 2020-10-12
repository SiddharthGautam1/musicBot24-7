exports.run = async (client, message, args) => {
    message.channel.send("Pinging...").then(msg => {
        const ping = msg.createdTimestamp - message.createdTimestamp - 375;
        msg.edit(`Ping is ${ping}ms`);
        msg.react("🏓");
        
    })

}