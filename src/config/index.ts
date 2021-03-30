enum Enviroment {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  LOCAL = 'local',
}

interface Config {
  apiHost: string;
}

const config: Record<Enviroment, Config> = {
  [Enviroment.PRODUCTION]: {
    apiHost: 'http://52.79.226.78:8080',
  },
  [Enviroment.DEVELOPMENT]: {
    apiHost: 'http://52.79.226.78:8080',
  },
  [Enviroment.LOCAL]: {
    apiHost: 'http://52.79.226.78:8080',
  },
};

export default config[process.env.NODE_ENV as Enviroment];
