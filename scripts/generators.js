function generateFooter() {
    let generateLocation = document.getElementsByClassName("footer")[0];
    generateLocation.innerHTML = "" +
        "    <p class=\"footerInfo primaryGray text\"><a class=\"link\" href=\"https://www.youtube.com/channel/UCx-6vO4gFYume-eMa_OMJ6w\">YouTube</a></p>\n" +
        "    <p class=\"footerInfo primaryGray text\"><a class=\"link\" href=\"https://www.instagram.com/mint.missy/\">Instagram</a></p>\n" +
        "    <p class=\"footerInfo primaryGray text\"><a class=\"link\" href=\"https://github.com/MintMissy\">Github</a></p>\n" +
        "    <hr class=\"lineFooter\">\n" +
        "    <p class=\"primaryGray text footerCredits\" style=\"text-align: center\">Designed by <a class=\"link\" href=\"https://github.com/MintMissy\">Mint Missy</a></p>"
}

function generateNavbar(siteType, pathToPages) {
    let generateLocation = document.getElementById("navbar");

    generateLocation.innerHTML = "" +
    "    <div class=\"buttonLeft\">\n" +
    "        <div class=\"primaryColor navbarText logoButton\">\n" +
    "            <img id=\"navbarLogo\" src=\"" + pathToPages + "../images/newLogo.png\" alt=\"logo\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <a href=\"" + pathToPages + "contact\">\n" +
    "        <div id=\"contact\" class=\"buttonRight contactButton\">\n" +
    "            <div id='contactText' class=\"navbarText textButton\">CONTACT</div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "    <a href=\"" + pathToPages + "about\">\n" +
    "        <div id=\"about\" class=\"buttonRight aboutButton\">\n" +
    "            <div id='aboutText' class=\"navbarText textButton\">ABOUT</div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "    <a href=\"" + pathToPages + "games\">\n" +
    "        <div id=\"games\" class=\"buttonRight gamesButton\">\n" +
    "            <div id='gamesText' class=\"navbarText textButton\">GAMES</div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "    <a href=\"" + pathToPages + "tools\">\n" +
    "        <div id=\"tools\" class=\"buttonRight toolsButton\">\n" +
    "            <div id='toolsText' class=\"navbarText textButton\">TOOLS</div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "    <a href=\"" + pathToPages + "cv\">\n" +
    "        <div id=\"tools\" class=\"buttonRight cvButton\">\n" +
    "            <div id='cvText' class=\"navbarText textButton\">CV</div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "\n" +
    "    <a href=\"" + pathToPages + "../\">\n" +
    "        <div id=\"home\" class=\"buttonLeft homeButton\">\n" +
    "            <div id='homeText' class=\"navbarText textButton homeButton\">HOME</div>\n" +
    "        </div>\n" +
    "    </a>\n"

    // Add active site class
    document.getElementById(siteType).classList += "activeSite"
}
