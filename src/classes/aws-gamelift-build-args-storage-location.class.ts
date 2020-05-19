import { AwsGameliftBuildArgsStorageLocationIntterface } from '../interfaces';


export class AwsGameliftBuildArgsStorageLocation implements AwsGameliftBuildArgsStorageLocationIntterface {
  	bucket: string;
	key: string;
	role_arn: string;

}
