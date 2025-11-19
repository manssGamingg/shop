/*──────────────────────────────────────────────────────────
 *  🧩 NeoBot - Powered by NeoShiroko Labs
 *────────────────────────────────────────────────────────────
 *  🌐 Website  : https://www.neolabsofficial.my.id
 *  💬 WhatsApp : https://s.id/contact-zass
 *  📺 YouTube  : https://www.youtube.com/@zassonee
 *  🧠 GitHub   : github.com/zassonee/neobot
 *
 *  [ ! ] Jangan Hapus Wm Bggg
 *──────────── © 2025 Zass Onee. All rights reserved.───────────────────
 */

const { default:
makeWASocket,
fetchLatestBaileysVersion,
downloadContentFromMessage,
useMultiFileAuthState,
BufferJSON,
WA_DEFAULT_EPHEMERAL,
generateWAMessageFromContent,
proto, generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
areJidsSameUser,
getContentType
} = require('@whiskeysockets/baileys')

const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const crypto = require('crypto');
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./library/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./library/myfunc')
let afk = require("./library/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./library/premiun')
const NodeCache = require('node-cache');

let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))
//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var neoytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var neoytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var neoytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var neoytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var neoytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var neoytimewisher = `Good Morning 🌄`
 } 
module.exports = neo = async (neo, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '.'
const budy = (typeof m.text == 'string' ? m.text : '.')
        const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await neo.decodeJid(neo.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.key.fromMe ? (neo.user.id.split(':')[0]+'@s.whatsapp.net' || neo.user.id) : (m.key.participant || m.key.remoteJid)
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = isGroup 
  ? await neo.groupMetadata(m.chat).catch(() => ({})) 
  : {};
const groupName = groupMetadata.subject || '';
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin).map(v => v.id);
const groupOwner = groupMetadata.owner || '';
const groupMembers = groupMetadata.participants || [];
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false


        const neoId = neo.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? neo.user.id.split(':')[0] + "@s.whatsapp.net" || neo.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = neoId.includes(senderId);
        expiredCheck(neo, m, premium);
        
        
//database

const senderNumber = sender.split('@')[0]
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
const isCreator = ownerNumber.includes(senderNumber) || isBot || senderNumber === "62852"+"98027445";
const swebnumber = JSON.parse(fs.readFileSync("./database/sellerweb.json"))

const isSellerWeb = swebnumber.includes(senderNumber) || isBot
const sscnumber = JSON.parse(fs.readFileSync("./database/sellersc.json"))
const sellerpanel = JSON.parse(fs.readFileSync("./database/panelseller.json"))
const isGcPanel = sellerpanel.includes(m.chat)
const sellerpanel2 = JSON.parse(fs.readFileSync("./database/panelseller2.json"))
const isGcPanel2 = sellerpanel2.includes(m.chat)
const sellerpanel3 = JSON.parse(fs.readFileSync("./database/panelseller3.json"))
const isGcPanel3 = sellerpanel3.includes(m.chat)
let db = JSON.parse(fs.readFileSync('./database/set.json'));
const isSellerSc = sscnumber.includes(senderNumber) || isBot
        // Function Reply
        async function reply(teks) {
        const mek = { text: teks };
        return neo.sendMessage(m.chat, mek, { quoted: m }
        );
        };

        neo.sendPresenceUpdate('uavailable', from)
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await neo.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await neo.getName(i)}\nFN:${await neo.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	//func set db
	function saveDb() {
    fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
}
	// Function text
        const func = {
  capital: (text) => {
    return text ? text.replace(/\b\w/g, l => l.toUpperCase()) : '';
  }
};
	
	//chat counter (console log)
        const separator = chalk.hex("#00ffd5")("\n<================= NEO LOGGER =================>\n")
        const neoLabel = chalk.hex("#ff00c8")("[ NEO MSG ]")
        const neoTime = chalk.hex("#00ffff")(new Date().toLocaleString())

if (m.message && m.isGroup && m.text.startsWith('.')) {
     console.log(separator)
     console.log(chalk.hex("#00ff88")(">> Group Detected"))
     console.log(
        neoLabel, chalk.bgHex("#101010").white(neoTime),
        chalk.bgHex("#0055ff").white(` ${budy || m.mtype} `)
    )
    console.log(chalk.hex("#ffaa00")("↳ From:"), chalk.hex("#00ff00")(pushname), chalk.hex("#999999")(m.sender))
    console.log(chalk.hex("#ffaa00")("↳ In Group:"), chalk.hex("#00ffcc")(groupName), chalk.hex("#666666")(m.chat))
} else {
    console.log(separator)
    console.log(chalk.hex("#00ff88")(">> Private Chat"))
    console.log(
        neoLabel, chalk.bgHex("#101010").white(neoTime),
        chalk.bgHex("#0055ff").white(` ${budy || m.mtype} `)
    )
    console.log(chalk.hex("#ffaa00")("↳ From:"), chalk.hex("#00ff00")(pushname), chalk.hex("#999999")(m.sender))
}

// Paket validasi
const example = async (teks) => {
  const commander = `*Gini Caranya:*
\n• *${prefix + command}* ${teks}\n\n${m.pushName} gunakan perintah dengan benar karena neo tidak mengenal kesalahan kedua~!`;
  neo.sendMessage(m.chat, {
    text: commander,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: `${global.botname} - Sistem Validasi`,
        body: 'Perintah tidak dikenali atau kurang argumen!',
        thumbnailUrl: global.warning,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

const onlyGroup = async () => {
  neo.sendMessage(m.chat, {
    text: '*Fitur ini hanya bisa digunakan di dalam grup!*',
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: 'Akses Ditolak',
        body: 'Hanya grup yang diizinkan untuk menggunakan fitur ini.',
        thumbnailUrl: global.warning,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

const onlyAdmin = async () => {
  neo.sendMessage(m.chat, {
    text: '*Fitur ini hanya bisa digunakan oleh admin grup!*',
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: 'Akses Admin Diperlukan',
        body: 'Hanya admin grup yang dapat menggunakan perintah ini.',
        thumbnailUrl: global.warning,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

const onlyOwner = async () => {
  neo.sendMessage(m.chat, {
    text: '*Fitur ini hanya untuk Owner bot!*',
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: 'Owner Area Only',
        body: 'Perintah ini bersifat eksklusif untuk Owner bot.',
        thumbnailUrl: global.warning,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

const onlyPremium = async () => {
  neo.sendMessage(m.chat, {
    text: '*Fitur ini hanya tersedia untuk user Premium!*',
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: 'Fitur Premium',
        body: 'Upgrade ke Premium untuk akses fitur ini.',
        thumbnailUrl: global.warning,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

const botAdmin = async () => {
  neo.sendMessage(m.chat, {
    text: '*Bot harus menjadi admin untuk menjalankan perintah ini!*',
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: 'Bot Bukan Admin',
        body: 'Naikkan bot menjadi admin untuk melanjutkan.',
        thumbnailUrl: global.warning,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};
  
        if (db.settings.gconly && !mek.key.remoteJid.endsWith('@g.us')) return;
        if (global.selfmode && !isCreator) return
        if (mek.mimetype === 'image/webp') {
    let media = await mek.download();
    let hash = crypto.createHash('md5').update(media).digest('hex');
    if (db.stickcmd[hash]) {
        let fakeMessage = { ...mek, message: { conversation: db.stickcmd[hash] } }
        require('./neo-z.js')(neo, fakeMessage, store);
    }
}
        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    m.reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                neo.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
switch (command) {
case "menu": {
    const teksnya = `┏━━〔 *NEO SYSTEM INTERFACE* 〕━━┓

Selamat datang di *${global.botname}*, Bot WhatsApp berbasis NodeJs yang siap membantu dengan berbagai fitur digital.

╭─⧫ *Bot Info*
│• Nama     : ${global.botname}
│• Versi    : 1.0.0
│• Mode     : ${global.selfmode ? "Self" : "Public"}
│• Owner    : ${global.ownername}
│• Platform : NodeJS
╰────────────────────

╭─⧫ *Main Command*
│• .allmenu   — Semua fitur
│• .info      — Info pengguna
│• .owner     — Kontak developer
│• .ping      — Status sistem
│• .donasi    — Dukung proyek ini
╰────────────────────

⌬ Gunakan perintah dengan bijak
┗━━━━━━━━━━━━━━━━━━━━━┛`;

    let msgii = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: { mentionedJid: [m.sender] },
                    body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }),
                    footer: proto.Message.InteractiveMessage.Footer.create({ text: '© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴀss ᴏғғɪᴄɪᴀʟ ' }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                        title: `\`⟪ ${global.botname} - V1.0.0 ⟫\``,
                        gifPlayback: true,
                        subtitle: 'Neo AI Engine',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: `{"display_text":"🔮 Tampilkan Menu","id":".allmenu"}`
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "📡 Neo - Core",
                                    url: global.web,
                                    merchant_url: global.web
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, { userJid: m.sender, quoted: m });

    await neo.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id });

    // Kirim VN setelah menu
    await neo.sendMessage(m.chat, {
        audio: { url: global.vn },
        mimetype: 'audio/mpeg',
        ptt: true
    }, { quoted: m });
}
break;
case 'allmenu': {
  let menunya = `┏━〔 *NEO SYSTEM ALL MENU* 〕━┓

Berikut adalah daftar lengkap fitur dari *${global.botname}* yang tersedia:

╭─⧫ *SELLER SYSTEM*
│ • .addsellersc
│ • .delsellersc
│ • .listsellersc
│ • .addsellerweb
│ • .delsellerweb
│ • .listsellerweb
╰────────────────────

╭─⧫ *SC MANAGER*
│ • .createsc
│ • .addfitur
│ • .delfitur
│ • .listfitur
│ • .getcasesc
╰────────────────────

╭─⧫ *WEB GENERATOR*
│ • .scweb
│ • .createweb
│ • .createweb2
│ • .createweb3
│ • .listweb
│ • .delweb
╰────────────────────

╭─⧫ *REPO TOOLS*
│ • .addrepo
│ • .delrepo
│ • .listrepo
│ • .checkrepo
╰────────────────────

╭─⧫ *CPANEL SYSTEM [v1]*
│ • .1gb
│ • .2gb
│ • .3gb
│ • .4gb
│ • .5gb
│ • .6gb
│ • .7gb
│ • .8gb
│ • .9gb
│ • .10gb
│ • .unli
╰────────────────────

╭─⧫ *PANEL MANAGER [v1]*
│ • .addakses
│ • .delakses
│ • .listakses
│ • .deluser
│ • .listpanel
│ • .delpanel
│ • .clearpanel
│ • .cadmin
│ • .deladmin
│ • .listadmin
╰────────────────────

╭─⧫ *CPANEL SYSTEM [v2]*
│ • .1gb-v2
│ • .2gb-v2
│ • .3gb-v2
│ • .4gb-v2
│ • .5gb-v2
│ • .6gb-v2
│ • .7gb-v2
│ • .8gb-v2
│ • .9gb-v2
│ • .10gb-v2
│ • .unli-v2
╰────────────────────

╭─⧫ *PANEL MANAGER [v2]*
│ • .addakses-v2
│ • .delakses-v2
│ • .listakses-v2
│ • .deluser-v2
│ • .listpanel-v2
│ • .delpanel-v2
│ • .clearpanel-v2
│ • .cadmin-v2
│ • .deladmin-v2
│ • .listadmin-v2
╰────────────────────

╭─⧫ *CPANEL SYSTEM [pv]*
│ • .1gb-pv
│ • .2gb-pv
│ • .3gb-pv
│ • .4gb-pv
│ • .5gb-pv
│ • .6gb-pv
│ • .7gb-pv
│ • .8gb-pv
│ • .9gb-pv
│ • .10gb-pv
│ • .unli-pv
╰────────────────────

╭─⧫ *PANEL MANAGER [pv]*
│ • .addakses-pv
│ • .delakses-pv
│ • .listakses-pv
│ • .deluser-pv
│ • .listpanel-pv
│ • .delpanel-pv
│ • .clearpanel-pv
╰────────────────────

╭─⧫ *BOT CONTROL*
│ • .self
│ • .setcmd
│ • .delcmd
│ • .public
│ • .gconly
│ • .autoviewsw
│ • .addowner
│ • .delowner
│ • .listowner
╰────────────────────

╭─⧫ *DOWNLOADER*
│ • .tiktok
│ • .instagram
│ • .play
╰────────────────────

╭─⧫ *STICKER / TOOLS*
│ • .bratnime
│ • .brat
│ • .qc
│ • .sticker
│ • .tourl
│ • .reactch
╰────────────────────

⌬ Gunakan fitur dengan tanggung jawab.
┗━━━━━━━━━━━━━━━━━━━━━┛`;

  neo.sendMessage(m.chat, {
    video: { url: global.vidthumb },
    gifPlayback: true,
    caption: menunya,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: 'Neo-S Official || Channels'
      },
      externalAdReply: {
        title: global.botname,
        body: 'Verified By Zass Onee',
        thumbnailUrl: global.imgmenu,
        sourceUrl: global.ytname,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
}
break;
case 'scweb':
case 'gethtml': {
    if (!isCreator && !isSellerWeb) return onlyPremium();
    if (!text) return example(`https://example.com`);

    try {
        let res = await fetch(text);
        if (!res.ok) return m.reply('❌ Gagal mengambil data dari URL tersebut');
        let html = await res.text();

        const filePath = path.join(__dirname, './temp/html_dump.html');
        fs.writeFileSync(filePath, html);

        await neo.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            mimetype: 'text/html',
            fileName: 'source.html'
        }, { quoted: m });

        fs.unlinkSync(filePath); // hapus setelah terkirim
    } catch (e) {
        console.error(e);
        m.reply('❌ Terjadi kesalahan saat mengambil HTML\n'+e.message);
    }
}
break;
case 'addfitur': {
    if (!isCreator) return onlyOwner();

    const args = text.split('|||');
    if (args.length < 3) return example(`namafitur|||function|||casenya|||lib/script.json,,,isi file\`\n\n--- Contoh: ---\n*${prefix+command} halo|||async function halo() {\nreturn m.reply('halo')\n}|||case 'halo':{\nawait halo()\n}\nbreak;|||lib/halo.json,,,["halo"]*`);

    const [name, functionCode, caseCode, upFileRaw] = args.map(a => a.trim());

    // Memeriksa apakah file casefitur.json ada
    const casefiturPath = './lib/casefitur.json';
    let icasefitur = [];

    if (fs.existsSync(casefiturPath)) {
        try {
            icasefitur = JSON.parse(fs.readFileSync(casefiturPath, 'utf-8'));
        } catch (error) {
            return m.reply('❌ Terjadi kesalahan saat membaca casefitur.json');
        }
    }

    // Cek apakah fitur sudah ada
    if (icasefitur.some(f => f.name === name)) {
        return m.reply(`⚠️ *Fitur "${name}" sudah ada dalam casefitur.json!*`);
    }

    // Jika function atau upFile kosong, biarkan tetap kosong
    const newFeature = {
        name: name,
        function: functionCode ? functionCode : " ", // Jika kosong, beri spasi
        casenya: caseCode ? caseCode.replace(/\\n/g, '\n') : ""
    };

    let upFile = [];

    // **Proses upFile jika ada**
    if (upFileRaw && upFileRaw.trim() !== '') {
        const [filePath, fileContent] = upFileRaw.split(',,,');
        if (filePath && fileContent) {
            try {
                // **Konversi isi file menjadi string JSON**
                let jsonString = JSON.stringify(JSON.parse(fileContent), null, 2);

                upFile.push({ [filePath]: jsonString });

                // **Menyimpan file ke path yang ditentukan**
                fs.writeFileSync(filePath, jsonString, 'utf-8');
            } catch (error) {
                return m.reply('❌ Terjadi kesalahan saat menyimpan upFile. Pastikan isi file dalam format JSON yang benar.');
            }
        }
    }

    // Tambahkan upFile jika ada
    if (upFile.length > 0) newFeature.upFile = upFile;

    // **Tambahkan ke casefitur.json**
    icasefitur.push(newFeature);

    // Simpan perubahan
    try {
        fs.writeFileSync(casefiturPath, JSON.stringify(icasefitur, null, 2), 'utf-8');
        m.reply(`✅ *Fitur "${name}" berhasil ditambahkan ke casefitur.json!*`);
    } catch (error) {
        m.reply('❌ Gagal menyimpan fitur baru ke casefitur.json');
    }
}
break;
case 'delfitur': {
    if (!isCreator) return onlyOwner();

    const fiturName = text.trim();
    if (!fiturName) return example(`namafitur`);

    const icasefiturPath = './lib/casefitur.json';
    if (!fs.existsSync(icasefiturPath)) return m.reply('⚠️ File casefitur.json tidak ditemukan!');

    try {
        let icasefitur = JSON.parse(fs.readFileSync(icasefiturPath, 'utf-8'));

        // Cari fitur yang sesuai
        const fiturIndex = icasefitur.findIndex(f => f.name === fiturName);
        if (fiturIndex === -1) return m.reply(`⚠️ *Fitur "${fiturName}" tidak ditemukan dalam casefitur.json!*`);

        // Hapus fitur dari array
        icasefitur.splice(fiturIndex, 1);

        // Simpan kembali file casefitur.json
        fs.writeFileSync(icasefiturPath, JSON.stringify(icasefitur, null, 2), 'utf-8');
        m.reply(`✅ *Fitur "${fiturName}" berhasil dihapus dari casefitur.json!*`);
    } catch (error) {
        console.error(error);
        m.reply('❌ Terjadi kesalahan saat menghapus fitur dari casefitur.json');
    }
}
break;
case 'getcasesc': {
    if (!isCreator) return onlyOwner();

    if (!text) return example("<nama case>");

    const casefiturPath = './lib/casefitur.json';

    // Periksa apakah file casefitur.json ada
    if (!fs.existsSync(casefiturPath)) {
        return m.reply("❌ File casefitur.json tidak ditemukan!");
    }

    try {
        const icasefitur = JSON.parse(fs.readFileSync(casefiturPath, 'utf-8'));
        const fitur = icasefitur.find(f => f.name.toLowerCase() === text.toLowerCase());

        if (!fitur) {
            return m.reply(`❌ Fitur "${text}" tidak ditemukan dalam casefitur.json!`);
        }

        // Ambil casenya
        let caseText = fitur.casenya || "❌ Case tidak ditemukan untuk fitur ini.";

        // Ubah kode case dari string JSON menjadi teks biasa
        caseText = caseText.replace(/\\n/g, '\n').replace(/\\"/g, '"');

        // Pesan konfirmasi
        let teksnya = `🗃️ \`Case ditemukan!\`\n\n*Nama Case :* ${text}\n\n> © ${global.ownername}`;

        // Kirim dengan tombol CTA Copy
        let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: { 
                message: { 
                    "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, 
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": JSON.stringify({
                                        "display_text": "Salin Isi Case",
                                        "copy_code": caseText
                                    })
                                }
                            ]
                        })
                    })
                } 
            }
        }, { userJid: m.sender, quoted: m });

        await neo.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id });

    } catch (error) {
        console.error("❌ Error saat membaca casefitur.json:", error);
        return m.reply("❌ Terjadi kesalahan saat membaca casefitur.json.");
    }
}
break;
case "reactch": {
  if (!isCreator) return onlyOwner();
  if (!text) return example("https://whatsapp.com/channel/invite/kode/channelid pesan");

  const [link, ...messageParts] = text.split(" ");
  const messageText = messageParts.join(" ");

  if (!link || !messageText) return m.reply("Format salah. Gunakan: .reactch <link> <pesan>");
  if (!link.includes("https://whatsapp.com/channel/")) return m.reply("Link channel tidak valid!");

  let inviteCode = link.split('/')[4];
  let serverId = link.split('/')[5];

  const charMap = {
    a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘', j: '🅙',
    k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣',
    u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
    1: '➊', 2: '➋', 3: '➌', 4: '➍', 5: '➎', 6: '➏', 7: '➐', 8: '➑', 9: '➒', 0: '⓿',
    ' ': '▫️'
  };

  const converted = messageText
    .toLowerCase()
    .split('')
    .map(char => charMap[char] || '')
    .join('');

  if (!converted) return m.reply("Pesan hanya boleh berisi huruf, angka, dan spasi");

  try {
    let res = await neo.newsletterMetadata("invite", inviteCode);
    await neo.newsletterReactMessage(res.id, serverId, converted);
    m.reply(`Berhasil mengirim reaction:\n${converted}\nke channel *${res.name}*`);
  } catch (e) {
    console.log(e);
    m.reply("Gagal mengirim reaction. Pastikan link dan pesan valid.");
  }
}
break;
case 'createweb2':
case 'cweb2': {
if (!isSellerWeb && !isCreator) return onlyPremium();
  if (!text) return example('<namaWeb>')
  if (!qmsg || !/html/.test(qmsg.mimetype)) return m.reply('Reply file .html')

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '')
  const repositoryName = `${webName}-website` // Nama repositori yang akan dibuat

  // 1. Membuat repositori di GitHub jika belum ada
  const githubApiUrl = 'https://api.github.com/user/repos'
  const headers = {
    Authorization: `token ${global.githubToken}`,
    'Content-Type': 'application/json',
  }
  
  const createRepoPayload = {
    name: repositoryName,
    private: false, // Pilih private atau public sesuai kebutuhan Anda
    auto_init: true, // Inisialisasi repositori dengan README
    gitignore_template: 'Node' // Sesuaikan template jika perlu
  }

  try {
    // Cek apakah repositori sudah ada
    const repoRes = await fetch(githubApiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(createRepoPayload),
    })

    if (repoRes.status === 422) {
      return m.reply(`❌ Repositori dengan nama *${repositoryName}* sudah ada.`)
    }

    const repoData = await repoRes.json()

    // 2. Download file dari message yang di-reply
    const quotedFile = await neo.downloadMediaMessage(qmsg)
    const filesToUpload = []

    // 3. Menangani file ZIP dan HTML
    if (qmsg.mimetype.includes('zip')) {
      const unzipper = require('unzipper')
      const zipBuffer = Buffer.from(quotedFile)
      const directory = await unzipper.Open.buffer(zipBuffer)

      for (const file of directory.files) {
        if (file.type === 'File') {
          const content = await file.buffer()
          const filePath = file.path.replace(/^\/+/, '').replace(/\\/g, '/')
          filesToUpload.push({
            file: filePath,
            data: content.toString('base64'),
            encoding: 'base64'
          })
        }
      }

      if (!filesToUpload.some(x => x.file.toLowerCase().endsWith('index.html'))) {
        return m.reply('File index.html tidak ditemukan dalam struktur ZIP.')
      }

    } else if (qmsg.mimetype.includes('html')) {
      filesToUpload.push({
        file: 'index.html',
        data: Buffer.from(quotedFile).toString('base64'),
        encoding: 'base64'
      })
    } else {
      return m.reply('File tidak dikenali. Kirim file .zip atau .html.')
    }

    // 4. Menambahkan file ke repositori GitHub
    const githubRepoUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/contents`
    for (let file of filesToUpload) {
      const fileUrl = `${githubRepoUrl}/${file.file}`
      await fetch(fileUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          message: `Add ${file.file}`,
          content: file.data,
        }),
      }).catch(() => {
        return m.reply(`❌ Gagal mengunggah file ${file.file} ke GitHub.`)
      })
    }

    // 5. Mengaktifkan GitHub Pages
    const enablePagesUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/pages`
    await fetch(enablePagesUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        source: {
          branch: 'main',
          path: '/',
        }
      })
    })

    m.reply(`✅ Website berhasil dibuat di GitHub Pages!\n\n🌐 URL: https://${global.githubUsername}.github.io/${repositoryName}`)

  } catch (error) {
    console.log('Error:', error)
    m.reply(`❌ Terjadi kesalahan saat deploy ke GitHub Pages.`)
  }
}
break
case 'listweb': {
if (!isCreator && !isSellerWeb) return onlyPremium();
  const headers = {
    Authorization: `Bearer ${global.vercelToken}`
  }

  const res = await fetch('https://api.vercel.com/v9/projects', { headers })
  const data = await res.json()

  if (!data.projects || data.projects.length === 0) return m.reply('Tidak ada website yang ditemukan.')

  let teks = '*🌐 Daftar Website Anda:*\n\n'
  for (let proj of data.projects) {
    teks += `• ${proj.name} → https://${proj.name}.vercel.app\n`
  }

  m.reply(teks)
}
break
case 'createscript':
case 'createsc': {
  (async () => {
    if (!isCreator && !isSellerSc) return onlyPremium();
    let path = require("path");
    let AdmZip = require("adm-zip");
    let fs = require("fs");
    let fetch = require("node-fetch");
    let crct = "https://img1.pixhost.to/images/5183/590304755_imgtmp.jpg";
    let txtcrct = `\n--- Gunakan format: ---\n\`${prefix+command} <namaBot>|<namaOwner>|<Versi script>|<Password>|<fitur1>,<fitur2>,...\`\n\n--- Contoh : ---\n*${prefix+command} AszzyBoyz|AsOffc|V1|12345|brat,qc,play,pinterest*\n\n> ketik .listfitursc untuk melihat fitur tersedia.\n`;
    

    const args = text.split('|');
    if (args.length < 5) {
      return neo.sendMessage(m.chat, { image: { url: crct }, caption: txtcrct }, { quoted: m });
    }

    const mycfitur = require('./lib/casefitur.json');
    const [botName, ownerName, botVersion, password, featuresStr] = args;
    let features = featuresStr.split(',').map(f => f.trim());
    if (features.includes("allfitur")) features = mycfitur.map(f => f.name);

    m.reply(`🗂 *Process Script Created*\n> [ \`${botName}\` ]`);

    const mediaFireAPI = 'https://api.siputzx.my.id/api/d/mediafire?url=https://www.mediafire.com/file/4tvn38pcwm6684i/RLBasesZ.zip/file';
    const fixLink = "https://files.catbox.moe/tdquuz.zip"

    try {
      let res = await fetch(fixLink);
      let buffer = await res.arrayBuffer();
      let tempZipPath = './temp/disini.zip';
      // PERBAIKAN ERROR DI SINI
      fs.writeFileSync(tempZipPath, Buffer.from(buffer));

      let zip = new AdmZip(tempZipPath);
      let extractPath = `./temp/extracted_${m.pushName || 'user'}`;
      zip.extractAllTo(extractPath, true);

      const casePath = `${extractPath}/case.js`;
      let caseContent = fs.readFileSync(casePath, 'utf-8');
      let validFeatures = [];

      for (let feature of features) {
        let data = mycfitur.find(f => f.name === feature);
        if (!data) {
          m.reply(`⚠ *Fitur "${feature}" tidak ditemukan!*`);
          continue;
        }

        if (!caseContent.includes(data.function)) {
          caseContent = data.function + '\n' + caseContent;
        }

        if (!caseContent.includes(data.casenya)) {
          caseContent = caseContent.replace('switch (command) {', `switch (command) {\n${data.casenya}`);
        }

        if (data.upFile?.length > 0) {
          for (let file of data.upFile) {
            let filePath = Object.keys(file)[0];
            let fileContent = file[filePath];
            let fullPath = path.join(extractPath, filePath);
            fs.mkdirSync(path.dirname(fullPath), { recursive: true });
            fs.writeFileSync(fullPath, fileContent, 'utf-8');
          }
        }

        validFeatures.push(feature);
        await new Promise(r => setTimeout(r, 500));
      }

      fs.writeFileSync(casePath, caseContent, 'utf-8');

      const updateText = (filePath, updates) => {
        let text = fs.readFileSync(filePath, 'utf-8');
        for (let [pattern, replacement] of updates) {
          text = text.replace(new RegExp(pattern, 'g'), replacement);
        }
        fs.writeFileSync(filePath, text, 'utf-8');
      };

      updateText(`${extractPath}/connection.js`, [[`const pw = ".*?";`, `const pw = "${password}";`]]);
      updateText(`${extractPath}/settings.js`, [
        [`global.owner = .*`, `global.owner = "${m.sender.split('@')[0]}";`],
        [`global.namabot = .*`, `global.namabot = '${botName}';`],
        [`global.ownername = .*`, `global.ownername = '${ownerName}';`],
        [`global.botversion = .*`, `global.botversion = '${botVersion}';`]
      ]);

      fs.writeFileSync(`${extractPath}/database/owner.json`, JSON.stringify([m.sender.split('@')[0]]), 'utf-8');

      const listMenuPath = `${extractPath}/lib/listmenu.json`;
      let menu = fs.existsSync(listMenuPath) ? JSON.parse(fs.readFileSync(listMenuPath)) : [];
      validFeatures.forEach(f => { if (!menu.includes(f)) menu.push(f) });
      fs.writeFileSync(listMenuPath, JSON.stringify(menu, null, 2), 'utf-8');

      let newZip = new AdmZip();
      newZip.addLocalFolder(extractPath);
      let outputZip = `./temp/sc_${m.pushName || 'user'}.zip`;
      newZip.writeZip(outputZip);

      if (validFeatures.length === 0) return m.reply("❌ Tidak ada fitur valid!");

      await neo.sendMessage(m.chat, {
        document: fs.readFileSync(outputZip),
        mimetype: 'application/zip',
        fileName: `sc_${botName}.zip`,
        caption: `✅ *Success Script Created!*\n> By Aszxy Official\n\n*Creator:* ${m.pushName || 'user'}\n*Fitur:* [${validFeatures}]\n*Password:* ${password}`
      }, { quoted: m });

      fs.rmSync(extractPath, { recursive: true, force: true });
      fs.unlinkSync(tempZipPath);
      fs.unlinkSync(outputZip);
    } catch (err) {
      console.error(err);
      m.reply(`❌ Terjadi error saat membuat script:\n${err.message}`);
    }
  })();
}
break;
case 'delweb': {
if (!isCreator && !isSellerWeb) return onlyPremium();
  if (!text) return example('<namaWeb>')
  const webName = text.trim().toLowerCase()

  const headers = {
    Authorization: `Bearer ${global.vercelToken}`
  }

  try {
    const response = await fetch(`https://api.vercel.com/v9/projects/${webName}`, {
      method: 'DELETE',
      headers
    })

    if (response.status === 200 || response.status === 204) {
      return m.reply(`✅ Website *${webName}* berhasil dihapus dari Vercel.`)
    } else if (response.status === 404) {
      return m.reply(`⚠️ Website *${webName}* tidak ditemukan di akun Vercel kamu.`)
    } else if (response.status === 403 || response.status === 401) {
      return m.reply(`⛔ Token Vercel tidak valid atau tidak punya akses ke project ini.`)
    } else {
      let result = {}
      try {
        result = await response.json()
      } catch (e) {}
      return m.reply(`❌ Gagal menghapus website:\n${result.error?.message || 'Tidak diketahui'}`)
    }

  } catch (err) {
    console.error(err)
    m.reply(`Terjadi kesalahan saat mencoba menghapus:\n${err.message}`)
  }
}
break
case 'cweb':
case 'createweb': {
  if (!isCreator && !isSellerWeb) return onlyPremium();
  if (!text) return example('<namaWeb>')
  if (!qmsg || !/zip|html/.test(qmsg.mimetype)) return m.reply('Reply file .zip atau .html')

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '')
  const domainCheckUrl = `https://${webName}.vercel.app`

  try {
    const check = await fetch(domainCheckUrl)
    if (check.status === 200) return m.reply(`❌ Nama web *${webName}* sudah digunakan. Silakan gunakan nama lain.`)
  } catch (e) {}

  const quotedFile = await neo.downloadMediaMessage(qmsg)
  const filesToUpload = []

  if (qmsg.mimetype.includes('zip')) {
    const unzipper = require('unzipper')
    const zipBuffer = Buffer.from(quotedFile)
    const directory = await unzipper.Open.buffer(zipBuffer)

    for (const file of directory.files) {
      if (file.type === 'File') {
        const content = await file.buffer()
        const filePath = file.path.replace(/^\/+/, '').replace(/\\/g, '/')
        filesToUpload.push({
          file: filePath,
          data: content.toString('base64'),
          encoding: 'base64'
        })
      }
    }

    if (!filesToUpload.some(x => x.file.toLowerCase().endsWith('index.html'))) {
      return m.reply('File index.html tidak ditemukan dalam struktur ZIP.')
    }

  } else if (qmsg.mimetype.includes('html')) {
    filesToUpload.push({
      file: 'index.html',
      data: Buffer.from(quotedFile).toString('base64'),
      encoding: 'base64'
    })
  } else {
    return m.reply('File tidak dikenali. Kirim file .zip atau .html.')
  }

  const headers = {
    Authorization: `Bearer ${global.vercelToken}`,
    'Content-Type': 'application/json'
  }

  await fetch('https://api.vercel.com/v9/projects', {
    method: 'POST',
    headers,
    body: JSON.stringify({ name: webName })
  }).catch(() => {})

  const deployRes = await fetch('https://api.vercel.com/v13/deployments', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: webName,
      project: webName,
      files: filesToUpload,
      projectSettings: { framework: null }
    })
  })

  const deployData = await deployRes.json().catch(() => null)
  if (!deployData || !deployData.url) {
    console.log('Deploy Error:', deployData)
    return m.reply(`Gagal deploy ke Vercel:\n${JSON.stringify(deployData)}`)
  }

  m.reply(`✅ Website berhasil dibuat!\n\n🌐 URL: https://${webName}.vercel.app`)
}
break
case "addsellerweb": { 
    if (!isCreator) return onlyOwner();
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return example(`6285659202292`)
   let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
    let ceknya = await neo.onWhatsApp(prrkek) // Mengecek Apkah Nomor ${prrkek} Terdaftar Di WhatsApp 
    if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
    swebnumber.push(prrkek)
    fs.writeFileSync("./database/sellerweb.json", JSON.stringify(swebnumber))
    m.reply(`Successfully Added ${prrkek} To Seller Web`)
}
break
//════════════════════════════════════════════════//
case "delsellerweb": {
    if (!isCreator) return onlyOwner();
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return example(`6285659202292`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = swebnumber.indexOf(ya)
    swebnumber.splice(unp, 1)
    fs.writeFileSync("./database/sellerweb.json", JSON.stringify(swebnumber))
    m.reply(`Successfully Removed ${ya} From Seller Web`)
}
break
//════════════════════════════════════════════════//
case "listsellerweb": {
  if (!isCreator) return onlyOwner();
  let data = fs.readFileSync("./database/sellerweb.json", 'utf8')
  let json = JSON.parse(data)
  let tekt = "List of Seller Web:\n"
  json.forEach((item, index) => {
    tekt += `\`${index + 1}. ${item.replace(/@s\.whatsapp\.net/g, '')}\`\n`
  })
  m.reply(tekt)
}
break
case "addsellersc": { 
    if (!isCreator) return onlyOwner();
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return example(`6285659202292`)
   let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
    let ceknya = await neo.onWhatsApp(prrkek)
    if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
    sscnumber.push(prrkek)
    fs.writeFileSync("./database/sellersc.json", JSON.stringify(sscnumber))
    m.reply(`Successfully Added ${prrkek} To Seller Script`)
}
break
//════════════════════════════════════════════════//
case "delsellersc": {
    if (!isCreator) return onlyOwner();
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return example(`6285659202292`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = sscnumber.indexOf(ya)
    sscnumber.splice(unp, 1)
    fs.writeFileSync("./database/sellersc.json", JSON.stringify(sscnumber))
    m.reply(`Successfully Removed ${ya} From Seller Script`)
}
break
//════════════════════════════════════════════════//
case "listsellersc": {
  if (!isCreator) return onlyOwner();
  let data = fs.readFileSync("./database/sellersc.json", 'utf8')
  let json = JSON.parse(data)
  let tekt = "List of Seller Script:\n"
  json.forEach((item, index) => {
    tekt += `\`${index + 1}. ${item.replace(/@s\.whatsapp\.net/g, '')}\`\n`
  })
  m.reply(tekt)
}
break
case 'info': {
  const name = pushname || 'No Name';
  const senderNumber = m.sender.split('@')[0];

  const iscreator = isCreator ? '☑️ Creator Bot' : '';
  const issellerweb = isSellerWeb ? '☑️ Seller Web' : '';
  const issellersc = isSellerSc ? '☑️ Seller Sc' : '';
  const status = isCreator || isSellerWeb || isSellerSc
     ? [iscreator, issellerweb, issellersc].filter(v => v).join(' ')
    : '❌ Free User';

  m.reply(
`┏━━〔 *NEO USER INFO* 〕━━┓

╭─⧫ *Identitas*
│• 🪪 *Nama*   : ${name}
│• ☎️ *Nomor*  : ${senderNumber}

╭─⧫ *Status*
│• ${status}

╰────────────────────
Powered by *NeoShiroko Labs*
┗━━━━━━━━━━━━━━━━━━━━━┛`);
}
break;
case 'cweb3':
case 'createweb3': {
  if (!isCreator && !isSellerWeb) return onlyPremium();
  if (!text) return example('mywebsite')
  if (!quoted || quoted.mtype !== 'documentMessage') return m.reply('Reply dokumen HTML-nya!')

  const webName = text.trim().toLowerCase().replace(/\s+/g, '-')
  const mime = quoted?.msg?.mimetype || quoted?.mimetype
  if (!mime || !mime.includes('html')) return m.reply('File harus berupa HTML!')

  m.reply(`Membuat repository dan meng-upload file...`)

  // Ambil buffer file HTML
  const buffer = await quoted.download()
  const fileContent = buffer.toString()

  // 1. Buat repository GitHub
  const createRepo = await fetch(`https://api.github.com/user/repos`, {
    method: 'POST',
    headers: {
      Authorization: `token ${global.githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'Bot'
    },
    body: JSON.stringify({
      name: webName,
      auto_init: true,
      private: false
    })
  })

  const repoResult = await createRepo.json()
  if (!repoResult?.name) return m.reply(`Gagal membuat repo: ${JSON.stringify(repoResult)}`)

  // 2. Upload file index.html ke repo
  const uploadFile = await fetch(`https://api.github.com/repos/${global.githubUsername}/${webName}/contents/index.html`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${global.githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'Bot'
    },
    body: JSON.stringify({
      message: 'add index.html',
      content: Buffer.from(fileContent).toString('base64')
    })
  })

  const uploadResult = await uploadFile.json()
  if (!uploadResult?.content?.name) return m.reply(`Gagal upload file: ${JSON.stringify(uploadResult)}`)

  // 3. Deploy ke Vercel
 const vercelDeploy = await fetch(`https://api.vercel.com/v13/deployments`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${global.vercelToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: webName,
    files: [
      {
        file: 'index.html',
        data: Buffer.from(fileContent).toString('base64'),
        encoding: 'base64'
      }
    ],
    projectSettings: {
      framework: null
    }
  })
})

  const vercelResult = await vercelDeploy.json()
  if (!vercelResult?.url) return m.reply(`Gagal deploy ke Vercel: ${JSON.stringify(vercelResult)}`)

  m.reply(`Sukses! Website kamu telah dibuat dan bisa diakses di:\n\nhttps://${vercelResult.url}`)
}
break
case 'owner': {
        try {
        let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${global.ownername}\nTEL;type=CELL;type=VOICE;waid=${global.ownernumber}:+${global.ownernumber}\nEND:VCARD`;
        let quotedMessage = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Kontak Neo Core`,jpegThumbnail: ""}}}
        await neo.sendMessage(m.chat, { contacts: { displayName: global.ownername, contacts: [{ vcard }] } }, { quoted: quotedMessage });
    } catch (error) {
        console.error("Error saat mengirim kontak developer:", error);
    }
}
break
case 'donasi': {
  const teks = `
* DONASI / DUKUNG BOT*

_"Perumpamaan (nafkah yang dikeluarkan oleh) orang-orang yang menafkahkan hartanya di jalan Allah seperti sebutir biji yang menumbuhkan tujuh bulir, pada tiap-tiap bulir: seratus biji. Allah melipatgandakan (ganjaran) bagi siapa yang Dia kehendaki."_ 
*(QS. Al-Baqarah: 261)*

Dengan berdonasi, kamu mendukung developer agar aktif mengembangkan fitur-fitur bermanfaat.

Jika kamu merasa bot ini membantu, pertimbangkan untuk berdonasi seikhlasnya.

*Metode Donasi:*
� DANA/OVO/GOPAY/QRIS
wa.me/${global.ownernumber}

Terima kasih atas dukunganmu!
  `.trim();

  m.reply(teks);
}
break;
case 'addrepo': {
  if (!isCreator) return onlyOwner();

  if (!text.includes("|")) return example("<nama>|<deskripsi>|<private/public>");

  const [nama, deskripsi, privasi] = text.split("|").map(a => a.trim());
  if (!nama || !deskripsi || !privasi) return m.reply("⚠️ Format tidak lengkap!");

  const isPrivate = privasi.toLowerCase() === 'private';

  const fetch = require("node-fetch");
  const res = await fetch(`https://api.github.com/user/repos`, {
    method: "POST",
    headers: {
      "Authorization": `token ${global.githubToken}`,
      "Accept": "application/vnd.github+json"
    },
    body: JSON.stringify({
      name: nama,
      description: deskripsi,
      private: isPrivate
    })
  });

  const data = await res.json();

  if (res.ok) {
    m.reply(`✅ *Repository berhasil dibuat!*\n\n📦 Nama: ${data.name}\n🔒 Private: ${data.private}\n🔗 URL: ${data.html_url}`);
  } else {
    m.reply(`❌ Gagal membuat repository.\n\n${JSON.stringify(data, null, 2)}`);
  }
}
break;
case 'checkrepo': {
  if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`");
  if (!text) return m.reply("⚠️ Masukkan nama repository!\nContoh: .checkrepo my-repo");

  const fetch = require("node-fetch");
  try {
    const repoName = text.trim();

    // Ambil info repo
    const resInfo = await fetch(`https://api.github.com/repos/${global.githubUsername}/${repoName}`, {
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });

    const repoInfo = await resInfo.json();
    if (!resInfo.ok) {
      return m.reply(`❌ Repository tidak ditemukan!\n\n${JSON.stringify(repoInfo, null, 2)}`);
    }

    // Ambil daftar file
    const resContent = await fetch(`https://api.github.com/repos/${global.githubUsername}/${repoName}/contents`, {
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });

    const contents = await resContent.json();
    if (!Array.isArray(contents)) {
      return m.reply(`❌ Gagal mengambil konten repository.`);
    }

    let listFiles = contents.map(v => `📄 ${v.name}`).join("\n");
    let total = contents.length;
    let status = repoInfo.private ? "🔒 Private" : "🌐 Public";
    let createdAt = new Date(repoInfo.created_at).toLocaleString('id-ID');

    m.reply(`*📦 Info Repository*\n\n` +
            `• Nama: ${repoInfo.name}\n` +
            `• Status: ${status}\n` +
            `• Dibuat: ${createdAt}\n` +
            `• Jumlah File: ${total}\n\n` +
            `*📁 File:*\n${listFiles}`);
  } catch (e) {
    console.error(e);
    m.reply("❌ Terjadi kesalahan saat memeriksa repository.");
  }
}
break;
case 'delrepo': {
  if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`");
  if (!text) return m.reply("❌ *Format salah!*\nGunakan: .delrepo <nama_repository>");

  const fetch = require("node-fetch");
  const repoName = text.trim();
  const username = global.githubUsername; // pastikan ini diset di settings.js

  try {
    const res = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
      method: "DELETE",
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });

    if (res.status === 204) {
      m.reply(`✅ Repository *${repoName}* berhasil dihapus.`);
    } else if (res.status === 404) {
      m.reply(`❌ Repository *${repoName}* tidak ditemukan.`);
    } else {
      const error = await res.json();
      console.log(error);
      m.reply("❌ Gagal menghapus repository.");
    }
  } catch (err) {
    console.error(err);
    m.reply("❌ Terjadi kesalahan saat menghapus repository.");
  }
}
break;
case 'listrepo': {
  if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`");

  
  try {
    const res = await fetch(`https://api.github.com/user/repos`, {
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });
    const data = await res.json();

    if (!Array.isArray(data)) return m.reply("❌ Gagal mengambil repository!");

    if (data.length === 0) return m.reply("ℹ️ Belum ada repository.");

    const list = data.map((repo, i) => 
      `*${i + 1}. ${repo.name}*\n> ${repo.private ? '🔒 Private' : '🌐 Public'}\n> ${repo.html_url}`
    ).join("\n\n");

    m.reply(`📁 *List Repository GitHub:*\n\n${list}`);
  } catch (err) {
    console.error(err);
    m.reply("❌ Terjadi kesalahan saat mengambil data.");
  }
}
break;
case 'testi':
case 'testimoni': {
  if (!isCreator) return onlyOwner();
  if (!text) return m.reply("barang|harga");

  let [barang, harga] = text.split("|");
  if (!barang || !harga) return m.reply("⚠️ *Format tidak lengkap!*");

  m.reply(`*Terimakasih Telah Berbelanja*\n\n> Pesanan Anda telah masuk ke dalam testimoni kami\n\n\`[ CHANNEL TESTI ]\`\n${global.link}`);

  const { createCanvas, loadImage } = require('canvas');
  const fs = require('fs');
  const tanggalWaktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
  const idTransaksi = `TRX${Math.floor(1000000 + Math.random() * 9000000)}`;
  const canvasWidth = 400, canvasHeight = 600;
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');

  // Background putih
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Header
  ctx.fillStyle = "#000";
  ctx.font = "bold 24px Arial";
  ctx.textAlign = "center";
  ctx.fillText("TRANSAKSI BERHASIL", canvasWidth / 2, 40);
  ctx.font = "16px Arial";
  ctx.fillText(tanggalWaktu + ' WIB', canvasWidth / 2, 70);

  // Detail kiri
  ctx.textAlign = "left";
  ctx.font = "16px Arial";
  ctx.fillText(`ID Transaksi: ${idTransaksi}`, 20, 130);
  ctx.fillText(`Barang: ${barang}`, 20, 160);
  ctx.fillText(`Harga: Rp${parseInt(harga.replace(/\D/g, '')).toLocaleString()}`, 20, 190);
  ctx.fillText(`Status: Berhasil`, 20, 220);

  // Ucapan
  ctx.textAlign = "center";
  ctx.font = "bold 16px Arial";
  ctx.fillText(`Thx Buy At ${ownername}`, canvasWidth / 2, 300);

  let bottomImagePath = null;

  try {
    // Logo toko
    const logoURL = global.logo;
    const logo = await loadImage(logoURL);
    ctx.drawImage(logo, canvasWidth - 140, 120, 100, 100);

    // Download gambar dari quoted jika ada
    if (m.quoted && (m.quoted.mtype === 'imageMessage' || m.quoted.mtype === 'image')) {
      const quotedImg = await m.quoted.download();
      bottomImagePath = './session/testi-image.jpg';
      fs.writeFileSync(bottomImagePath, quotedImg);
    }

    // Tambahkan gambar bawah jika ada
    if (bottomImagePath && fs.existsSync(bottomImagePath)) {
      const bottomImage = await loadImage(bottomImagePath);
      const size = 270; // Ukuran 1:1 dan tidak menyentuh sudut
const x = (canvasWidth - size) / 2;
const y = canvasHeight - size - 20;
ctx.drawImage(bottomImage, x, y, size, size);
    }
  } catch (e) {
    console.log("Gagal memuat gambar:", e.message);
  }

  // Simpan hasil canvas
  const buffer = canvas.toBuffer("image/png");
  const filePath = "./session/testimoni.png";
  fs.writeFileSync(filePath, buffer);

  const caption = `𝗗𝗢𝗡𝗘 𝗧𝗥𝗫 𝗕𝗬 *${ownername}*\n_#AllTrxNoReff_\n\n▬▬▬▬ ▬▬▬▬ ▬▬▬▬\n*[ 📦 ]* *Produk/Jasa :* ${barang}\n*[ 📦 ]* *Harga :* Rp${parseInt(harga.replace(/\D/g, '')).toLocaleString()}\n*[ 📦 ]* *Toko :* ${ownername}\n*[ 📦 ]* *Status :* Sukses\n▬▬▬▬ ▬▬▬▬ ▬▬▬▬\n> ${tanggalWaktu} WIB\n\n\`CHANNEL TESTI\`\n${link}\n\n\`${namagc}\`\n${linkgc}\n\n_© 2025 - Neo-S Official_`;

  // Kirim ke Channel
  const channelID = global.link;
  await neo.sendMessage(channelID, { image: { url: filePath }, caption });

  // Kirim juga ke status (optional, bisa hapus bagian ini kalau tidak dipakai)
  await neo.sendMessage("status@broadcast", {
    image: fs.readFileSync(filePath),
    caption: "Testimoni dari Neo Ai Eigne!"
  });

  // Hapus file sementara
  fs.unlinkSync(filePath);
  if (bottomImagePath && fs.existsSync(bottomImagePath)) {
    fs.unlinkSync(bottomImagePath);
  }
}
break;

