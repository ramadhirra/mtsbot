export const officialAPIEndpoint = 'https://api.aigcfun.com/api/v1/text?key=FCAW3STZXEVXDUJUL8';
const customAPIEndpoint =
  import.meta.env.VITE_CUSTOM_API_ENDPOINT || 'https://api.aigcfun.com/api/v1/text?key=FCAW3STZXEVXDUJUL8';
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

export const availableEndpoints = [officialAPIEndpoint, customAPIEndpoint];
