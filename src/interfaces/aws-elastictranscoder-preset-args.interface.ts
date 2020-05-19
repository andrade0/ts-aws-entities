import { AwsElastictranscoderPresetArgsAudioIntterface, AwsElastictranscoderPresetArgsThumbnailsIntterface, AwsElastictranscoderPresetArgsVideoIntterface } from '.';

export interface AwsElastictranscoderPresetArgsIntterface {
  	audio: AwsElastictranscoderPresetArgsAudioIntterface;
	audio_codec_options: string;
	container: string;
	description: string;
	name: string;
	thumbnails: AwsElastictranscoderPresetArgsThumbnailsIntterface;
	video: AwsElastictranscoderPresetArgsVideoIntterface;
	video_watermarks: string;
	video_codec_options: string;

}
