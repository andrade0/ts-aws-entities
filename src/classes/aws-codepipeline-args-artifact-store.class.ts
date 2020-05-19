import { AwsCodepipelineArgsArtifactStoreIntterface } from '../interfaces';


export class AwsCodepipelineArgsArtifactStore implements AwsCodepipelineArgsArtifactStoreIntterface {
  	location: string;
	type: string;
	encryption_key?: string;

}
