
<p align="center"><img style="height: 200px;" src="https://repository-images.githubusercontent.com/705000958/1b47c336-f552-487c-8455-8c28518fc69c"> </p>


# 🐺 Logger++
Logger++ is a **powerful** *Open Source* Discord *IP Grabber*. <br>
Where **you** can trick your Target into clicking a link for **their** ip.

Logger++ is made possible using [**Vercel**](https://vercel.com/), [**Github**](https://github.com), [**NodeJS**](https://nodejs.org/), & [**Discord**](https://discord.com/).

*Logger++ has moved to node.js if you want the **old** python version* [***CLICK HERE***](https://github.com/Cartxrr/LoggerPlusPlus/tree/ae64c61185f1f18c170ba9fec5d592e2006c26db).

# 🍎 Table of Contents

* [**Introduction to Logger++**](#-logger)
* [**Table of Contents**](#-table-of-contents)
* [**Contributors**](#-contributors)
* [**Documentation**](#-documentation)
    - [**Settings**](#-settings)
    - [**Creating a Webhook**](#-creating-a-webhook)
    - [**Hosting**](#-hosting)
* [**Info**](#-info)

# ❤ Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

# 📜 Documentation
Logger++ has settings you can select and this will teach what each one does
+ ## 🔧 Settings  
    ```json
    "webhookurl": "WEBHOOK_URL",
    ```
    > String/Url - Required

    The Discord Webhook Url in which the data will be sent through

    **Q: How do I set this up?**<br>
        A: If you [**Click Here**](#-creating-a-webhook) it will give you a tutorial on how to set up the webhook in Discord.
    <br><br>

    ```json
    "imageurl": "IMAGE_URL",
    ```
    > String/Url - Required 
    
    The Image's URL in which will show

    **Q: Whats Image logger?**<br>
        A: Image logger makes it where when they go to the link is it will show an image. You can make this Image logger work better with the corrupted image option as they will have to click the link to see the image. Try to trick your target into to control/ctrl + middle clicking the image.
        <br><br>

    ```json
    "corruptedimage": false
    ```
    > Boolean - Required 
    
    Enables Corrupted Image Preview in Discord

    **Q: What does corrupted image do?**<br>
        A: The corrupted image will make it where in discord the preview/embed that will so up for the image will never load and if it does load it will show an error so if a person wants to see the image they have to open the image/middle click it.
        <br><br>





+ ## 🆕 Creating a  Webhook
    To make a Webhook you will want to follow these steps in [**Discord**](https://discord.com/).

    1. Make a Discord server.
    2. Open your server's settings and go to the integrations tab.
    3. Click the "Create Webhook" button. <img height=250 src="https://support.discord.com/hc/article_attachments/1500000463501/Screen_Shot_2020-12-15_at_4.41.53_PM.png">
    4. Now you have a webhook! <img height=200 src="https://support.discord.com/hc/article_attachments/360101553853/Screen_Shot_2020-12-15_at_4.51.38_PM.png">

+ ## 🕸 Hosting
    To host this logger we will be using Vercel and Github

    Steps:
    1. Make sure you have a Github and Vercel account
    2. Download this repo using git or githubs visual downloader.
    3. Make a github **PRIVATE** repo name it whatever you want your website to be called. (**Ex: filely or imagehosting**)
    4. press upload an existing file.
    8. Now drag all files into the repo.
    9. Go to Vercel and make a new project.
    10. Pick your github repo. then press import. then deploy.
    11. it should show you your website url go it it and add and whatever you want (**Ex: hotdog.png or bbc.jpg**).
    12. send it to target and boom. **(Also if you go to it yourself you will get your ip)**.

# ℹ Info

I do not condone using this as it breaks Discord's TOS.
also if you want to make videos using this go ahead just add a link to the description please.

**Please consider giving this repo a star 🌟**

Logo ig:
```
       __                                        
      / /  ___   __ _  __ _  ___ _ __  _     _   
     / /  / _ \ / _` |/ _` |/ _ \ '__|| |_ _| |_ 
    / /__| (_) | (_| | (_| |  __/ | |_   _|_   _|
    \____/\___/ \__, |\__, |\___|_|   |_|   |_|  
                |___/ |___/                              
```
