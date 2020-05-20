import { AwsGameliftBuildArgsIntterface } from '../interfaces';
import { AwsGameliftBuildArgsStorageLocation } from '.';

export class AwsGameliftBuildArgs implements AwsGameliftBuildArgsIntterface {
  name: string;
  operating_system: string;
  storage_location: AwsGameliftBuildArgsStorageLocation;
  version?: string;

}
