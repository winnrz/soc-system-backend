
export const SERVICES = [
  'alienvault',
  'barracuda',
  'data-source',
  'fortigate',
  'munit',
  'pf-sensor',
  'sentinel-one',
] as const;

export type ServiceType = (typeof SERVICES)[number];
export type NullableServiceType = ServiceType | '';
