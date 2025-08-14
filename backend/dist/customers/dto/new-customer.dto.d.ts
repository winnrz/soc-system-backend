import { DataSourceRow } from "src/services/types";
import { ServiceType } from "src/services/types/service.type";
export declare class NewCustomerDto {
    name: string;
    services: ServiceType[];
    dataSource: DataSourceRow[];
}