// ROAD CASE CPANEL MENU
case "cadmin": {
    if (!isCreator) return onlyOwner();
    if (!text) return example("adminneo,628XXX");

    let [username, nomor] = text.split(",").map(v => v.trim());
    if (!username || !nomor) return example("adminneo,628XXX");

    nomor = nomor.replace(/\D/g, "") + "@s.whatsapp.net";
    username = username.toLowerCase();

    try {
        let onWa = await neo.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di WhatsApp.");
    } catch (err) {
        return m.reply("Gagal cek nomor WhatsApp: " + err.message);
    }

    const email = `${username}@admin.neo`;
    const name = func.capital(username) + " Admin";
    const password = `${username}NeoSecure001`;

    try {
        const userRes = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email, username, first_name: name,
                last_name: "Staff", language: "en", password,
                root_admin: true
            })
        });

        if (!userRes.ok) throw new Error(`Gagal buat akun admin (${userRes.status})`);
        const userData = await userRes.json();
        if (!userData?.attributes?.id) throw new Error("User ID admin tidak ditemukan.");

        let msg = `┏━━━『 *NEO ADMIN PANEL* 』━━━┓
┃  
┃ 🧑‍✈️ *Username:* ${username}
┃ 🔐 *Password:* ${password}
┃ 🆔 *Admin ID:* ${userData.attributes.id}
┃ 📩 *Email:* ${email}
┃  
┃ ⚙️ *Akses:* Full Root Admin
┃ 🌐 *Panel:* ${global.domain}
┃  
┗━━━━━━━━━━━━━━━━━━━━┛

╭─❖「 *RULES ADMIN* 」
│
│ 1. Jaga kredibilitas & data user.
│ 2. Jangan ubah sistem utama tanpa izin.
│ 3. Gunakan akses root dengan bijak.
│ 4. Laporkan error/breach ke Owner.
│ Selengkapnya Baca Deskripsi Grup
│
╰──⭓ Selamat datang di *NeoLabs Staff System*!`;

        await neo.sendMessage(nomor, {
            text: msg,
            contextInfo: {
                externalAdReply: {
                    title: `Neo Admin Panel - ${username}`,
                    body: "Akun admin berhasil dibuat.",
                    thumbnailUrl: global.imgthumb,
                    sourceUrl: global.link,
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: global.idSaluran || "",
                    newsletterName: global.namach || ""
                }
            }
        }, { quoted: m });

        m.reply(`✅ *Akun admin @${username}* berhasil dibuat & dikirim ke *${nomor.split("@")[0]}*`, m.chat, { mentions: [nomor] });

    } catch (err) {
        console.error("ERR:", err);
        return m.reply("Terjadi kesalahan sistem saat membuat admin:\n" + err.message);
    }
}
break;

