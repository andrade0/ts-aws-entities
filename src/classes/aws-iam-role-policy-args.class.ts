import { AwsIamRolePolicyArgsIntterface } from '../interfaces';


export class AwsIamRolePolicyArgs implements AwsIamRolePolicyArgsIntterface {
  name?: string;
  name_prefix?: string;
  policy: string;
  role: string;

}
