import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Ayangnya Hu Tao\nNICKNAME: Ayangnya Hu Tao\nORG: Ayangnya Hu Tao\nTITLE:\nitem1.TEL;waid=62887435530429:+62 887-4355-30429\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://kobomd.cyclic.app/\nitem2.EMAIL;type=INTERNET: kobobotmd@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
}
const _0xba6034=_0x3807;function _0x3807(_0xb2adfc,_0x5978b9){const _0x1c7dca=_0x1c7d();return _0x3807=function(_0x38072d,_0x548100){_0x38072d=_0x38072d-0x10b;let _0xb0cd8c=_0x1c7dca[_0x38072d];return _0xb0cd8c;},_0x3807(_0xb2adfc,_0x5978b9);}(function(_0x5390af,_0x303b2f){const _0x1b0ea5=_0x3807,_0x3bf972=_0x5390af();while(!![]){try{const _0x2bf40f=-parseInt(_0x1b0ea5(0x10f))/0x1*(parseInt(_0x1b0ea5(0x119))/0x2)+parseInt(_0x1b0ea5(0x111))/0x3+parseInt(_0x1b0ea5(0x110))/0x4+parseInt(_0x1b0ea5(0x113))/0x5+parseInt(_0x1b0ea5(0x10b))/0x6*(-parseInt(_0x1b0ea5(0x118))/0x7)+-parseInt(_0x1b0ea5(0x10e))/0x8*(parseInt(_0x1b0ea5(0x112))/0x9)+-parseInt(_0x1b0ea5(0x11a))/0xa*(parseInt(_0x1b0ea5(0x10d))/0xb);if(_0x2bf40f===_0x303b2f)break;else _0x3bf972['push'](_0x3bf972['shift']());}catch(_0x354059){_0x3bf972['push'](_0x3bf972['shift']());}}}(_0x1c7d,0xb8888));if(command==_0xba6034(0x117)){let vcard=_0xba6034(0x10c);const tag_own=await conn['sendMessage'](m[_0xba6034(0x114)],{'contacts':{'displayName':wm,'contacts':[{'vcard':vcard}]}},{'quoted':fkontak});}if(command==_0xba6034(0x116)){let vcard=_0xba6034(0x10c);const tag_own=await conn[_0xba6034(0x115)](m[_0xba6034(0x114)],{'contacts':{'displayName':wm,'contacts':[{'vcard':vcard}]}},{'quoted':fkontak});}function _0x1c7d(){const _0x2bb466=['470240NIippd','44754NoWqHy','BEGIN:VCARD\x0aVERSION:3.0\x0aN:WhatsApp;\x20Zeltoria\x0aNICKNAME:\x20Zeltoria\x0aORG:\x20Zeltoria\x0aTITLE:\x0aitem1.TEL;waid=6285760451683:+62\x20857\x206045\x201683\x0aitem1.X-ABLabel:\x20Nomor\x20Owner\x0aitem2.URL:https://www.zeltoria.my.id\x0aitem2.EMAIL;type=INTERNET:\x20elistz21@gmail.com\x0aitem2.X-ABLabel:\x0aitem4.ADR:;;🇮🇩\x20Indonesia;;;;\x0aEND:VCARD','55IhqFIO','4701488SdlwHP','26734ZfbOay','3070216ZlNGqc','2128902rOcgbr','18ypmJZN','7420815ApUZiL','chat','sendMessage','pengembang','creator','721oDQeEp','2yBDjxD'];_0x1c7d=function(){return _0x2bb466;};return _0x1c7d();}
}
handler.help = ['owner', 'creator','pengembang']
handler.tags = ['info','main']

handler.command = /^(owner|creator|pengembang)$/i

export default handler