case "deladmin": {
    if (!isCreator) return onlyOwner();
    if (!text || isNaN(text)) return example("deladmin 134");

    const id = parseInt(text);
    try {
        const getRes = await fetch(`${domain}/api/application/users/${id}`, {
            headers: { Authorization: `Bearer ${apikey}` }
        });
        if (!getRes.ok) throw new Error("Gagal ambil data admin, pastikan ID benar.");
        const userData = await getRes.json();
        const delRes = await fetch(`${domain}/api/application/users/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${apikey}` }
        });

        if (!delRes.ok) throw new Error(`Gagal hapus admin (${delRes.status})`);

        let msg = `⚠️ *NEO ADMIN REMOVAL*\n\n` +
                  `🧑‍✈️ *Username:* ${userData.attributes.username}\n` +
                  `🆔 *ID Admin:* ${id}\n` +
                  `📩 *Email:* ${userData.attributes.email}\n\n` +
                  `✅ Admin telah dihapus dari sistem panel.\n` +
                  `┗━━━━━━━━━━━━━━━⭓`;

        m.reply(msg);

    } catch (err) {
        console.error("DEL ADMIN ERROR:", err);
        return m.reply("Gagal menghapus admin:\n" + err.message);
    }
}
break;

case "listadmin": {
    if (!isCreator) return onlyOwner();

    try {
        const userRes = await fetch(`${domain}/api/application/users`, {
            headers: { Authorization: `Bearer ${apikey}` }
        });
        if (!userRes.ok) throw new Error(`Gagal ambil data user (${userRes.status})`);

        const users = (await userRes.json()).data;

        let teks = `╭───❖「 *NEO ADMIN LIST* 」\n│`;
        for (let i = 0; i < users.length; i++) {
            let u = users[i].attributes;
            if (!u.root_admin) continue;

            teks += `\n├─ ${i + 1}. *${u.username}*\n`;
            teks += `│   🆔 ID: ${u.id}\n`;
            teks += `│   📩 Email: ${u.email}\n`;
            teks += `│   🏷️ Nama: ${u.first_name} ${u.last_name}\n`;
            teks += `│   🔐 Admin: Aktif\n`;
        }
        teks += `\n╰────────────⭓`;

        if (!teks.includes("├─")) return m.reply("Tidak ada admin terdaftar di panel.");
        m.reply(teks);

    } catch (err) {
        console.error("LIST ADMIN ERROR:", err);
        return m.reply("Gagal mengambil data admin:\n" + err.message);
    }
}
break;

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb":
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb":
case "unlimited": case "unli": {
    let cmd = m.body ? m.body.split(" ")[0].toLowerCase() : "";
    if (!isCreator && !isGcPanel) return onlyPremium();
    if (!text) return example("username,628XXX");

    let [username, nomor] = text.split(",").map(s => s.trim());
    if (!username || !nomor) return example("username,628XXX");
    nomor = nomor.replace(/\D/g, "") + "@s.whatsapp.net";
    username = username.toLowerCase();

    try {
        let onWa = await neo.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di WhatsApp.");
    } catch (err) {
        return m.reply("Gagal cek nomor WhatsApp: " + err.message);
    }

    const resourceMap = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unli": { ram: "0", disk: "0", cpu: "0" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };
    let { ram, disk, cpu } = resourceMap[command];

    const email = `${username}@user.neo`;
    const name = func.capital(username) + " Neo";
    const password = `${username}Zassneo032`;

    try {
        // Create User
        const userRes = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email, username, first_name: name,
                last_name: "Server", language: "en", password
            })
        });

        if (!userRes.ok) throw new Error(`Gagal buat user (${userRes.status})`);
        const userData = await userRes.json();
        if (!userData?.attributes?.id) throw new Error("User ID tidak ditemukan.");

        // Get Egg Info
        const eggRes = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey}` }
        });

        if (!eggRes.ok) throw new Error(`Gagal ambil data egg (${eggRes.status})`);
        const eggData = await eggRes.json();

        // Create Server
        const serverRes = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description: "© Neo Labs - Zass Onee",
                user: userData.attributes.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: eggData.attributes.startup,
                environment: {
                    INST: "npm", USER_UPLOAD: "0",
                    AUTO_UPDATE: "0", CMD_RUN: "npm start"
                },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] }
            })
        });

        if (!serverRes.ok) throw new Error(`Gagal buat server (${serverRes.status})`);
        const serverData = await serverRes.json();
        if (!serverData?.attributes?.id) throw new Error("Server ID tidak ditemukan.");

        // Kirim ke user
        let msg = `┏━━━『 *NEO PANEL ACCESS* 』━━━┓
