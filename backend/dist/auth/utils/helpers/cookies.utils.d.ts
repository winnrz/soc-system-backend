export declare function setCookie(ctx: any, name: string, value: string, options?: {}): void;
export declare function getCookie(ctx: any, name: string): string | undefined;
export declare function removeCookie(ctx: any, name: string, options?: {
    path?: string;
    domain?: string;
}): void;
