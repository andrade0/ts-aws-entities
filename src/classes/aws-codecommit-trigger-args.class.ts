import { AwsCodecommitTriggerArgsIntterface } from '../interfaces';


export class AwsCodecommitTriggerArgs implements AwsCodecommitTriggerArgsIntterface {
  repository_name: string;
  name: string;
  destination_arn: string;
  custom_data?: string;
  branches?: string;
  events: string;

}