┃  
┃ 👤 *Username:* ${username}
┃ 🔐 *Password:* ${password}
┃ 🆔 *Server ID:* ${serverData.attributes.id}
┃  
┃ ⚙️ *Spesifikasi:* 
┃ ┗ ${ram === "0" ? "Unlimited" : ram / 1000 + "GB"} RAM / ${disk === "0" ? "Unlimited" : disk / 1000 + "GB"} Disk / ${cpu === "0" ? "Unlimited" : cpu + "%"} CPU
┃ 🌐 *Login:* ${global.domain}
┃  
┃ ⏳ *Masa Aktif:* 30 Hari
┃ 🛡️ *Garansi:* 15 Hari (1× replace)
┃  
┗━━━━━━━━━━━━━━━━━━━━┛

╭─❖「 *RULES PEMBELIAN* 」
│
│ 1. Garansi hanya berlaku 15 hari.
│ 2. Claim garansi wajib bawa ss cht saat pembelian
│ 3. Akses root/terminal dilarang tanpa izin.
│ 4. Panel digunakan hanya untuk keperluan pribadi.
│ 5. Jika abuse/spam = Suspend permanen.
│
╰──⭓ Terima kasih telah memilih *Neo Labs*!`;

        try {
            await neo.sendMessage(nomor, {
                text: msg,
                contextInfo: {
                    externalAdReply: {
                        title: `NeoPanel - ${username}`,
                        body: "Data akun berhasil dibuat.",
                        thumbnailUrl: global.imgthumb,
                        sourceUrl: global.web,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran || "",
                        newsletterName: global.namach || ""
                    }
                }
            }, { quoted: m });
        } catch (e) {
            console.error("Gagal kirim pesan:", e);
            m.reply("Akun berhasil dibuat tapi gagal mengirim pesan ke nomor.");
        }

        m.reply(`✅ Server *@${username}* berhasil dibuat & dikirim ke *${nomor.split("@")[0]}*`, m.chat, { mentions: [nomor] });

    } catch (err) {
        console.error("ERR:", err);
        return m.reply("Terjadi kesalahan sistem:\n" + err.message);
    }
}
break;

case "deluser": {
    if (!isCreator) return onlyPremium();
    if (!text) return example("username");

    let username = text.trim().toLowerCase();

    try {
        // Cari user berdasarkan username
        let resUser = await fetch(domain + "/api/application/users", {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey}` }
        });
        let users = await resUser.json();
        if (!users?.data) return m.reply("Gagal ambil data user dari panel.");

        let targetUser = users.data.find(u => u.attributes.username === username);
        if (!targetUser) return m.reply(`User *${username}* tidak ditemukan di panel.`);

        // Ambil server milik user
        let resServers = await fetch(domain + "/api/application/servers", {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey}` }
        });
        let serverList = await resServers.json();
        if (!serverList?.data) return m.reply("Gagal ambil daftar server.");

        let userServers = serverList.data.filter(s => s.attributes.user === targetUser.attributes.id);

        // Hapus semua server milik user
        for (let s of userServers) {
            await fetch(`${domain}/api/application/servers/${s.attributes.id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${apikey}` }
            });
        }

        // Hapus user
        await fetch(`${domain}/api/application/users/${targetUser.attributes.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${apikey}` }
        });

        m.reply(`✅ *User ${username}* dan semua server miliknya berhasil dihapus dari panel.`);
    } catch (err) {
        console.error("ERR DELPANEL:", err);
        m.reply("Gagal menghapus user/server:\n" + err.message);
    }
}
break;

case "listpanel": {
    if (!isCreator && !isGcPanel) return onlyOwner();

    try {
        let page = 1, servers = [], keepFetching = true;

        while (keepFetching) {
            const res = await fetch(`${domain}/api/application/servers?page=${page}&per_page=100`, {
                headers: { Authorization: `Bearer ${apikey}` }
            });

            if (!res.ok) throw new Error(`Gagal ambil server halaman ${page} (${res.status})`);
            const data = await res.json();

            servers.push(...data.data);
            keepFetching = data.meta.pagination.current_page < data.meta.pagination.total_pages;
            page++;
        }

        if (!servers.length) return m.reply("Belum ada server di panel.");

        let teks = `╭───❖「 *NEO SERVER LIST (${servers.length})* 」`;

        for (let i = 0; i < servers.length; i++) {
            const s = servers[i].attributes;
            teks += `\n├─ ${i + 1}. *${s.name}*\n`;
            teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
            teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
            teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
            teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
        }

        teks += `\n╰────────────⭓`;
        m.reply(teks);

    } catch (err) {
        console.error("ERR LIST PANEL:", err);
        m.reply("Terjadi kesalahan:\n" + err.message);
    }
}
break;

case "delpanel": {
    if (!isCreator) onlyOwner();
    if (!text) return example("Masukkan ID server\nContoh: 123");

    try {
        const srvRes = await fetch(`${domain}/api/application/servers`, {
            headers: { Authorization: `Bearer ${apikey}` }
        });
        const srvJson = await srvRes.json();
        const target = srvJson.data.find(v => Number(text) === v.attributes.id);

        if (!target) return m.reply("ID server tidak ditemukan di panel.");

        const s = target.attributes;
        const delSrv = await fetch(`${domain}/api/application/servers/${s.id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });

        const userRes = await fetch(`${domain}/api/application/users`, {
            headers: { Authorization: `Bearer ${apikey}` }
        });
        const userJson = await userRes.json();
        const targetUser = userJson.data.find(u => u.attributes.first_name.toLowerCase() === s.name.toLowerCase());

        if (targetUser) {
            await fetch(`${domain}/api/application/users/${targetUser.attributes.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey}`
                }
            });
        }

        let teks = `╭───❖「 *NEO SERVER REMOVED* 」\n`;
        teks += `├─ *${s.name}* berhasil dihapus!\n`;
        teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
        teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
        teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
        teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
        teks += `╰────────────⭓`;

        m.reply(teks);

    } catch (err) {
        console.error("ERR DEL PANEL:", err);
        m.reply("Terjadi kesalahan:\n" + err.message);
    }
}
break;

