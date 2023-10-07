/*
   Created By AdminSFDev
   My Contact wa.me/6289513081052
   Rxzy-MD V1.1.0
*/

const fs = require('fs')
const chalk = require('chalk')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.APIs = {
	beta: 'https://api.betabotz.org',
}

// Apikey
global.APIKeys = {
	'https://api.betabotz.org': 'apikeylu',
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
global.lol = 'apikeylu' // https://api.lolhuman.xyz
global.beta = 'apikeylu' // https://api.betabotz.org
global.xzn = 'apikeylu' // https://xnz.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '6282114542876' // Owner Utama
global.owner = ['6282114542876'] // Owner Lainnya
global.namaowner = 'AdminSF お-ぎ' // Nama Owner
global.premium = ["6282114542876"] // Premium User
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = 'SF-MD' // NickBot
global.typemenu = 'v2' 
// 'v1' > 'v2' > 'v3' > 'v4'
// 'v1' Image ORI!
// 'v2' Image Kece!
// 'v3' Video GIF!
// 'v4' CallVideo!
global.autoread = false // ReadChat
global.autobio = true // AutoBio
global.autoblok212 = true // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.packname = 'Created By' // Watermark Sticker
global.author = 'AdminSF ダ' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    done: 'Done ✅',
    success: '_Selesai Kak Maap Kalo Bagus_\nBy _Admin SF_',
    apierror: '[❗] Kesalahan Apikey',
    prem: 'Feature Only For User _*PREMIUM*_',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Private Chat*_',
    wait: 'Wait a Moment, for Process',    
    error: '_*Sorry Features Error*_',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/quoted.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})