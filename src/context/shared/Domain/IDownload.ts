export interface IDownload {
  _id: string;
  fileName: string;
  progress: number;
  status: 'PENDING' | 'DOWNLOADING' | 'COMPLETED' | 'ERROR';
  url?: string;
}
