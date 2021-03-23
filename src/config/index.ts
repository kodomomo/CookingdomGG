enum Enviroment {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
  LOCAL = "local",
}

interface Config {
  deeplink: string;
  apiHost: string;
}

const config: Record<Enviroment, Config> = {
  [Enviroment.PRODUCTION]: {
    deeplink: "baemin",
    apiHost: "https://api.cookingdom.gg",
  },
  [Enviroment.DEVELOPMENT]: {
    deeplink: "baemin-beta",
    apiHost: "https://api.beta.cookingdom.gg",
  },
  [Enviroment.LOCAL]: {
    deeplink: "baemin-beta",
    apiHost: "https://api.beta.cookingdom.gg",
  },
};

export default config[process.env.NODE_ENV as Enviroment];
