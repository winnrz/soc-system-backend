import { DataSourceService } from './data-source.service';
export declare class DataSourceController {
    private dataSourceService;
    constructor(dataSourceService: DataSourceService);
    updateDataSource(id: string, updateDataSourceDto: any): Promise<{
        message: string;
    }>;
}
