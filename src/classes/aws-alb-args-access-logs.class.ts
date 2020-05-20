import { AwsAlbArgsAccessLogsIntterface } from '../interfaces';


export class AwsAlbArgsAccessLogs implements AwsAlbArgsAccessLogsIntterface {
  bucket: string;
  prefix?: string;
  enabled?: boolean;

}
