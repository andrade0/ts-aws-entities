import { AwsCodepipelineArgsArtifactStoreIntterface, AwsCodepipelineArgsStageIntterface } from '.';

export interface AwsCodepipelineArgsIntterface {
  name: string;
  role_arn: string;
  artifact_store: AwsCodepipelineArgsArtifactStoreIntterface;
  stage: AwsCodepipelineArgsStageIntterface;
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
