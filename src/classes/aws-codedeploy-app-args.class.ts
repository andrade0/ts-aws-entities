import { AwsCodedeployAppArgsIntterface } from '../interfaces';


export class AwsCodedeployAppArgs implements AwsCodedeployAppArgsIntterface {
  name: string;
  compute_platform?: string;
  id: string;

}
