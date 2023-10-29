export function getHash(): string {
  const url = new URL(window.location.href);

  url.searchParams.delete('service');

  const index =
    url.search.indexOf('&tgWebAppPlatform') === -1
      ? url.search.length
      : url.search.indexOf('&tgWebAppPlatform');

  const currentString = url.search.slice(1, index);

  return window.Telegram.WebApp.initData === ''
    ? currentString
    : window.Telegram.WebApp.initData;
}

export function getQueryParam(name: string, str?: string) {
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(str ?? window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function decodeURIWithoutSlash(str: string) {
  const unicodeXMass = str.replaceAll('u', '|0x').split('|');

  return unicodeXMass
    .map((item) => {
      if (item.indexOf('0x') === 0) {
        let text = '';

        try {
          const code = Number(item.slice(0, 6));

          text = String.fromCodePoint(code) + item.slice(6, item.length);
        } catch (e) {
          text = item;
        }

        return text;
      }
      return item;
    })
    .join('');
}
