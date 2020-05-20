import { AwsElbArgsAccessLogsIntterface } from '../interfaces';


export class AwsElbArgsAccessLogs implements AwsElbArgsAccessLogsIntterface {
  bucket: string;
  bucket_prefix?: string;
  interval?: string;
  enabled?: boolean;

}
