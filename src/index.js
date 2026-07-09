/**
 * google-maps-sdk · sovereign wrapper for Google Maps
 * Maps
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://developers.google.com/maps/documentation
 * Homepage: https://developers.google.com/maps
 */

export class GoogleMaps {
  constructor({ apiKey, baseURL = 'https://developers.google.com/maps', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://developers.google.com/maps/documentation. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('google-maps ' + res.status);
    return res.json();
  }
}

export default GoogleMaps;

// Metadata
export const meta = {
  "name": "Google Maps",
  "category": "Maps",
  "homepage": "https://developers.google.com/maps",
  "docs_url": "https://developers.google.com/maps/documentation",
  "endpoints_count": 0
};
