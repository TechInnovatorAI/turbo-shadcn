import { cache } from "react";

import { cookies, headers } from "next/headers";

import {
  initializeServerI18n,
  parseAcceptLanguageHeader,
} from "@repo/i18n/server";

import {
  I18N_COOKIE_NAME,
  getI18nSettings,
  languages,
} from "~/lib/i18n/i18n.settings";

import { i18nResolver } from "./i18n.resolver";
import { getI18n } from "react-i18next";

/**
 * @name createI18nServerInstance
 * @description Creates an instance of the i18n server.
 * It uses the language from the cookie if it exists, otherwise it uses the language from the accept-language header.
 * If neither is available, it will default to the provided environment variable.
 *
 * Initialize the i18n instance for every RSC server request (eg. each page/layout)
 */
const createInstance: Function = () => {
  const cookie = cookies().get(I18N_COOKIE_NAME)?.value || "en";

  let selectedLanguage: string | undefined = undefined;

  // if the cookie is set, use the language from the cookie
  if (cookie) {
    selectedLanguage = getLanguageOrFallback(cookie);
  }

  // if (!selectedLanguage && priority === 'user') {
  //   const userPreferredLanguage = getPreferredLanguageFromBrowser();

  //   selectedLanguage = getLanguageOrFallback(userPreferredLanguage);
  // }

  const settings = getI18nSettings(selectedLanguage);

  return initializeServerI18n(settings, i18nResolver);
};

export const createI18nServerInstance = cache(createInstance);

function getPreferredLanguageFromBrowser() {
  const acceptLanguage = headers().get("accept-language");

  if (!acceptLanguage) {
    return;
  }

  return parseAcceptLanguageHeader(acceptLanguage, languages)[0];
}

function getLanguageOrFallback(language: string | undefined) {
  let selectedLanguage = language;

  if (!languages.includes(language ?? "")) {
    console.warn(
      `Language "${language}" is not supported. Falling back to "${languages[0]}"`,
    );

    selectedLanguage = languages[0];
  }

  return selectedLanguage;
}
