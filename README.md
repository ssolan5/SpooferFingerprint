# Spooferfingerprint

# List of websites or types of websites that tend towards doing fingerprinting 

a.Ecommerce for online shopping and services
b.Ad-powered free services like search and e-mail
c.Advertisers and big personal data sellers
d.Operating systems including extreme levels of tracking built-in to Windows 10,
e.News content from online newspapers and blogs
f.Entertainment, gossip, videos, and stories
g.Services such as restaurant delivery and groceries
h.Hospitality and travel including hotel websites, travel agencies, and airlines
i.Social networks, especially the most popular (Facebook, Instagram, Twitter)
j.Internet Services including web hosting, build your own websites, and shopping cart software
k.Mobile games, apps, and smart phone targeted content


# Values that most fingerprinting companies forget to spoof ----

Screen values that most companies forget to spoof ----

screen.deviceXDPI, screen.deviceYDPI, screen.logicalYDPI, screen.fontSmoothingEnabled, screen.bufferDepth, document.documentElement.clientWidth, document.body.clientWidth, window.outerHeight, SomeRandomCreatedElement.offsetWidth, document.body.scrollLeft 

Browser Language Values ---

navigator.systemLanguage
navigator.browserLanguage
navigator.userLanguage.


Most fingerprinting websites have checks for new Date(), Intl.DateTimeFormat(), new Date().toLocaleString(), new Date().toLocaleFormat() but there are plenty of methods being used to check for the real date and time even if those properties are spoofed, which has been observed to include:


getTimezoneOffset, jan.getTimezoneOffset(this.getFullYear(), 0, 1);
Date.prototype.toNDJSON,
this.getUTCFullYear, this.getUTCMonth, this.getUTCDate, this.getUTCHours, this.getUTCMinutes, this.getUTCSeconds, this.getFullYear
((new Date).getTime,
Date.now,
Math.random().toString(36).substr(2,16)+a.getTime().toString(36)}
b-A.time,
pos:G,time:h, gmtHours–;timestamp instanceof Date
f(“time-local”,a.toLocaleString(), time-tz-dst-active, time-tz-fixed-locale-string, time-tz-has-dst


# Details on Glyph Fingerprinting

Font fingerprint spoofing can be fooled by something in the industry people call "Glyph fingerprinting" which is harder to protect against, font white lists are also used.



# Script Detected on Mastercard ---

Unique way to detect if you are using a proxy by tricking your browser, used by MasterCard
Appears to purposely try to load a non-existent fake url to an image via a random port over Ajax with the ability to determine if the browser is a proxy or real IP based on measuring the ping time for loading this fake image.var url = document.location.protocol+”//”+ ip + “:” + getRandomPort() + ‘/NonExistentImage’ + getRandomPort() + ‘.gif’;
ProxyCollector.doAjaxViaImage(returnFunction, url);
request = new window.XDomainRequest();
_timer = new Timer();
request.open(“GET”, url, true);
request.send();
ProxyCollector.doAjaxViaImage(returnFunction, url);
ProxyCollector.doAjax(ProxyCollector.externalIP, ProxyCollector.setExternalPingTime);



# Some Helpful Links and Notes --- 


1. https://stackoverflow.com/questions/24963729/find-javascript-that-is-changing-dom-element
2. https://github.com/faisalman/ua-parser-js
3. https://developers.whatismybrowser.com/useragents/explore/operating_system_name/android/
4. Moment Timezone uses the Internationalization API (Intl.DateTimeFormat().resolvedOptions().timeZone) in supported browsers to determine the user's time zone.
5. https://nullprogram.com/blog/2013/03/24/
6. https://stackoverflow.com/questions/34518065/why-is-window-top-location-working-in-iframes
