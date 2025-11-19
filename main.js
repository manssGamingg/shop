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
 
require('./settings/settings')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize, loadModule } = require('./library/myfunc')
const { default: neoConnect, delay, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers} = require("@nstar-y/bail")
const NodeCache = require("node-cache")
const Pino = require("pino")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const makeWASocket = require("@nstar-y/bail").default
const { execSync } = require("child_process");

const requiredModules = [
  "@nstar-y/bail",
  "pino",
  "chalk",
  "figlet",
  "ora"
];

for (const mod of requiredModules) {
  try {
    require.resolve(mod);
  } catch (err) {
    console.log(`[ Auto Installer By Zass ] Module ${mod} belum ada. Menginstall...`);
    execSync(`npm install ${mod}`, { stdio: "inherit" });
  }
}
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
// Matrix Console Effect by Zass Newbie
const matrixEffect = () => {
  const chars = "01";
  const columns = process.stdout.columns || 80;
  const drops = Array(columns).fill(1);

  const colorGreen = (text) => `\x1b[32m${text}\x1b[0m`;
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const draw = () => {
    let output = '';
    for (let i = 0; i < columns; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      output += Math.random() > 0.975 ? colorGreen(char) : ' ';
    }
    console.log(output);
  };

  return new Promise(resolve => {
    const interval = setInterval(draw, 50);
    setTimeout(() => {
      clearInterval(interval);
      console.clear();

      console.log('\x1b[36m');
      console.log('███╗   ██╗███████╗ ██████╗     ████████╗███╗   ██╗███████╗');
      console.log('████╗  ██║██╔════╝██╔═══██╗    ╚══██╔══╝████╗  ██║██╔════╝');
      console.log('██╔██╗ ██║█████╗  ██║   ██║       ██║   ██╔██╗ ██║█████╗  ');
      console.log('██║╚██╗██║██╔══╝  ██║   ██║       ██║   ██║╚██╗██║██╔══╝  ');
      console.log('██║ ╚████║███████╗╚██████╔╝       ██║   ██║ ╚████║███████╗');
      console.log('╚═╝  ╚═══╝╚══════╝ ╚═════╝        ╚═╝   ╚═╝  ╚═══╝╚══════╝');
      console.log('                        Credits By Zass Onee');
      console.log('\x1b[0m');

      // TQTO
      console.log('\n\x1b[1m\x1b[35m==== THANKS TO ====\x1b[0m');
      console.log('\x1b[32m✔\x1b[0m Allah SWT');
      console.log('\x1b[32m✔\x1b[0m Zass Onee');
      console.log('\x1b[32m✔\x1b[0m Atzuhiro');
      console.log('\x1b[32m✔\x1b[0m Sunaookami Shiroko');
      console.log('\x1b[32m✔\x1b[0m Developer OpenAI & Baileys');
      console.log('\x1b[32m✔\x1b[0m Subscriber & Pengguna Setia');
      console.log('\x1b[32m✔\x1b[0m Yang Udah Support Proyek Ini');

      // Kontak Developer
      console.log('\n\x1b[1m\x1b[36m==== KONTAK DEVELOPER ====\x1b[0m');
      console.log('\x1b[33m• YouTube:\x1b[0m NeoShiroko Labs');
      console.log('\x1b[33m• WhatsApp:\x1b[0m wa.me/6285298027445');
      console.log('\x1b[33m• Channel:\x1b[0m https://whatsapp.com/channel/0029VaplrGI0gcfJ7mQknX0E');
      console.log('\x1b[33m• Website:\x1b[0m https://www.neolabsofficial.my.id');

      console.log('\n\x1b[36m[ NeoShiroko Labs ]\x1b[0m Bot Starting...\n');
      resolve(); // Resolve promise setelah animasi selesai
    }, 3000); // Efek jalan selama 3 detik
  });
};

let phoneNumber = null
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let db = JSON.parse(fs.readFileSync('./database/set.json'));

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function startneo() {
//------------------------------------------------------
await matrixEffect(); // Jalankan animasi matrix terlebih dahulu

let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const neo = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      browser: Browsers.windows('Firefox'), // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })

   store.bind(neo.ev)

    // login use pairing code
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !neo.authState.creds.registered) {
      if (useMobile) throw new Error('Cannot use pairing code with mobile api')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

    } else {
        console.log(chalk.cyanBright(`\n${chalk.bold('[NEO BOTZ]')} Enter WhatsApp number :`));
        phoneNumber = await question(chalk.cyan(`${chalk.bold('Example:')} +62xxx : `));
    console.log(chalk.green(`\nYour WhatsApp number: ${chalk.bold(phoneNumber)}`));
      setTimeout(async () => {
         let code = await neo.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }
}
    neo.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast' )
            if (!neo.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            const m = smsg(neo, mek, store)
            require("./neo-z")(neo, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    neo.ev.on('messages.upsert', async chatUpdate => {
        try {
        mek = chatUpdate.messages[0];
        if (!mek || !mek.key) return;

        // Auto view status jika aktif
        if (mek.key.remoteJid === 'status@broadcast' && db.settings.autoview) {
            await neo.readMessages([mek.key]);
        }
    } catch (err) {
        console.error('AutoView Error:', err);
    }
});

    neo.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    neo.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = neo.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    neo.getName = (jid, withoutContact = false) => {
        id = neo.decodeJid(jid)
        withoutContact = neo.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = neo.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === neo.decodeJid(neo.user.id) ?
            neo.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    global.selfmode = false
    neo.public = true

    neo.serializeM = (m) => smsg(neo, m, store)

neo.ev.on("connection.update",async  (s) => {
        const { connection, lastDisconnect } = s
        if (connection == "open") {
            console.log(chalk.magenta(`< # > Bot Has Connected!`))
            await loadModule(neo);
        }
        if (
            connection === "close" &&
            lastDisconnect &&
            lastDisconnect.error &&
            lastDisconnect.error.output.statusCode != 401
        ) {
            startneo()
        }
    })
    neo.ev.on('creds.update', saveCreds)
    neo.ev.on("messages.upsert",  () => { })

    neo.sendText = (jid, text, quoted = '', options) => neo.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    neo.sendTextWithMentions = async (jid, text, quoted, options = {}) => neo.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    neo.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await neo.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    neo.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await neo.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    neo.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    neo.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename,
        data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    neo.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await neo.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;
  
  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await neo.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await neo.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

    neo.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    }
return startneo()

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