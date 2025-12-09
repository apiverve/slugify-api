declare module '@apiverve/slugify' {
  export interface slugifyOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface slugifyResponse {
    status: string;
    error: string | null;
    data: SlugifyData;
    code?: number;
  }


  interface SlugifyData {
      original:  string;
      slug:      string;
      separator: string;
      lowercase: boolean;
  }

  export default class slugifyWrapper {
    constructor(options: slugifyOptions);

    execute(callback: (error: any, data: slugifyResponse | null) => void): Promise<slugifyResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: slugifyResponse | null) => void): Promise<slugifyResponse>;
    execute(query?: Record<string, any>): Promise<slugifyResponse>;
  }
}