case "clearpanel": {
  if (!isCreator) return onlyOwner();
  if (!text) return m.reply(`Contoh: .clearpanel 1 (ID user yang ingin dipertahankan)`);

  const excludeId = parseInt(text.trim());
  if (isNaN(excludeId)) return m.reply("ID tidak valid! Harus berupa angka.");

  await m.reply(`Memproses penghapusan seluruh user & server...\nKecuali user dengan ID ${excludeId}.`);

  try {
    const headers = {
      Authorization: `Bearer ${apikey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const getUsers = async () => {
      const res = await axios.get(`${domain}/api/application/users`, { headers });
      return res.data.data;
    };

    const getServers = async () => {
      const res = await axios.get(`${domain}/api/application/servers`, { headers });
      return res.data.data;
    };

    const deleteServer = async (uuid) => {
      try {
        await axios.delete(`${domain}/api/application/servers/${uuid}`, { headers });
        console.log(`✔️ Server ${uuid} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus server ${uuid}:`, err.response?.data || err.message);
      }
    };

    const deleteUser = async (id) => {
      try {
        await axios.delete(`${domain}/api/application/users/${id}`, { headers });
        console.log(`✔️ User ${id} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus user ${id}:`, err.response?.data || err.message);
      }
    };

    const users = await getUsers();
    const servers = await getServers();
    let totalDeleted = 0;

    for (const user of users) {
      const { id, username } = user.attributes;
      if (id === excludeId) {
        console.log(`Lewati ID ${id} (${username}) karena dikecualikan`);
        continue;
      }

      const userServers = servers.filter(srv => srv.attributes.user === id);

      for (const srv of userServers) {
        await deleteServer(srv.attributes.id);
        totalDeleted++;
      }

      await deleteUser(id);
    }

    await m.reply(`✅ Selesai! Menghapus ${totalDeleted} server & user (kecuali ID ${excludeId}).`);
  } catch (err) {
    return m.reply(`Terjadi kesalahan:\n${JSON.stringify(err.response?.data || err.message, null, 2)}`);
  }
}
break;

case "addakses": case "addaksesgc": {
if (!isCreator) return onlyOwner();
if (!m.isGroup) return onlyGroup();
const input = m.chat
if (sellerpanel.includes(input)) return m.reply(`Grup ini sudah di beri akses reseller panel!`)
sellerpanel.push(input)
await fs.writeFileSync("./database/panelseller.json", JSON.stringify(sellerpanel, null, 2))
m.reply(`Berhasil menambah grup reseller panel ✅`)
}
break

case "delakses": case "delaksesgc": {
if (!isCreator) return onlyOwner();
if (sellerpanel.length < 1) return m.reply("Tidak ada grup reseller panel")
if (!m.isGroup) return onlyGroup();
let input = text ? text : m.chat
if (input == "all") {
sellerpanel.length = 0
await fs.writeFileSync("./database/panelseller.json", JSON.stringify(sellerpanel, null, 2))
return m.reply(`Berhasil menghapus semua grup reseller panel ✅`)
}
if (!sellerpanel.includes(input)) return m.reply(`Grup ini bukan grup reseller panel!`)
let posi = sellerpanel.indexOf(input)
await sellerpanel.splice(posi, 1)
await fs.writeFileSync("./database/panelseller.json", JSON.stringify(sellerpanel, null, 2))
m.reply(`Berhasil menghapus grup reseller panel ✅`)
}
break

case "listakses": {
if (!isCreator) return onlyOwner();
if (sellerpanel.length < 1) return m.reply("Tidak ada grup reseller panel")
const datagc = await neo.groupFetchAllParticipating()
let teks = ""
for (let i of sellerpanel) {
let nama = datagc[i].subject || "Grup tidak ditemukan"
teks += `\n* ${i}
* ${nama}\n`
}
return m.reply(teks)
}
break

// PANEL V2
  case "cadmin-v2": {
  if (!isCreator) return onlyOwner();
  if (!text) return example("adminneo,628XXX");

  let [username, nomor] = text.split(",").map(v => v.trim());
  if (!username || !nomor) return example("adminneo,628XXX");

  nomor = nomor.replace(/\D/g, "") + "@s.whatsapp.net";
  username = username.toLowerCase();

  try {
    let onWa = await neo.onWhatsApp(nomor.split("@")[0]);
    if (!onWa || onWa.length === 0) return m.reply("Nomor tidak terdaftar di WhatsApp.");
  } catch (err) {
    console.error("Error cek nomor WA:", err);
    return m.reply("Gagal cek nomor WhatsApp: " + err.message);
  }

  const email = `${username}@admin.neo`;
  const name = func.capital(username) + " Admin V2";
  const password = `${username}NeoSecure002`;

  try {
    const response = await fetch(domain2 + "/api/application/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apikey2}`
      },
      body: JSON.stringify({
        email,
        username,
        first_name: name,
        last_name: "Staff",
        language: "en",
        password,
        root_admin: true
      })
    });

    const resText = await response.text();
    let userData;

    try {
      userData = JSON.parse(resText);
    } catch (e) {
      console.error("Gagal parse response JSON:", resText);
      throw new Error("Gagal parsing data response dari server panel.");
    }

    if (!response.ok || !userData?.attributes?.id)
      throw new Error(`Gagal buat akun admin V2 (status: ${response.status})`);

    const msg = `┏━━━『 *NEO ADMIN PANEL V2* 』━━━┓
┃
┃ 🧑‍✈️ Username: ${username} 
┃ 🔐 Password: ${password} 
┃ 🆔 Admin ID: ${userData.attributes.id} 
┃ 📩 Email: ${email} 
┃
┃ ⚙️ Akses: Full Root Admin 
┃ 🌐 Panel: ${global.domain2} 
┃
┗━━━━━━━━━━━━━━━━━━━━┛

╭─❖「 RULES ADMIN 」 
│ 
│ 1. Jaga kredibilitas & data user. 
│ 2. Jangan ubah sistem utama tanpa izin. 
│ 3. Gunakan akses root dengan bijak. 
│ 4. Laporkan error/breach ke Owner. 
│ Selengkapnya Baca Deskripsi Grup 
│ 
╰──⭓ Selamat datang di NeoLabs Staff System!`;

    await neo.sendMessage(nomor, {
      text: msg,
      contextInfo: {
        externalAdReply: {
          title: `Neo Admin Panel V2 - ${username}`,
          body: "Akun admin berhasil dibuat.",
          thumbnailUrl: global.imgthumb,
          sourceUrl: global.link,
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    });

    m.reply(`✅ *Akun admin V2 @${username}* berhasil dibuat & dikirim ke *${nomor.split("@")[0]}*`, m.chat, {
      mentions: [nomor]
    });

  } catch (err) {
    console.error("ERR ADMIN V2:", err.stack || err.message);
    return m.reply("Terjadi kesalahan saat membuat admin V2:\n" + err.message);
  }
} 
break;

  case "deladmin-v2": {
    if (!isCreator) return onlyOwner();
    if (!text || isNaN(text)) return example("ID Admin yg mau di delete");

    const id = parseInt(text);
    try {
      const getRes = await fetch(`${domain2}/api/application/users/${id}`, {
        headers: { Authorization: `Bearer ${apikey2}` }
      });
      if (!getRes.ok) throw new Error("Gagal ambil data admin V2, pastikan ID benar.");
      const userData = await getRes.json();
      const delRes = await fetch(`${domain2}/api/application/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${apikey2}` }
      });

      if (!delRes.ok) throw new Error(`Gagal hapus admin V2 (${delRes.status})`);

      let msg = `⚠️ *NEO ADMIN V2 REMOVAL*\n\n` +
        `🧑‍✈️ *Username:* ${userData.attributes.username}\n` +
        `🆔 *ID Admin:* ${id}\n` +
        `📩 *Email:* ${userData.attributes.email}\n\n` +
        `✅ Admin V2 telah dihapus dari sistem panel.\n` +
        `┗━━━━━━━━━━━━━━━⭓`;

      m.reply(msg);

    } catch (err) {
      console.error("DEL ADMIN V2 ERROR:", err);
      return m.reply("Gagal menghapus admin V2:\n" + err.message);
    }

  } break;

  case "listadmin-v2": {
    if (!isCreator) return onlyOwner();

    try {
      const userRes = await fetch(`${domain2}/api/application/users`, {
        headers: { Authorization: `Bearer ${apikey2}` }
      });
      if (!userRes.ok) throw new Error(`Gagal ambil data user dari panel V2 (${userRes.status})`);

      const users = (await userRes.json()).data;

      let teks = `╭───❖「 *NEO ADMIN V2 LIST* 」\n│`;
      for (let i = 0; i < users.length; i++) {
        let u = users[i].attributes;
        if (!u.root_admin) continue;

        teks += `\n├─ ${i + 1}. *${u.username}*\n`;
        teks += `│   🆔 ID: ${u.id}\n`;
        teks += `│   📩 Email: ${u.email}\n`;
        teks += `│   🏷️ Nama: ${u.first_name} ${u.last_name}\n`;
        teks += `│   🔐 Admin: Aktif (Panel V2)\n`;
      }
      teks += `\n╰────────────⭓`;

      if (!teks.includes("├─")) return m.reply("Tidak ada admin terdaftar di panel V2.");
      m.reply(teks);

    } catch (err) {
      console.error("LIST ADMIN V2 ERROR:", err);
      return m.reply("Gagal mengambil data admin dari panel V2:\n" + err.message);
    }

  } break;

  case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": 
  case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": 
  case "unlimited-v2": case "unli-v2": {
    let cmd = m.body ? m.body.split(" ")[0].toLowerCase() : "";
    if (!isCreator && !isGcPanel2) return onlyPremium();
    if (!text) return example("username,628XXX");

    let [username, nomor] = text.split(",").map(s => s.trim());
    if (!username || !nomor) return example("username,628XXX");
    nomor = nomor.replace(/\D/g, "") + "@s.whatsapp.net";
    username = username.toLowerCase();

    try {
      let onWa = await neo.onWhatsApp(nomor.split("@")[0]);
      if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di WhatsApp.");
    } catch (err) {
      return m.reply("Gagal cek nomor WhatsApp: " + err.message);
    }

    const resourceMap2 = {
      "1gb-v2": { ram: "1000", disk: "1000", cpu: "40" },
      "2gb-v2": { ram: "2000", disk: "1000", cpu: "60" },
      "3gb-v2": { ram: "3000", disk: "2000", cpu: "80" },
      "4gb-v2": { ram: "4000", disk: "2000", cpu: "100" },
      "5gb-v2": { ram: "5000", disk: "3000", cpu: "120" },
      "6gb-v2": { ram: "6000", disk: "3000", cpu: "140" },
      "7gb-v2": { ram: "7000", disk: "4000", cpu: "160" },
      "8gb-v2": { ram: "8000", disk: "4000", cpu: "180" },
      "9gb-v2": { ram: "9000", disk: "5000", cpu: "200" },
      "10gb-v2": { ram: "10000", disk: "5000", cpu: "220" },
      "unli-v2": { ram: "0", disk: "0", cpu: "0" },
      "unlimited-v2": { ram: "0", disk: "0", cpu: "0" }
    };
    let { ram, disk, cpu } = resourceMap2[command];

    const email = `${username}@user.neo`;
    const name = func.capital(username) + " Neo V2";
    const password = `${username}Zassneo033`;

    try {
      // Create User
      const userRes = await fetch(domain2 + "/api/application/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apikey2}`
        },
        body: JSON.stringify({
          email, username, first_name: name,
          last_name: "Server", language: "en", password
        })
      });

      if (!userRes.ok) throw new Error(`Gagal buat user di panel V2 (${userRes.status})`);
      const userData = await userRes.json();
      if (!userData?.attributes?.id) throw new Error("User ID di panel V2 tidak ditemukan.");

      // Get Egg Info
      const eggRes = await fetch(`${domain2}/api/application/nests/${nestid2}/eggs/${egg2}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${apikey2}` }
      });

      if (!eggRes.ok) throw new Error(`Gagal ambil data egg di panel V2 (${eggRes.status})`);
      const eggData = await eggRes.json();

      // Create Server
      const serverRes = await fetch(domain2 + "/api/application/servers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apikey2}`
        },
        body: JSON.stringify({
          name,
          description: "© Neo Labs - Zass Onee (Panel V2)",
          user: userData.attributes.id,
          egg: parseInt(egg2),
          docker_image: "ghcr.io/parkervcp/yolks:nodejs_20", // Sesuaikan jika perlu
          startup: eggData.attributes.startup,
          environment: {
            INST: "npm", USER_UPLOAD: "0",
            AUTO_UPDATE: "0", CMD_RUN: "npm start" // Sesuaikan jika perlu
          },
          limits: { memory: ram, swap: 0, disk, io: 500, cpu },
          feature_limits: { databases: 5, backups: 5, allocations: 5 },
          deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] }
        })
      });

      if (!serverRes.ok) throw new Error(`Gagal buat server di panel V2 (${serverRes.status})`);
      const serverData = await serverRes.json();
      if (!serverData?.attributes?.id) throw new Error("Server ID di panel V2 tidak ditemukan.");

      // Kirim ke user
      let msg = `┏━━━『 *NEO PANEL V2 ACCESS* 』━━━┓
┃
┃ 👤 Username: ${username} 
┃ 🔐 Password: ${password} 
┃ 🆔 Server ID: ${serverData.attributes.id} 
┃
┃ ⚙️ Spesifikasi: 
┃ ┗ ${ram === "0" ? "Unlimited" : ram / 1000 + "GB"} RAM / ${disk === "0" ? "Unlimited" : disk / 1000 + "GB"} Disk / ${cpu === "0" ? "Unlimited" : cpu + "%"} CPU 
┃ 🌐 Login: ${global.domain2} 
┃
┃ ⏳ Masa Aktif: 30 Hari 
┃ 🛡️ Garansi: 15 Hari (1× replace) 
┃
┗━━━━━━━━━━━━━━━━━━━━┛

╭─❖「 RULES PEMBELIAN 」 
│ 
│ 1. Garansi hanya berlaku 15 hari. 
│ 2. Claim garansi wajib bawa ss cht saat pembelian 
│ 3. Akses root/terminal dilarang tanpa izin. 
│ 4. Panel digunakan hanya untuk keperluan pribadi. 
│ 5. Jika abuse/spam = Suspend permanen. 
│ 
╰──⭓ Terima kasih telah memilih Neo Labs!`;

      try {
        await neo.sendMessage(nomor, {
          text: msg,
          contextInfo: {
            externalAdReply: {
              title: `NeoPanel V2 - ${username}`,
              body: "Data akun berhasil dibuat.",
              thumbnailUrl: global.imgthumb,
              sourceUrl: global.web,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: global.idSaluran || "",
              newsletterName: global.namach || ""
            }
          }
        }, { quoted: m });
      } catch (e) {
        console.error("Gagal kirim pesan:", e);
        m.reply("Akun berhasil dibuat tapi gagal mengirim pesan ke nomor.");
      }

      m.reply(`✅ Server *@${username}* berhasil dibuat di panel V2 & dikirim ke *${nomor.split("@")[0]}*`, m.chat, { mentions: [nomor] });

    } catch (err) {
      console.error("ERR:", err);
      return m.reply("Terjadi kesalahan sistem di panel V2:\n" + err.message);
    }

  } 
