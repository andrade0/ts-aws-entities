import { AwsCodepipelineArgsIntterface } from '../interfaces';
import { AwsCodepipelineArgsArtifactStore, AwsCodepipelineArgsStage } from '.';

export class AwsCodepipelineArgs implements AwsCodepipelineArgsIntterface {
  name: string;
  role_arn: string;
  artifact_store: AwsCodepipelineArgsArtifactStore;
  stage: AwsCodepipelineArgsStage;
  id: string;
  type: string;
  category: string;
  owner: string;
  provider: string;
  version: string;
  configuration?: string;
  input_artifacts?: string;
  output_artifacts?: string;
  run_order?: string;

}
