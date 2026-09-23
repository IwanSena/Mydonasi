/* =========================================================
   CRYPTO DONATION DATA

   EDIT BAGIAN INI SAJA UNTUK MENAMBAHKAN
   / MENGUBAH ALAMAT CRYPTO.
========================================================= */


const stablecoins = [

    {
        name: "USDT",
        network: "TRC20",
        type: "Tether",
        symbol: "$",

        address:
            "MASUKKAN_ALAMAT_USDT_TRC20_DISINI",

        qr:
            "assets/qr/usdt-trc20.png",

        description:
            "USDT pada jaringan TRON",

        memo:
            ""
    },


    {
        name: "USDT",
        network: "ERC20",
        type: "Tether",
        symbol: "$",

        address:
            "MASUKKAN_ALAMAT_USDT_ERC20_DISINI",

        qr:
            "assets/qr/usdt-erc20.png",

        description:
            "USDT pada jaringan Ethereum",

        memo:
            ""
    },


    {
        name: "USDT",
        network: "BEP20",
        type: "Tether",
        symbol: "$",

        address:
            "MASUKKAN_ALAMAT_USDT_BEP20_DISINI",

        qr:
            "assets/qr/usdt-bep20.png",

        description:
            "USDT pada jaringan BNB Smart Chain",

        memo:
            ""
    },


    {
        name: "USDC",
        network: "BEP20",
        type: "USD Coin",
        symbol: "$",

        address:
            "MASUKKAN_ALAMAT_USDC_DISINI",

        qr:
            "assets/qr/usdc-bep20.png",

        description:
            "USDC pada jaringan BNB Smart Chain",

        memo:
            ""
    }

];



const cryptocurrencies = [

    {
        name: "Bitcoin",
        short: "BTC",
        network: "Bitcoin",
        symbol: "₿",

        address:
            "MASUKKAN_ALAMAT_BITCOIN_DISINI",

        qr:
            "assets/qr/btc.png",

        description:
            "Bitcoin network",

        memo:
            ""
    },


    {
        name: "Ethereum",
        short: "ETH",
        network: "Ethereum",
        symbol: "Ξ",

        address:
            "MASUKKAN_ALAMAT_ETHEREUM_DISINI",

        qr:
            "assets/qr/eth.png",

        description:
            "Ethereum network",

        memo:
            ""
    },


    {
        name: "Solana",
        short: "SOL",
        network: "Solana",
        symbol: "S",

        address:
            "MASUKKAN_ALAMAT_SOLANA_DISINI",

        qr:
            "assets/qr/sol.png",

        description:
            "Solana network",

        memo:
            ""
    },


    {
        name: "TRON",
        short: "TRX",
        network: "TRON",
        symbol: "T",

        address:
            "MASUKKAN_ALAMAT_TRON_DISINI",

        qr:
            "assets/qr/trx.png",

        description:
            "TRON network",

        memo:
            ""
    },


    {
        name: "Litecoin",
        short: "LTC",
        network: "Litecoin",
        symbol: "Ł",

        address:
            "MASUKKAN_ALAMAT_LITECOIN_DISINI",

        qr:
            "assets/qr/ltc.png",

        description:
            "Litecoin network",

        memo:
            ""
    },


    {
        name: "Dogecoin",
        short: "DOGE",
        network: "Dogecoin",
        symbol: "Ð",

        address:
            "MASUKKAN_ALAMAT_DOGECOIN_DISINI",

        qr:
            "assets/qr/doge.png",

        description:
            "Dogecoin network",

        memo:
            ""
    },


    {
        name: "XRP",
        short: "XRP",
        network: "XRP Ledger",
        symbol: "X",

        address:
            "MASUKKAN_ALAMAT_XRP_DISINI",

        qr:
            "assets/qr/xrp.png",

        description:
            "XRP Ledger",

        memo:
            "MASUKKAN_DESTINATION_TAG_JIKA_DIPERLUKAN"
    },


    {
        name: "TON",
        short: "TON",
        network: "TON",
        symbol: "T",

        address:
            "MASUKKAN_ALAMAT_TON_DISINI",

        qr:
            "assets/qr/ton.png",

        description:
            "TON network",

        memo:
            ""
    },


    {
        name: "BNB",
        short: "BNB",
        network: "BEP20",
        symbol: "B",

        address:
            "MASUKKAN_ALAMAT_BNB_DISINI",

        qr:
            "assets/qr/bnb.png",

        description:
            "BNB Smart Chain",

        memo:
            ""
    }

];



/* =========================================================
   ELEMENTS
========================================================= */

const stablecoinList =
    document.getElementById(
        "stablecoin-list"
    );

const cryptoList =
    document.getElementById(
        "crypto-list"
    );

const searchInput =
    document.getElementById(
        "cryptoSearch"
    );

const noResults =
    document.getElementById(
        "noResults"
    );


const qrModal =
    document.getElementById(
        "qrModal"
    );

const qrClose =
    document.getElementById(
        "qrClose"
    );

const modalQR =
    document.getElementById(
        "modalQR"
    );

const modalCoinName =
    document.getElementById(
        "modalCoinName"
    );

const modalNetwork =
    document.getElementById(
        "modalNetwork"
    );

const modalAddress =
    document.getElementById(
        "modalAddress"
    );

const modalCopy =
    document.getElementById(
        "modalCopy"
    );


const toast =
    document.getElementById(
        "toast"
    );