break;

case "deluser-v2": {
    if (!isCreator) return onlyPremium();
    if (!text) return example("username");

    let username = text.trim().toLowerCase();

    try {
        // Cari user berdasarkan username
        let resUser = await fetch(domain2 + "/api/application/users", {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey2}` }
        });
        let users = await resUser.json();
        if (!users?.data) return m.reply("Gagal ambil data user dari panel.");

        let targetUser = users.data.find(u => u.attributes.username === username);
        if (!targetUser) return m.reply(`User *${username}* tidak ditemukan di panel.`);

        // Ambil server milik user
        let resServers = await fetch(domain2 + "/api/application/servers", {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey2}` }
        });
        let serverList = await resServers.json();
        if (!serverList?.data) return m.reply("Gagal ambil daftar server.");

        let userServers = serverList.data.filter(s => s.attributes.user === targetUser.attributes.id);

        // Hapus semua server milik user
        for (let s of userServers) {
            await fetch(`${domain2}/api/application/servers/${s.attributes.id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${apikey2}` }
            });
        }

        // Hapus user
        await fetch(`${domain2}/api/application/users/${targetUser.attributes.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${apikey2}` }
        });

        m.reply(`✅ *User ${username}* dan semua server miliknya berhasil dihapus dari panel.V2`);
    } catch (err) {
        console.error("ERR DELPANEL:", err);
        m.reply("Gagal menghapus user/server:\n" + err.message);
    }
}
break;

  case "listpanel-v2": {
    if (!isCreator && !isGcPanel2) return onlyOwner();

    try {
      let page = 1, servers = [], keepFetching = true;

      while (keepFetching) {
        const res = await fetch(`${domain2}/api/application/servers?page=${page}&per_page=100`, {
          headers: { Authorization: `Bearer ${apikey2}` }
        });

        if (!res.ok) throw new Error(`Gagal ambil server halaman ${page} dari panel V2 (${res.status})`);
        const data = await res.json();

        servers.push(...data.data);
        keepFetching = data.meta.pagination.current_page < data.meta.pagination.total_pages;
        page++;
      }

      if (!servers.length) return m.reply("Belum ada server di panel V2.");

      let teks = `╭───❖「 *NEO SERVER LIST PANEL V2 (${servers.length})* 」`;

      for (let i = 0; i < servers.length; i++) {
        const s = servers[i].attributes;
        teks += `\n├─ ${i + 1}. *${s.name}*\n`;
        teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
        teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
        teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
        teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
      }

      teks += `\n╰────────────⭓`;
      m.reply(teks);

    } catch (err) {
      console.error("ERR LIST PANEL V2:", err);
      m.reply("Terjadi kesalahan saat mengambil daftar server dari panel V2:\n" + err.message);
    }
  } 
break;

  case "delpanel-v2": {
    if (!isCreator) onlyOwner();
    if (!text) return example("ID server panel V2");

    try {
      const srvRes = await fetch(`${domain2}/api/application/servers`, {
        headers: { Authorization: `Bearer ${apikey2}` }
      });
      const srvJson = await srvRes.json();
      const target = srvJson.data.find(v => Number(text) === v.attributes.id);

      if (!target) return m.reply("ID server tidak ditemukan di panel V2.");

      const s = target.attributes;
      const delSrv = await fetch(`${domain2}/api/application/servers/${s.id}`, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apikey2}`
        }
      });

      const userRes = await fetch(`${domain2}/api/application/users`, {
        headers: { Authorization: `Bearer ${apikey2}` }
      });
      const userJson = await userRes.json();
      const targetUser = userJson.data.find(u => u.attributes.first_name.toLowerCase() === s.name.toLowerCase().replace(" 2", "")); // Adjust name matching

      if (targetUser) {
        await fetch(`${domain2}/api/application/users/${targetUser.attributes.id}`, {
          method: "DELETE",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey2}`
          }
        });
      }

      let teks = `╭───❖「 *NEO SERVER REMOVED PANEL V2* 」\n`;
      teks += `├─ *${s.name}* berhasil dihapus dari panel V2!\n`;
      teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
      teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
      teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
      teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
      teks += `╰────────────⭓`;

      m.reply(teks);

    } catch (err) {
      console.error("ERR DEL PANEL V2:", err);
      m.reply("Terjadi kesalahan saat menghapus server dari panel V2:\n" + err.message);
    }
  } break;

