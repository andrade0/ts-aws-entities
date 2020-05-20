import { AwsCloudwatchLogDestinationArgsIntterface } from '../interfaces';


export class AwsCloudwatchLogDestinationArgs implements AwsCloudwatchLogDestinationArgsIntterface {
  name: string;
  role_arn: string;
  target_arn: string;

}
