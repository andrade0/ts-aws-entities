import { AwsGameliftBuildArgsStorageLocationIntterface } from '.';

export interface AwsGameliftBuildArgsIntterface {
  name: string;
  operating_system: string;
  storage_location: AwsGameliftBuildArgsStorageLocationIntterface;
  version?: string;

}
