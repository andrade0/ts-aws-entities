import { AwsGlueCrawlerArgsJdbcTargetIntterface } from '../interfaces';


export class AwsGlueCrawlerArgsJdbcTarget implements AwsGlueCrawlerArgsJdbcTargetIntterface {
  connection_name: string;
  path: string;
  exclusions?: string;

}
