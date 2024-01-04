import {config as sharedConfig} from 'webdriverio-framework';
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities:[{
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [ 'disable-gpu']
            }
        }]
    }
}