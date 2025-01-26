const axios = require('axios');
const {cmd , commands} = require('../command')



cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*👨‍💻𝗞𝗔𝗩𝗜-𝗘𝗫𝗘-V1👨‍💻*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: 𝙺𝙰𝚅𝙸-𝙴𝚇𝙴*
*⚡ɴᴜᴍʙᴇʀ* -: https://wa.me/+94760383959?text=_𝑯𝒆𝒚𝒚_BOT_Owner_*
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:https://whatsapp.com/channel/0029Vb22FT9HFxOzBtWOwT0X*


> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚅𝙸-𝙴𝚇𝙴*
`
await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/yx48zh.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
});

cmd({
    pattern: "repo",
    desc: "repo the bot",
    react: "📡",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*📍ℝ𝔼ℙ𝕆-𝕃𝕀ℕ𝕂 ❤️‍🔥👇*

👨‍💻 https://github.com/Baymaxff/KAVI-EXE


*📍ℙ𝕃𝔼𝔸𝕊𝔼 𝔽𝕆𝕃𝕃𝕆𝕎 𝕄𝕐 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ ℂℍ𝔸ℕℕ𝔼𝕃 ❤️‍🔥👇*

👨‍💻◦ https://whatsapp.com/channel/0029Vb22FT9HFxOzBtWOwT0X

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚅𝙸-𝙰𝙴𝚇𝙴*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/bzr9d2.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
});

cmd({
    pattern: "quote",
    desc: "Get a random inspiring quote.",
    category: "fun",
    react: "馃挰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        const quote = response.data;
        const message = `
馃挰 "${quote.content}"
- ${quote.author}
饾悘饾悗饾悥饾悇饾悜饾悇饾悆 饾悂饾悩 饾悞饾悁饾悋饾悁饾悞-饾悓饾悆 饾悙饾悢饾悗饾悡饾悇饾悞
        `;
        return reply(message);
    } catch (e) {
        console.error("Error fetching quote:", e);
        reply("垄蟽蠀鈩撯垈 畏蟽褌 茠褦褌垄薪 伪 q蠀蟽褌褦. 蟻鈩撗斘毖曆� 褌褟褍 伪g伪喂畏 鈩撐毖傃斞�.");
    }
});

cmd({
    pattern: "news",
    desc: "Get the latest news headlines.",
    category: "news",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const apiKey="0f2c43ab11324578a7b1709651736382";
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const articles = response.data.articles;

        if (!articles.length) return reply("No news articles found.");

        // Send each article as a separate message with image and title
        for (let i = 0; i < Math.min(articles.length, 5); i++) {
            const article = articles[i];
            let message = `
📰 *${article.title}*
⚠️ _${article.description}_
🔗 _${article.url}_

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ NADUWA*
            `;

            console.log('Article URL:', article.urlToImage); // Log image URL for debugging

            if (article.urlToImage) {
                // Send image with caption
                await conn.sendMessage(from, { image: { url: article.urlToImage }, caption: message });
            } else {
                // Send text message if no image is available
                await conn.sendMessage(from, { text: message });
            }
        };
    } catch (e) {
        console.error("Error fetching news:", e);
        reply("Could not fetch news. Please try again later.");
    }
});



