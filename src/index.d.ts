/**
 * google-maps-sdk TypeScript declarations
 */
export interface GoogleMapsOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class GoogleMaps {
  constructor(options?: GoogleMapsOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default GoogleMaps;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
