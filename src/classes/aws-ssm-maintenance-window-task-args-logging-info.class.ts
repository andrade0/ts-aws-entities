import { AwsSsmMaintenanceWindowTaskArgsLoggingInfoIntterface } from '../interfaces';


export class AwsSsmMaintenanceWindowTaskArgsLoggingInfo implements AwsSsmMaintenanceWindowTaskArgsLoggingInfoIntterface {
  	s3_bucket_name: string;
	s3_region: string;
	s3_bucket_prefix?: string;

}
