import { AwsElasticBeanstalkSolutionStackIntterface } from '../interfaces';
import { AwsElasticBeanstalkSolutionStackArgs, AwsElasticBeanstalkSolutionStackAttrs } from '.';

export class AwsElasticBeanstalkSolutionStack implements AwsElasticBeanstalkSolutionStackIntterface {
  name: string = 'aws_elastic_beanstalk_solution_stack';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html';
  groupName: string = 'Data Sources';
  args: AwsElasticBeanstalkSolutionStackArgs;
  attrs: AwsElasticBeanstalkSolutionStackAttrs;

}
