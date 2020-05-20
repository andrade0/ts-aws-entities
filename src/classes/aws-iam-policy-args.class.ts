import { AwsIamPolicyArgsIntterface } from '../interfaces';


export class AwsIamPolicyArgs implements AwsIamPolicyArgsIntterface {
  description: string;
  name: string;
  name_prefix: string;
  path: string;
  policy: string;

}
