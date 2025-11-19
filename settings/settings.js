/*──────────────────────────────────────────────────────────
 *  🧩 NeoBot - Powered by NeoShiroko Labs
 *──────────────────────────────────────────────────────────
 *  🌐 Website  : https://www.neolabsofficial.my.id
 *  💬 WhatsApp : https://s.id/contact-zass
 *  📺 YouTube  : https://www.youtube.com/@zassonee
 *  🧠 GitHub   : github.com/zassonee/neobot
 *
 *  [ ! ] Jangan Hapus Wm Bggg
 *──────────── © 2025 Zass Onee. All rights reserved.───────────────────
 */

const fs = require('fs')
const chalk = require('chalk')

global.ytname = "https://www.youtube.com/@zassonee" //gausah ganti 
global.location = "Indonesia" // ganti serah mu
global.ownername = "Zass Onee" // ganti nama mu
global.ownernumber = '6285298027445'  // ganti nomermu
global.botname = 'Neo Ai Eigne' // ganti serah mu
global.idSaluran = "120363417526801494@newsletter" // idch
global.namach = "Neo-S Labs Official || Channel" // namach

global.packname = ':: Shiroko Sticker Unit ::'
global.author = 'Zass Onee - Neo Ai'
global.themeemoji = '🪀'
global.wm = "Neo-S Labs Official"

global.link = "https://whatsapp.com/channel/0029Vb615brAzNbywHCyRc1w" //linkch
global.namagc = "Marketplace¹ || Zass Official" //nama grup
global.linkgc = "https://chat.whatsapp.com/Bvdic3yrpFh5kTkk5oc5G0" //link gc
global.web = "https://www.neolabsofficial.my.id" // website 
global.prefa = ['!','.','#','💐']

//Manage Vercel
global.vercelToken = "-" //Your Vercel Token

//Manage GitHub
global.githubToken = "-" //Your GitHub Token
global.githubUsername = "-" //Your GitHub Username

//Bot Media
global.imgthumb = "https://files.catbox.moe/lrfpvb.jpg" //thumb menu
global.imgmenu = "https://files.catbox.moe/dp03xl.jpg" //thumb menu2
global.logo = "https://files.catbox.moe/lagzlv.jpg" //logo toko
global.warning = "https://files.catbox.moe/w6ulzy.jpg" //ikon vr
global.vidthumb = "https://files.catbox.moe/l3x1ss.mp4" //gif menu
global.vn = "https://files.catbox.moe/6fbf4n.mp3" //music menu

//Setting Panel Api
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://domainmu.com"
global.apikey = "" // Isi api ptla
global.capikey = "" // Isi api ptlc

//Setting Panel Api V2
global.egg2 = "15" // Isi id egg
global.nestid2 = "5" // Isi id nest
global.loc2 = "1" // Isi id location
global.domain2 = "https://domainmu2.com"
global.apikey2 = "-" // Isi api ptla
global.capikey2 = "-" // Isi api ptlc

//Setting Panel Api Private
global.egg3 = "15" // Isi id egg
global.nestid3 = "5" // Isi id nest
global.loc3 = "1" // Isi id location
global.domain3 = "https://domainmu-privatepanel.vip"
global.apikey3 = "-" // Isi api ptla
global.capikey3 = "-" // Isi api ptlc

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})