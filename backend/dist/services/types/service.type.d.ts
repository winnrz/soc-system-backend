export declare const SERVICES: readonly ["alienvault", "barracuda", "data-source", "fortigate", "munit", "pf-sensor", "sentinel-one"];
export type ServiceType = (typeof SERVICES)[number];
export type NullableServiceType = ServiceType | '';
