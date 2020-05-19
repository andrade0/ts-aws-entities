import { AwsElastictranscoderPipelineIntterface } from '../interfaces';
import { AwsElastictranscoderPipelineArgs,  AwsElastictranscoderPipelineAttrs } from '.';

export class AwsElastictranscoderPipeline implements AwsElastictranscoderPipelineIntterface {
  	name: string = 'aws_elastictranscoder_pipeline';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/elastic_transcoder_pipeline.html';
	groupName: string = 'Elastic Transcoder Resources';
	args: AwsElastictranscoderPipelineArgs;
	attrs: AwsElastictranscoderPipelineAttrs;

}
