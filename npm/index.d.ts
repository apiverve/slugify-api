declare module '@apiverve/slugify' {
  export interface slugifyOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface slugifyResponse {
    status: string;
    error: string | null;
    data: SlugifyData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SlugifyData {
      original:  null | string;
      slug:      null | string;
      separator: null | string;
      lowercase: boolean | null;
      length:    number | null;
  }

  export default class slugifyWrapper {
    constructor(options: slugifyOptions);

    execute(callback: (error: any, data: slugifyResponse | null) => void): Promise<slugifyResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: slugifyResponse | null) => void): Promise<slugifyResponse>;
    execute(query?: Record<string, any>): Promise<slugifyResponse>;
  }
}
