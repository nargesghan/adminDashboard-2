import createCache from "@emotion/cache";

export default function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}
//ensures that Emotion’s default settings will be replaced with our custom styles and
// that this information will be configured both on the client and server sides
