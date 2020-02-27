const Discord =  require('discord.js');
const client = new Discord.Client();
var prefix = "?";

client.login(process.env.TOKEN);

client.on('message', message =>{
    if(message.content === "cc"){
        message.channel.sendMessage('cmt tu va ?')
        console.log('repond a cc');
    }
});



client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada:' + member.user.username +  'a rejoins ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + emeber.guild.memberCount)
    member.guild.channels.get('680154421400699081').send(embed)
    member.addrole('680869398298361862')

});

client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry:' + member.user.username +  'a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + emeber.guild.memberCount)
    member.guild.channels.get('680154421400699081').send(embed)

});