const toastText =
    document.getElementById(
        "toastText"
    );



/* =========================================================
   CREATE CARD
========================================================= */

function createCryptoCard(item) {

    const card =
        document.createElement(
            "article"
        );

    card.className =
        "crypto-card";

    card.dataset.search =
        (
            item.name +
            " " +
            item.short +
            " " +
            item.network +
            " " +
            item.type
        ).toLowerCase();


    const qrHTML =
        item.qr
            ? `
                <img
                    src="${item.qr}"
                    alt="QR ${item.name} ${item.network}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                        this.nextElementSibling.style.display='grid';
                    "
                >

                <div
                    class="qr-placeholder"
                    style="display:none"
                >
                    QR Code belum ditambahkan
                </div>
              `
            : `
                <div class="qr-placeholder">
                    QR Code belum ditambahkan
                </div>
              `;


    const memoHTML =
        item.memo
            ? `
                <div class="memo">
                    Memo / Tag:
                    <strong>
                        ${item.memo}
                    </strong>
                </div>
              `
            : "";


    card.innerHTML = `

        <div class="crypto-top">

            <div class="crypto-name">

                <div class="crypto-logo">
                    ${item.symbol}
                </div>

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <span>
                        ${item.type || item.short}
                    </span>

                </div>

            </div>

            <span class="network">
                ${item.network}
            </span>

        </div>


        <div class="crypto-qr">
            ${qrHTML}
        </div>


        <span class="address-label">
            Donation Address
        </span>


        <div class="address">
            ${item.address}
        </div>


        ${memoHTML}


        <div class="crypto-actions">

            <button
                class="copy-btn"
                data-address="${encodeURIComponent(item.address)}"
            >
                ⧉ &nbsp; Salin
            </button>


            <button
                class="qr-btn"
                data-name="${encodeURIComponent(item.name)}"
                data-network="${encodeURIComponent(item.network)}"
                data-address="${encodeURIComponent(item.address)}"
                data-qr="${encodeURIComponent(item.qr || "")}"
            >
                ▣ &nbsp; Lihat QR
            </button>

        </div>

    `;


    return card;
}



/* =========================================================
   RENDER
========================================================= */

function renderDonationLists() {

    stablecoinList.innerHTML = "";

    cryptoList.innerHTML = "";


    stablecoins.forEach(
        item => {

            stablecoinList.appendChild(
                createCryptoCard(item)
            );

        }
    );


    cryptocurrencies.forEach(
        item => {

            cryptoList.appendChild(
                createCryptoCard(item)
            );

        }
    );

}


renderDonationLists();



/* =========================================================
   COPY ADDRESS
========================================================= */

document.addEventListener(
    "click",
    async function(event) {

        const button =
            event.target.closest(
                ".copy-btn"
            );


        if (!button) {
            return;
        }


        const address =
            decodeURIComponent(
                button.dataset.address
            );


        try {

            await navigator.clipboard.writeText(
                address
            );


            showToast(
                "Alamat berhasil disalin."
            );


        } catch (error) {

            fallbackCopy(
                address
            );

        }

    }
);



function fallbackCopy(text) {

    const textarea =
        document.createElement(
            "textarea"
        );

    textarea.value = text;

    textarea.style.position =
        "fixed";

    textarea.style.opacity =
        "0";

    document.body.appendChild(
        textarea
    );

    textarea.select();

    document.execCommand(
        "copy"
    );

    textarea.remove();


    showToast(
        "Alamat berhasil disalin."
    );

}



/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    function() {

        const query =
            this.value
                .trim()
                .toLowerCase();


        const cards =
            document.querySelectorAll(
                ".crypto-card"
            );


        let visible =
            0;


        cards.forEach(
            card => {

                const content =
                    card.dataset.search;


                if (
                    content.includes(
                        query
                    )
                ) {

                    card.style.display =
                        "";

                    visible++;

                } else {

                    card.style.display =
                        "none";

                }

            }
        );


        noResults.style.display =
            visible === 0
                ? "block"
                : "none";

    }
);



/* =========================================================
   QR MODAL
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".qr-btn"
            );


        if (!button) {
            return;
        }


        const name =
            decodeURIComponent(
                button.dataset.name
            );

        const network =
            decodeURIComponent(
                button.dataset.network
            );

        const address =
            decodeURIComponent(
                button.dataset.address
            );

        const qr =
            decodeURIComponent(
                button.dataset.qr
            );


        modalCoinName.textContent =
            name;

        modalNetwork.textContent =
            network;

        modalAddress.textContent =
            address;


        if (qr) {

            modalQR.src =
                qr;

            modalQR.style.display =
                "block";

        } else {

            modalQR.removeAttribute(
                "src"
            );

        }


        qrModal.classList.add(
            "active"
        );

        qrModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";


        modalCopy.onclick =
            async function() {

                try {

                    await navigator.clipboard.writeText(
                        address
                    );

                    showToast(
                        "Alamat berhasil disalin."
                    );

                } catch {

                    fallbackCopy(
                        address
                    );

                }

            };

    }
);



/* =========================================================
   CLOSE MODAL
========================================================= */

function closeQRModal() {

    qrModal.classList.remove(
        "active"
    );

    qrModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


qrClose.addEventListener(
    "click",
    closeQRModal
);


document.querySelector(
    ".qr-overlay"
).addEventListener(
    "click",
    closeQRModal
);


document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeQRModal();

        }

    }
);



/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    toastText.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            function() {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}
