const IS_DEV_BUILD = process.env.NODE_ENV == 'development';

export function info(msg: string, ...rest: unknown[]) {
  if (IS_DEV_BUILD) {
    console.log(msg, ...rest);
  }
}

export function warn(msg: string, ...rest: unknown[]) {
  if (IS_DEV_BUILD) {
    console.warn(msg, ...rest);
  }
}

export function error(msg: string, ...rest: unknown[]) {
  if (IS_DEV_BUILD) {
    console.error(msg, ...rest);
  }
}

/**
 * For all special messages meant to be shown on production
 */
export function prodLog(msg: string, ...rest: unknown[]) {
  console.log(msg, ...rest);
}

export default { info, warn, error, prodLog };
