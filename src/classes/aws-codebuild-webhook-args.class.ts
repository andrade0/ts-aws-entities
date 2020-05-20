import { AwsCodebuildWebhookArgsIntterface } from '../interfaces';


export class AwsCodebuildWebhookArgs implements AwsCodebuildWebhookArgsIntterface {
  project_name: string;
  branch_filter?: string;

}
