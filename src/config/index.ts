enum Environment {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  LOCAL = 'local',
}

interface Config {
  apiHost: string;
  imageUrl: string;
}

const config: Record<Environment, Config> = {
  [Environment.PRODUCTION]: {
    apiHost: 'http://52.79.226.78:8080',
    imageUrl: 'https://codomo.s3.ap-northeast-2.amazonaws.com/static/image/',
  },
  [Environment.DEVELOPMENT]: {
    apiHost: 'http://52.79.226.78:8080',
    imageUrl: 'https://codomo.s3.ap-northeast-2.amazonaws.com/static/image/',
  },
  [Environment.LOCAL]: {
    apiHost: 'http://52.79.226.78:8080',
    imageUrl: 'https://codomo.s3.ap-northeast-2.amazonaws.com/static/image/',
  },
};

export default config[process.env.NODE_ENV as Environment];
