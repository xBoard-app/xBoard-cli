declare namespace DockerCompose {
  export interface Build {
    context: string;
    target: string;
  }

  export interface Service {
    image: string;
    networks: string[];
    build: Build;
    depends_on?: string[];
    ports: string[];
  }

  export interface Environment {
    NODE_ENV: string;
  }

  export interface Services {
    [key: string]: Service;
  }

  export interface Networks {
    [key: string]: any;
  }

  export interface RootObject {
    version: string;
    services: Services;
    networks: Networks;
  }
}
