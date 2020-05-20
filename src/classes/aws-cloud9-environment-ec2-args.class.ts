import { AwsCloud9EnvironmentEc2ArgsIntterface } from '../interfaces';


export class AwsCloud9EnvironmentEc2Args implements AwsCloud9EnvironmentEc2ArgsIntterface {
  name: string;
  instance_type: string;
  automatic_stop_time_minutes?: string;
  description?: string;
  owner_arn?: string;
  subnet_id?: string;

}
