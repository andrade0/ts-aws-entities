import { AwsEcsClusterArgsIntterface } from '../interfaces';


export class AwsEcsClusterArgs implements AwsEcsClusterArgsIntterface {
  name: string;
  tags?: string;

}