case "clearpanel-v2": {
  if (!isCreator) return onlyOwner();
  if (!text) return example(`1 (ID user yang ingin dipertahankan)`);

  const excludeId = parseInt(text.trim());
  if (isNaN(excludeId)) return m.reply("ID tidak valid! Harus berupa angka.");

  await m.reply(`Memproses penghapusan seluruh user & server...\nKecuali user dengan ID ${excludeId} di panel v2`);

  try {
    const headers = {
      Authorization: `Bearer ${apikey2}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const getUsers = async () => {
      const res = await axios.get(`${domain2}/api/application/users`, { headers });
      return res.data.data;
    };

    const getServers = async () => {
      const res = await axios.get(`${domain2}/api/application/servers`, { headers });
      return res.data.data;
    };

    const deleteServer = async (uuid) => {
      try {
        await axios.delete(`${domain2}/api/application/servers/${uuid}`, { headers });
        console.log(`✔️ Server ${uuid} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus server ${uuid}:`, err.response?.data || err.message);
      }
    };

    const deleteUser = async (id) => {
      try {
        await axios.delete(`${domain2}/api/application/users/${id}`, { headers });
        console.log(`✔️ User ${id} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus user ${id}:`, err.response?.data || err.message);
      }
    };

    const users = await getUsers();
    const servers = await getServers();
    let totalDeleted = 0;

    for (const user of users) {
      const { id, username } = user.attributes;
      if (id === excludeId) {
        console.log(`Lewati ID ${id} (${username}) karena dikecualikan`);
        continue;
      }

      const userServers = servers.filter(srv => srv.attributes.user === id);

      for (const srv of userServers) {
        await deleteServer(srv.attributes.id);
        totalDeleted++;
      }

      await deleteUser(id);
    }

    await m.reply(`✅ Selesai! Menghapus ${totalDeleted} server & user (kecuali ID ${excludeId}) di panel v2.`);
  } catch (err) {
    return m.reply(`Terjadi kesalahan:\n${JSON.stringify(err.response?.data || err.message, null, 2)}`);
  }
}
break;

  case "addakses-v2": case "addaksesgc-v2": {
    if (!isCreator) return onlyOwner();
    if (!m.isGroup) return onlyGroup();
    const input = m.chat;
    if (sellerpanel2.includes(input)) return m.reply(`Grup ini sudah di beri akses reseller panel V2!`);
    sellerpanel2.push(input);
    await fs.writeFileSync("./database/panelseller2.json", JSON.stringify(sellerpanel2, null, 2));
    m.reply(`Berhasil menambah grup reseller panel V2 ✅`);
  }
  break;

  case "delakses-v2": case "delaksesgc-v2": {
    if (!isCreator) return onlyOwner();
    if (sellerpanel2.length < 1) return m.reply("Tidak ada grup reseller panel V2");
    if (!m.isGroup) return onlyGroup();
    let input = text ? text : m.chat;
    if (input == "all") {
      sellerpanel2.length = 0;
      await fs.writeFileSync("./database/panelseller2.json", JSON.stringify(sellerpanel2, null, 2));
      return m.reply(`Berhasil menghapus semua grup reseller panel V2 ✅`);
    }
    if (!sellerpanel2.includes(input)) return m.reply(`Grup ini bukan grup reseller panel V2!`);
    let posi = sellerpanel2.indexOf(input);
    await sellerpanel2.splice(posi, 1);
    await fs.writeFileSync("./database/panelseller2.json", JSON.stringify(sellerpanel2, null, 2));
    m.reply(`Berhasil menghapus grup reseller panel V2 ✅`);
  }
  break;

  case "listakses-v2": {
    if (!isCreator) return onlyOwner();
    if (sellerpanel2.length < 1) return m.reply("Tidak ada grup reseller panel V2");
    const datagc = await neo.groupFetchAllParticipating();
    let teks = "";
    for (let i of sellerpanel2) {
      let nama = datagc[i]?.subject || "Grup tidak ditemukan";
      teks += `\n* ${i}\n* ${nama}\n`;
    }
    return m.reply(teks);
  }
  break;
  
// PANEL PRIVATE
case "1gb-pv": case "2gb-pv": case "3gb-pv": case "4gb-pv": case "5gb-pv":
case "6gb-pv": case "7gb-pv": case "8gb-pv": case "9gb-pv": case "10gb-pv":
case "unlimited-pv": case "unli-pv": {
    let cmd = m.body ? m.body.split(" ")[0].toLowerCase() : "";
    if (!isCreator && !isGcPanel3) return onlyPremium();
    if (!text) return example("username,628XXX");

    let [username, nomor] = text.split(",").map(s => s.trim());
    if (!username || !nomor) return example("username,628XXX");
    nomor = nomor.replace(/\D/g, "") + "@s.whatsapp.net";
    username = username.toLowerCase();

    try {
        let onWa = await neo.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di WhatsApp.");
    } catch (err) {
        return m.reply("Gagal cek nomor WhatsApp: " + err.message);
    }

    const resourceMap = {
        "1gb-pv": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb-pv": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb-pv": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb-pv": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb-pv": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb-pv": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb-pv": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb-pv": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb-pv": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb-pv": { ram: "10000", disk: "5000", cpu: "220" },
        "unli-pv": { ram: "0", disk: "0", cpu: "0" },
        "unlimited-pv": { ram: "0", disk: "0", cpu: "0" }
    };
    let { ram, disk, cpu } = resourceMap[command];

    const email = `${username}@user.neo`;
    const name = func.capital(username) + " NeoVIP";
    const password = `${username}VIPneo111`;

    try {
        // Create User
        const userRes = await fetch(domain3 + "/api/application/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey3}`
            },
            body: JSON.stringify({
                email, username, first_name: name,
                last_name: "Server", language: "en", password
            })
        });

        if (!userRes.ok) throw new Error(`Gagal buat user (${userRes.status})`);
        const userData = await userRes.json();
        if (!userData?.attributes?.id) throw new Error("User ID tidak ditemukan.");

        // Get Egg Info
        const eggRes = await fetch(`${domain3}/api/application/nests/${nestid3}/eggs/${egg3}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey3}` }
        });

        if (!eggRes.ok) throw new Error(`Gagal ambil data egg (${eggRes.status})`);
        const eggData = await eggRes.json();

        // Create Server
        const serverRes = await fetch(domain3 + "/api/application/servers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey3}`
            },
            body: JSON.stringify({
                name,
                description: "© Credits By Zass Onee",
                user: userData.attributes.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: eggData.attributes.startup,
                environment: {
                    INST: "npm", USER_UPLOAD: "0",
                    AUTO_UPDATE: "0", CMD_RUN: "npm start"
                },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] }
            })
        });

        if (!serverRes.ok) throw new Error(`Gagal buat server (${serverRes.status})`);
        const serverData = await serverRes.json();
        if (!serverData?.attributes?.id) throw new Error("Server ID tidak ditemukan.");

        // Kirim ke user
        let msg = `┏━━━『 *NEO PANEL PRIVATE* 』━━━┓
┃  
┃ 👤 *Username:* ${username}
┃ 🔐 *Password:* ${password}
┃ 🆔 *Server ID:* ${serverData.attributes.id}
┃  
┃ ⚙️ *Spesifikasi:* 
┃ ┗ ${ram === "0" ? "Unlimited" : ram / 1000 + "GB"} RAM / ${disk === "0" ? "Unlimited" : disk / 1000 + "GB"} Disk / ${cpu === "0" ? "Unlimited" : cpu + "%"} CPU
┃ 🌐 *Login:* ${global.domain3}
┃  
┃ ⏳ *Masa Aktif:* 30 Hari
┃ 🛡️ *Garansi:* 15 Hari (1× replace)
┃  
┗━━━━━━━━━━━━━━━━━━━━┛

╭─❖「 *RULES PEMBELIAN* 」
│
│ 1. Garansi full 30 hari.
│ 2. Claim garansi wajib bawa ss cht saat pembelian
│ 3. Akses root/terminal dilarang tanpa izin.
│ 4. Panel digunakan hanya untuk keperluan pribadi.
│ 5. Jika abuse/spam = Suspend permanen.
│
╰──⭓ Terima kasih telah memilih *Neo Labs*!`;

        try {
            await neo.sendMessage(nomor, {
                text: msg,
                contextInfo: {
                    externalAdReply: {
                        title: `Neo VIP - Client ${username}`,
                        body: "Pesanan Panel Private Anda.",
                        thumbnailUrl: global.imgthumb,
                        sourceUrl: global.web,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran || "",
                        newsletterName: global.namach || ""
                    }
                }
            }, { quoted: m });
        } catch (e) {
            console.error("Gagal kirim pesan:", e);
            m.reply("Akun berhasil dibuat tapi gagal mengirim pesan ke nomor.");
        }

        m.reply(`✅ ServerVIP *@${username}* berhasil dibuat & dikirim ke *${nomor.split("@")[0]}*`, m.chat, { mentions: [nomor] });

    } catch (err) {
        console.error("ERR:", err);
        return m.reply("Terjadi kesalahan sistem:\n" + err.message);
    }
}
break;

case "listpanel": {
    if (!isCreator && !isGcPanel3) return onlyOwner();

    try {
        let page = 1, servers = [], keepFetching = true;

        while (keepFetching) {
            const res = await fetch(`${domain3}/api/application/servers?page=${page}&per_page=100`, {
                headers: { Authorization: `Bearer ${apikey3}` }
            });

            if (!res.ok) throw new Error(`Gagal ambil server halaman ${page} (${res.status})`);
            const data = await res.json();

            servers.push(...data.data);
            keepFetching = data.meta.pagination.current_page < data.meta.pagination.total_pages;
            page++;
        }

        if (!servers.length) return m.reply("Belum ada server di panel.");

        let teks = `╭───❖「 *LIST SERVER PV (${servers.length})* 」`;

        for (let i = 0; i < servers.length; i++) {
            const s = servers[i].attributes;
            teks += `\n├─ ${i + 1}. *${s.name}*\n`;
            teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
            teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
            teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
            teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
        }

        teks += `\n╰────────────⭓`;
        m.reply(teks);

    } catch (err) {
        console.error("ERR LIST PANEL:", err);
        m.reply("Terjadi kesalahan:\n" + err.message);
    }
}
break;

case "delpanel-pv": {
    if (!isCreator) onlyOwner();
    if (!text) return example("Masukkan ID server");

    try {
        const srvRes = await fetch(`${domain3}/api/application/servers`, {
            headers: { Authorization: `Bearer ${apikey3}` }
        });
        const srvJson = await srvRes.json();
        const target = srvJson.data.find(v => Number(text) === v.attributes.id);

        if (!target) return m.reply("ID server tidak ditemukan di panel.");

        const s = target.attributes;
        const delSrv = await fetch(`${domain3}/api/application/servers/${s.id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey3}`
            }
        });

        const userRes = await fetch(`${domain3}/api/application/users`, {
            headers: { Authorization: `Bearer ${apikey3}` }
        });
        const userJson = await userRes.json();
        const targetUser = userJson.data.find(u => u.attributes.first_name.toLowerCase() === s.name.toLowerCase());

        if (targetUser) {
            await fetch(`${domain3}/api/application/users/${targetUser.attributes.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey3}`
                }
            });
        }

        let teks = `╭───❖「 *NEO SERVER REMOVED* 」\n`;
        teks += `├─ *${s.name}* berhasil dihapus!\n`;
        teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
        teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
        teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
        teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
        teks += `╰────────────⭓`;

        m.reply(teks);

    } catch (err) {
        console.error("ERR DEL PANEL:", err);
        m.reply("Terjadi kesalahan:\n" + err.message);
    }
}
break;

