import { AwsElasticBeanstalkApplicationVersionArgsIntterface } from '../interfaces';


export class AwsElasticBeanstalkApplicationVersionArgs implements AwsElasticBeanstalkApplicationVersionArgsIntterface {
  	name: string;
	application: string;
	description?: string;
	bucket: string;
	key: string;
	force_delete?: string;

}
