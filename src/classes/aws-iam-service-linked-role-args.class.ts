import { AwsIamServiceLinkedRoleArgsIntterface } from '../interfaces';


export class AwsIamServiceLinkedRoleArgs implements AwsIamServiceLinkedRoleArgsIntterface {
  aws_service_name: string;
  custom_suffix: string;
  description?: string;

}
