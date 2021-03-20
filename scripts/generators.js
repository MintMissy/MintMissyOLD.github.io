function generateFooter() {
    let generateLocation = document.getElementsByClassName("footer")[0];
    generateLocation.innerHTML = "" +
        "    <p class=\"footerInfo primaryGray text\"><a class=\"link\" href=\"https://www.youtube.com/channel/UCx-6vO4gFYume-eMa_OMJ6w\">YouTube</a></p>\n" +
        "    <p class=\"footerInfo primaryGray text\"><a class=\"link\" href=\"https://www.instagram.com/mint.missy/\">Instagram</a></p>\n" +
        "    <p class=\"footerInfo primaryGray text\"><a class=\"link\" href=\"https://github.com/MintMissy\">Github</a></p>\n" +
        "    <hr class=\"lineFooter\">\n" +
        "    <p class=\"primaryGray text footerCredits\" style=\"text-align: center\">Designed by <a class=\"link\" href=\"https://github.com/MintMissy\">Mint Missy</a></p>"
}

function generateNavbar(siteType, pathToMain) {
    let generateLocation = document.getElementById("navbar");

    generateLocation.innerHTML = "" +
    "    <div class=\"buttonLeft\">\n" +
    "        <div class=\"primaryColor navbarText logoButton\">\n" +
    "            <img id=\"navbarLogo\" src=\"" + pathToMain + "images/logo.svg\" alt=\"logo\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <a href=\"" + pathToMain + "contact.html\">\n" +
    "        <div id=\"contact\" class=\"buttonRight contactButton\">\n" +
    "            <div class=\"primaryColor navbarText textButton\">CONTACT</div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "    <a href=\"" + pathToMain + "about.html\">\n" +
    "        <div id=\"about\" class=\"buttonRight aboutButton\">\n" +
    "            <div class=\"primaryColor navbarText textButton\">ABOUT</div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "    <a href=\"" + pathToMain + "games.html\">\n" +
    "        <div id=\"games\" class=\"buttonRight gamesButton\">\n" +
    "            <div class=\"primaryColor navbarText textButton\">GAMES</div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "    <a href=\"" + pathToMain + "tools.html\">\n" +
    "        <div id=\"tools\" class=\"buttonRight toolsButton\">\n" +
    "            <div class=\"primaryColor navbarText textButton\">TOOLS</div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "\n" +
    "    <a href=\"" + pathToMain + "index.html\">\n" +
    "        <div id=\"home\" class=\"buttonLeft homeButton\">\n" +
    "            <div class=\"primaryColor navbarText textButton\">HOME</div>\n" +
    "        </div>\n" +
    "    </a>\n"

    // Add active site class
    document.getElementById(siteType).classList += " activeSite"
}
