const Discord = require('discord.js');
const hbot = new Discord.Client();

//Hilfe 
hbot.on('message', (message) => {
    if(message.content == '-help') {
        message.channel.sendMessage(':zap:Befehle:\n\n:zap: -u18 -> Sendet ein Animebild\n:zap:-gif -> Sendet ein Animegif\n:zap:-hentai -> Schreibt einen Hentainamen');
    }
});


hbot.on('message', (message) => {
    if(message.content == '-anime') {
        message.channel.sendFile('./images/anime.jpg');
    }
});

//Generiert bei dem Befehl random Bilder
hbot.on('message', (message) => {
    if(message.content == '-u18'){
    var randomPic = Math.floor((Math.random()*12)+1);

    if(randomPic == 1)
    message.channel.sendFile('./images/anime.jpg');

    if(randomPic == 2)
    message.channel.sendFile('./images/anime2.jpg');

    if(randomPic == 3)
    message.channel.sendFile('./images/anime3.jpg');

    if(randomPic == 4)
    message.channel.sendFile('./images/anime4.jpg');

    if(randomPic == 5)
    message.channel.sendFile('./images/anime5.jpg')

    if(randomPic == 6)
    message.channel.sendFile('./images/anime6.jpg')

    if(randomPic == 7)
    message.channel.sendFile('./images/anime7.jpg')

    if(randomPic == 8)
    message.channel.sendFile('./images/anime8.jpg')

    if(randomPic == 9)
    message.channel.sendFile('./images/anime9.jpg')

    if(randomPic == 10)
    message.channel.sendFile('./images/anime10.jpg')

    if(randomPic == 11)
    message.channel.sendFile('./images/anime11.jpg')

    if(randomPic == 12)
    message.channel.sendFile('./images/anime12.png')
    }
});

//Generiert bei dem Befehl random GIFs
hbot.on('message', (message) => {
    if(message.content == '-gif'){
    var randomGIF = Math.floor((Math.random()*3)+1);

    if(randomGIF == 1)
    message.channel.sendFile('./gifs/gif1.gif');

    if(randomGIF == 2)
    message.channel.sendFile('./gifs/gif2.gif');

    if(randomGIF == 3)
    message.channel.sendFile('./gifs/gif3.gif');
    }
});

hbot.on('message', (message) => {
    if(message.content == '-hentai'){
    var randomHentai = Math.floor((Math.random()*16)+1);

    if(randomHentai == 1)
    message.channel.sendMessage('Saimin Class - Episode 1');

    if(randomHentai == 2)
    message.channel.sendMessage('Hataraku Otona No Renai Jijou - Episode 1');

    if(randomHentai == 3)
    message.channel.sendMessage('Mashou No Nie - Episode 2');

    if(randomHentai == 4)
    message.channel.sendMessage('Menkui! - Episode 2');

    if(randomHentai == 5)
    message.channel.sendMessage('Menkui! - Episode 1');

    if(randomHentai == 6)
    message.channel.sendMessage('Shoujo-Tachi No Sadism The Animation - Episode 2');

    if(randomHentai == 7)
    message.channel.sendMessage('Ima Kara Atashi... - Episode 2');

    if(randomHentai == 8)
    message.channel.sendMessage('Kimi No Mana Wa Rina Witch - Episode 1');

    if(randomHentai == 9)
    message.channel.sendMessage('Bokura No Sex - Episode 1');

    if(randomHentai == 10)
    message.channel.sendMessage('Shiiku X Kanojo - Episode 3');

    if(randomHentai == 11)
    message.channel.sendMessage('Futabu! - Episode 2');

    if(randomHentai == 12)
    message.channel.sendMessage('Futabu! - Episode 1');

    if(randomHentai == 13)
    message.channel.sendMessage('Pretty X Cation 2 - Episode 1');

    if(randomHentai == 14)
    message.channel.sendMessage('Hachishaku Hachiwa Keraku Meguri: Igyou');

    if(randomHentai == 15)
    message.channel.sendMessage('JK To Ero Konbini Tenchou - Episode 3');

    if(randomHentai == 16)
    message.channel.sendMessage('Bangable Girl - Episode 2');
    }
});

//Login-Token hier einfügen
hbot.login('DEIN TOKEN HIER');
