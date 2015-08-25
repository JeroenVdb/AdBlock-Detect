# Detect if a user is using an AdBlocker

I like this approach for detecting an AdBlocker because it doesn't involve making fake 'ads.js' requests.

### Compatibility

| Browser | Compatible |
| ------- | ---------- |
| Chrome 44 + uBlock | OK |
| Chrome 44 + AdBlock | OK |
| Chrome 44 + AdBlock Plus | OK |
| Firefox + AdBlock | ? |

### Blocklist compatibility

We check for id=adsense, this element should also be targetten (removed, hidden) by the AdBlockers

| List | Compatible | url |
| ---- | ---------- | --- |
| EasyList + Dutch | OK | https://easylist-downloads.adblockplus.org/easylistdutch+easylist.txt |

### Resources

- http://stackoverflow.com/questions/4869154/how-to-detect-adblock-on-my-website#answer-15093375
- http://marthijnhoiting.com/track-the-use-of-adblock-in-google-analytics/#
