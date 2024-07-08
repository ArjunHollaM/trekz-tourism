import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'e987ffd4-3463-4579-9bb4-231395cc8ba0',
    clientToken: 'pub56e8d69ab66fa9c70e7a3805efa20da0',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'us5.datadoghq.com',
    service: 'trekz',
    env: 'dev',
    // Specify a version number to identify the deployed version of your application in Datadog
    version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 50,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});