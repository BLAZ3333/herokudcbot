const Discord = require('discord.js')
const client = new Discord.Client();
const token ="NjM3NjAxODMwOTU1OTA5MTUx.XbcS_Q.tWAih_dkrsU_P3L65Zv-tXhTDr8"
client.login(token)
client.on('ready', ()=> {
const attacment = Discord.attacment=("hqdefault.jpg")
var channel =client.channels.find(channel => channel.id === '636213032501903360');
client.user.setActivity("Witch Doctor", {type:"Listening"})
setInterval(() =>{
    channel.send("ohh ehh ohh ahh ahh ting tang vala vala bing bang");
 
 }, 3600000);



});
