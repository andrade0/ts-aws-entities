import { AwsEcsServiceAttrsIntterface } from '../interfaces';


export class AwsEcsServiceAttrs implements AwsEcsServiceAttrsIntterface {
  id?: string;
  name?: string;
  cluster?: string;
  iam_role?: string;
  desired_count?: string;

}
