import { AwsLbArgsAccessLogsIntterface } from '../interfaces';


export class AwsLbArgsAccessLogs implements AwsLbArgsAccessLogsIntterface {
  bucket: string;
  prefix?: string;
  enabled?: boolean;

}
