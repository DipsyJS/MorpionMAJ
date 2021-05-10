const client = require('../../src/index');

client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`);

    const arrayOfStatus = [
        `${client.guilds.cache.size} serveurs`,
        `${client.channels.cache.size} channels`,
        `${client.users.cache.size} utilisateurs`,
        `${client.user.tag}`,
        `!!help`,
        `Hosted for free by @Kyllis Net`,
        `❤`,
        `@dipsy#8517`,
    ]
    let index = 0;
    setInterval(() => {
        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setActivity(status),
            index++;
    }, 900)

})