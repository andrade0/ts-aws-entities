import { AwsIamPolicyAttrsIntterface } from '../interfaces';


export class AwsIamPolicyAttrs implements AwsIamPolicyAttrsIntterface {
  id?: string;
  arn?: string;
  description?: string;
  name?: string;
  path?: string;
  policy?: string;

}
