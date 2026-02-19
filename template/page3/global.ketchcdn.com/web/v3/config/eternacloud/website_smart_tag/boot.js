! function() {
    function getCspNonce() {
        if (document.currentScript && document.currentScript.nonce) return document.currentScript.nonce;
        var e = document.querySelector('script[nonce]');
        if (e && e.nonce) return e.nonce;
        var t = document.querySelector('meta[name="csp-nonce"]');
        return t ? t.content : null
    }

    function appendScript(e, t) {
        var n = document.createElement("script");
        n.type = "text/javascript", n.defer = n.async = !0;
        var r = getCspNonce();
        r && (n.nonce = r);
        if ("string" == typeof e) n.src = e;
        else if (e.textContent) n.textContent = e.textContent;
        t && (t.async && (n.async = t.async), t.defer && (n.defer = t.defer));
        return document.getElementsByTagName("head")[0].appendChild(n), n
    }
    var e = {
        "organization": {
            "code": "eternacloud"
        },
        "environments": [{
            "code": "production",
            "pattern": "Lio=",
            "hash": "4581661445807209091"
        }],
        "identities": {
            "swb_website_smart_tag": {
                "type": "managedCookie",
                "variable": "_swb"
            }
        },
        "scripts": ["https://cdn.ketchjs.com/ketchtag/stable/v2.12/ketch-sdk.js"],
        "languages": [{
            "code": "en",
            "englishName": "English",
            "nativeName": "English"
        }],
        "services": {
            "gvlHost": "https://global.ketchcdn.com/gvl/eu",
            "portholeHost": "https://eternacloud.privacyportal.co",
            "scriptHost": "https://cdn.ketchjs.com",
            "shoreline": "https://global.ketchcdn.com/web/v3",
            "telemetry": "https://global.ketchcdn.com/web/v2/log"
        },
        "options": {
            "appDivs": "hubspot-messages-iframe-container",
            "beaconPercentage": "1"
        },
        "property": {
            "code": "website_smart_tag",
            "name": "Website Smart Tag",
            "platform": "WEB"
        },
        "jurisdiction": {
            "defaultScopeCode": "default",
            "scopes": {
                "AT": "gdpr",
                "BE": "gdpr",
                "BG": "gdpr",
                "CH": "gdpr",
                "CY": "gdpr",
                "CZ": "gdpr",
                "DE": "gdpr",
                "DK": "gdpr",
                "EE": "gdpr",
                "ES": "gdpr",
                "FI": "gdpr",
                "FO": "gdpr",
                "FR": "gdpr",
                "GB": "gdpr",
                "GF": "gdpr",
                "GG": "gdpr",
                "GP": "gdpr",
                "GR": "gdpr",
                "HR": "gdpr",
                "HU": "gdpr",
                "IE": "gdpr",
                "IM": "gdpr",
                "IS": "gdpr",
                "IT": "gdpr",
                "JE": "gdpr",
                "LI": "gdpr",
                "LT": "gdpr",
                "LU": "gdpr",
                "LV": "gdpr",
                "MF": "gdpr",
                "MQ": "gdpr",
                "MT": "gdpr",
                "NL": "gdpr",
                "NO": "gdpr",
                "PL": "gdpr",
                "PT": "gdpr",
                "RE": "gdpr",
                "RO": "gdpr",
                "SE": "gdpr",
                "SI": "gdpr",
                "SJ": "gdpr",
                "SK": "gdpr",
                "US-CA": "US_California",
                "US-CO": "US_Colorado",
                "US-CT": "US_Connecticut",
                "US-OR": "US_Oregon",
                "US-TX": "US_Texas",
                "US-UT": "US_Utah",
                "US-VA": "US_Virginia",
                "YT": "gdpr"
            },
            "defaultJurisdictionCode": "default",
            "jurisdictions": {
                "AT": "gdpr",
                "BE": "gdpr",
                "BG": "gdpr",
                "CH": "gdpr",
                "CY": "gdpr",
                "CZ": "gdpr",
                "DE": "gdpr",
                "DK": "gdpr",
                "EE": "gdpr",
                "ES": "gdpr",
                "FI": "gdpr",
                "FO": "gdpr",
                "FR": "gdpr",
                "GB": "gdpr",
                "GF": "gdpr",
                "GG": "gdpr",
                "GP": "gdpr",
                "GR": "gdpr",
                "HR": "gdpr",
                "HU": "gdpr",
                "IE": "gdpr",
                "IM": "gdpr",
                "IS": "gdpr",
                "IT": "gdpr",
                "JE": "gdpr",
                "LI": "gdpr",
                "LT": "gdpr",
                "LU": "gdpr",
                "LV": "gdpr",
                "MF": "gdpr",
                "MQ": "gdpr",
                "MT": "gdpr",
                "NL": "gdpr",
                "NO": "gdpr",
                "PL": "gdpr",
                "PT": "gdpr",
                "RE": "gdpr",
                "RO": "gdpr",
                "SE": "gdpr",
                "SI": "gdpr",
                "SJ": "gdpr",
                "SK": "gdpr",
                "US-CA": "US_California",
                "US-CO": "US_Colorado",
                "US-CT": "US_Connecticut",
                "US-OR": "US_Oregon",
                "US-TX": "US_Texas",
                "US-UT": "US_Utah",
                "US-VA": "US_Virginia",
                "YT": "gdpr"
            }
        }
    };
    window.semaphore = window.semaphore || [], window.ketch = function() {
        window.semaphore.push(arguments)
    }, window.semaphore.unshift(["init", e]);
    for (var n = document.getElementsByTagName("head")[0], t = 0; t < e.scripts.length; t++) {
        appendScript(e.scripts[t])
    }
}();