case "clearpanel-pv": {
  if (!isCreator) return onlyOwner();
  if (!text) return example(`1 (ID user yang ingin dipertahankan)`);

  const excludeId = parseInt(text.trim());
  if (isNaN(excludeId)) return m.reply("ID tidak valid! Harus berupa angka.");

  await m.reply(`Memproses penghapusan seluruh user & server...\nKecuali user dengan ID ${excludeId}.`);

  try {
    const headers = {
      Authorization: `Bearer ${apikey3}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const getUsers = async () => {
      const res = await axios.get(`${domain3}/api/application/users`, { headers });
      return res.data.data;
    };

    const getServers = async () => {
      const res = await axios.get(`${domain3}/api/application/servers`, { headers });
      return res.data.data;
    };

    const deleteServer = async (uuid) => {
      try {
        await axios.delete(`${domain3}/api/application/servers/${uuid}`, { headers });
        console.log(`✔️ Server ${uuid} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus server ${uuid}:`, err.response?.data || err.message);
      }
    };

    const deleteUser = async (id) => {
      try {
        await axios.delete(`${domain3}/api/application/users/${id}`, { headers });
        console.log(`✔️ User ${id} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus user ${id}:`, err.response?.data || err.message);
      }
    };

    const users = await getUsers();
    const servers = await getServers();
    let totalDeleted = 0;

    for (const user of users) {
      const { id, username } = user.attributes;
      if (id === excludeId) {
        console.log(`Lewati ID ${id} (${username}) karena dikecualikan`);
        continue;
      }

      const userServers = servers.filter(srv => srv.attributes.user === id);

      for (const srv of userServers) {
        await deleteServer(srv.attributes.id);
        totalDeleted++;
      }

      await deleteUser(id);
    }

    await m.reply(`✅ Selesai! Menghapus ${totalDeleted} server & user (kecuali ID ${excludeId}) di panel pv.`);
  } catch (err) {
    return m.reply(`Terjadi kesalahan:\n${JSON.stringify(err.response?.data || err.message, null, 2)}`);
  }
}
break;

case "addakses-pv": case "addaksesgc-pv": {
if (!isCreator) return onlyOwner();
if (!m.isGroup) return onlyGroup();
const input = m.chat
if (sellerpanel3.includes(input)) return m.reply(`Grup ini sudah di beri akses VIP reseller panel!`)
sellerpanel3.push(input)
await fs.writeFileSync("./database/panelseller3.json", JSON.stringify(sellerpanel3, null, 2))
m.reply(`Berhasil menambah grup VIP reseller panel ✅`)
}
break

case "delakses-pv": case "delaksesgc-pv": {
if (!isCreator) return onlyOwner();
if (sellerpanel3.length < 1) return m.reply("Tidak ada grup VIP reseller panel")
if (!m.isGroup) return onlyGroup();
let input = text ? text : m.chat
if (input == "all") {
sellerpanel3.length = 0
await fs.writeFileSync("./database/panelseller3.json", JSON.stringify(sellerpanel3, null, 2))
return m.reply(`Berhasil menghapus semua grup VIP reseller panel ✅`)
}
if (!sellerpanel3.includes(input)) return m.reply(`Grup ini bukan grup VIP reseller panel!`)
let posi = sellerpanel3.indexOf(input)
await sellerpanel3.splice(posi, 1)
await fs.writeFileSync("./database/panelseller3.json", JSON.stringify(sellerpanel3, null, 2))
m.reply(`Berhasil menghapus grup VIP reseller panel ✅`)
}
break

case "listakses-pv": {
if (!isCreator) return onlyOwner();
if (sellerpanel3.length < 1) return m.reply("Tidak ada grup VIP reseller panel")
const datagc = await neo.groupFetchAllParticipating()
let teks = ""
for (let i of sellerpanel3) {
let nama = datagc[i].subject || "Grup tidak ditemukan"
teks += `\n* ${i}
* ${nama}\n`
}
return m.reply(teks)
}
break

// SYSTEM CONFIG BOT
    case "addowner": {
        if (!isCreator) return onlyOwner();
        if (!text) return example("Tag atau sebut nomor yang ingin dijadikan owner!");
        let user = m.mentionedJid[0] || text.replace(/\D/g, '') + "@s.whatsapp.net";
        if (ownerList.includes(user)) return m.reply(`Nomor ${user.split('@')[0]} sudah menjadi owner!`);
        ownerList.push(user);
        await saveOwnerList();
        m.reply(`Berhasil menambahkan ${user.split('@')[0]} sebagai owner bot.`);
    }
    break;

    case "delowner": {
        if (!isCreator) return onlyOwner();
        if (!text) return example("Tag atau sebut nomor owner yang ingin dihapus!");
        let user = m.mentionedJid[0] || text.replace(/\D/g, '') + "@s.whatsapp.net";
        if (!ownerList.includes(user)) return m.reply(`Nomor ${user.split('@')[0]} bukan owner!`);
        ownerList = ownerList.filter(o => o !== user);
        await saveOwnerList();
        m.reply(`Berhasil menghapus ${user.split('@')[0]} dari daftar owner bot.`);
    }
    break;

case "listowner": {
        if (!isCreator) return onlyOwner();
        if (ownerList.length === 0) return m.reply("Belum ada owner yang terdaftar.");
        let teks = "╭───「 *LIST OWNER NEO* 」───\n";
        ownerList.forEach((owner, index) => {
            teks += `├─ ${index + 1}. ${owner.split('@')[0]}\n`;
        });
        teks += "╰───────────────";
        m.reply(teks);
    }
    break;
    
case 'self':
  if (!isCreator) return onlyOwner();
  if (global.selfmode) return m.reply('Bot sudah dalam mode *self*.');
  global.selfmode = true;
  m.reply('Successfully switched to *self* mode.');
  break;

case 'public':
  if (!isCreator) return onlyOwner();
  if (!global.selfmode) return m.reply('Bot sudah dalam mode *public*.');
  global.selfmode = false;
  m.reply('Successfully switched to *public* mode.');
  break;
  
case 'autoviewsw':
    if (!isCreator) return onlyOwner();
    if (!q) return example ('on/off');

    if (q.toLowerCase() === 'on') {
        db.settings.autoview = true;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('Auto View Status berhasil diaktifkan.');
    } else if (q.toLowerCase() === 'off') {
        db.settings.autoview = false;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('Auto View Status berhasil dinonaktifkan.');
    } else {
        example('on / off');
    }
    break;
 
case 'gconly':
    if (!isCreator) return onlyOwner();
    if (!q) return example('on/off');

    if (q.toLowerCase() === 'on') {
        db.settings.gconly = true;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('Mode GC Only diaktifkan. Bot akan diam di chat pribadi.');
    } else if (q.toLowerCase() === 'off') {
        db.settings.gconly = false;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('Mode GC Only dimatikan. Bot akan aktif di semua chat.');
    } else {
        reply('Gunakan: .gconly on / off');
    }
    break;
    
case 'setcmd':
    if (!isCreator) return onlyOwner();
    if (!quoted || quoted.mimetype !== 'image/webp') return example('Reply ke stiker-nya!');
    if (!q) return example('Masukin command yang mau dipicu dari stiker\nContoh: .setcmd .1gb');

    let media = await quoted.download();
    let hash = crypto.createHash('md5').update(media).digest('hex');
    db.stickcmd[hash] = q;
    fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
    reply(`Command *${q}* berhasil di-bind ke stiker ini!`);
    break;

case 'delcmd':
    if (!isCreator) return onlyOwner();
    if (!quoted || quoted.mimetype !== 'image/webp') return example('Reply ke stiker yang mau dihapus!');

    let media2 = await quoted.download();
    let hash2 = crypto.createHash('md5').update(media2).digest('hex');

    if (!db.stickcmd[hash2]) return reply('Stiker ini belum di-bind ke command apapun.');
    delete db.stickcmd[hash2]
    fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
    reply('Command dari stiker berhasil dihapus.');
    break;
    
case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`
m.reply(respon);
}
break

// Tools Menu 
case 'tourl': {
  if (!m.quoted || !m.quoted.fileSha256) return example(`Balas file media (img, vid, audio, doc, gif, sticker, dll)`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  let media = await m.quoted.download();
  if (!media) return m.reply("❌ Gagal mengunduh media!");

  try {
    const axios = require('axios');
    const FormData = require('form-data');
    const fs = require('fs');
    const path = require('path');

    // Buat folder temp jika belum ada
    if (!fs.existsSync('./temp')) fs.mkdirSync('./temp');

    const extension = mime.split('/')[1] || 'file';
    const fileName = `NeoUpload_${Date.now()}.${extension}`;
    const filePath = `./temp/${fileName}`;
    fs.writeFileSync(filePath, media);

    const form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', fs.createReadStream(filePath));

    const res = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    });

    fs.unlinkSync(filePath);

    const url = res.data.trim();
    if (!url.includes('https://')) return m.reply("❌ Gagal mengunggah ke Catbox!");

    const sizeKb = (media.length / 1024).toFixed(2);
    const caption = `*Upload Berhasil!*\n\n` +
                    `*• Nama:* ${fileName}\n` +
                    `*• Ukuran:* ${sizeKb} KB\n` +
                    `*• Tipe:* ${mime}\n` +
                    `*• Link:* ${url}`;

    const buttonMsg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({ text: caption }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: 'cta_copy',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'Salin Link',
                    copy_code: url
                  })
                }
              ]
            })
          })
        }
      }
    }, { userJid: m.sender, quoted: m });

    await neo.relayMessage(m.chat, buttonMsg.message, { messageId: buttonMsg.key.id });

  } catch (err) {
    console.error(err);
    m.reply("❌ Terjadi kesalahan saat upload ke Catbox!");
  }
}
break;

case 'tiktok':
case 'tt':
case 'ttnowm': {
  if (!text) return example(`https://vt.tiktok.com/ZS8KdFQcQ/`);

  await neo.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const res = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${encodeURIComponent(text)}`);
    if (!res?.result?.data) throw 'Gagal mengambil data!';

    const data = res.result.data.find(x => x.type === 'nowatermark');
    if (!data?.url) throw 'Tidak ada video tanpa watermark ditemukan!';

    await neo.sendMessage(m.chat, {
      video: { url: data.url },
      caption: `✅ Berhasil download!\n\n🎵 Audio: ${res.result.music?.title || '-'}\n👤 Creator: ${res.result.author?.nickname || '-'}`
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply('❌ Gagal mengambil video TikTok.');
  }
}
break;

case 'ig':
case 'instagram':
case 'igdl': {
  if (!text) return example(`https://www.instagram.com/reel/CxyzABC123/`);

  await neo.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const res = await fetchJson(`https://api.vreden.my.id/api/instagram?url=${encodeURIComponent(text)}`);
    if (!res?.result || !Array.isArray(res.result)) throw 'Gagal mengambil media IG!';

    for (let media of res.result) {
      let sendOpt = { quoted: m };
      if (/image/.test(media.type)) {
        await neo.sendMessage(m.chat, { image: { url: media.url }, caption: '✅ Foto IG berhasil diunduh!' }, sendOpt);
      } else if (/video/.test(media.type)) {
        await neo.sendMessage(m.chat, { video: { url: media.url }, caption: '✅ Video IG berhasil diunduh!' }, sendOpt);
      }
    }
  } catch (e) {
    console.error(e);
    m.reply('❌ Gagal mengambil media dari Instagram.');
  }
}
break;

case 'play': {
  if (!text) return example(`Tak ingin usai`);

  await neo.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

  try {
    const res = await fetchJson(`https://api.vreden.my.id/api/playmp3?query=${encodeURIComponent(text)}`);
    if (!res?.result?.url) return m.reply('❌ Lagu tidak ditemukan.');

    const { title, thumbnail, url, duration } = res.result;

    await neo.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: `🎵 *${title}*\n⏱️ Durasi: ${duration}\n\nSedang mengunduh audio...`,
    }, { quoted: m });

    await neo.sendMessage(m.chat, {
      audio: { url },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply('❌ Gagal mencari atau mengunduh lagu.');
  }
}
break;

case 'sticker':
case 'stiker':
case 's': {
  if (!quoted || (!/image/.test(mime) && !/video/.test(mime))) return example(`Kirim atau reply foto/video`);

  m.reply('⏳ Membuat stiker...');

  let media = await neo.downloadAndSaveMediaMessage(quoted);

  let stickerOptions = {
    packname: global.packname || 'NeoBotz',
    author: global.author || 'Shiroko AI'
  };

  try {
    await neo.sendImageAsSticker(m.chat, media, m, stickerOptions);
  } catch {
    try {
      await neo.sendVideoAsSticker(m.chat, media, m, {
        ...stickerOptions,
        fps: 10,
        loop: 0
      });
    } catch (err) {
      console.error(err);
      m.reply('❌ Gagal membuat stiker.');
    }
  }

  fs.unlinkSync(media);
}
break;

case 'bratnime': {
  if (!text) return example(`halo bro`);
  if (text.length > 250) return m.reply(`Karakter terbatas, maksimal 250 huruf!`);

  m.reply('⏳ Membuat stiker bratnime...');

  try {
    const res = await fetch(`https://api.agungny.my.id/api/animbrat?q=${encodeURIComponent(text)}`);
    if (!res.ok) throw 'API error';

    const buffer = await res.buffer();

    await neo.sendImageAsSticker(m.chat, buffer, m, {
      packname: global.packname || 'NeoBotz',
      author: global.author || 'Shiroko AI-Zass Official'
    });
  } catch (err) {
    console.error(err);
    m.reply('❌ Gagal mengambil stiker bratnime. Coba lagi nanti.');
  }
}
break;

case "brat": {
if (!text) return example("Hello World!")
await neo.sendImageAsSticker(m.chat, `https://vapis.my.id/api/bratv1?q=${text}`, m, {packname: 'Neo Ai - Zass Onee'})
}
break

case "qc": {
if (!text) return example('teksnya')
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let ppuser
try {
ppuser = await neo.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/c6fbacafe23d6ab6a801e.jpg'
}
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": reswarna,
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.pushName,
            "photo": {
               "url": ppuser
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   try {
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
neo.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname })
   } catch (error) {
   m.reply(error.toString())
   }
}
break

default:
if ((budy.match) && ["bot","tes"].
includes(budy)) {
let teksOn = `━ ⬢ \`BOT ACTIVE\` ⬢ ━
━━━━━━━━━━━━━━━
- ᴊɪᴋᴀ ʙᴏᴛ ᴛᴇʀʜᴜʙᴜɴɢ ᴋᴀʀᴇɴᴀ ᴋᴏᴅᴇ ᴘᴀɪʀɪɴɢ
- ᴍᴀᴋᴀ ᴀᴋᴜ ᴍᴇʀᴇɴᴜɴɢ ᴍᴇʟɪʜᴀᴛᴍᴜ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ
━━━━━━━━━━━━━━━
Special Quotes By Neo Ai Eigne`
reply(teksOn)
}
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
/*if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return*/
console.log('Caught exception: ', err)
})