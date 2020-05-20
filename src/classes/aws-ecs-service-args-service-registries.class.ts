import { AwsEcsServiceArgsServiceRegistriesIntterface } from '../interfaces';


export class AwsEcsServiceArgsServiceRegistries implements AwsEcsServiceArgsServiceRegistriesIntterface {
  registry_arn: string;
  port?: string;
  container_port?: string;
  container_name?: string;

}
