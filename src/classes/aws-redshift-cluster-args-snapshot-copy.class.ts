import { AwsRedshiftClusterArgsSnapshotCopyIntterface } from '../interfaces';


export class AwsRedshiftClusterArgsSnapshotCopy implements AwsRedshiftClusterArgsSnapshotCopyIntterface {
  	destination_region: string;
	retention_period?: string;
	grant_name?: string;

}
