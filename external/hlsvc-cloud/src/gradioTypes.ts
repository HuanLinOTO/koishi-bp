export default interface message {
  msg:
    | "send_hash"
    | "estimation"
    | "send_data"
    | "process_starts"
    | "progress"
    | "process_completed";
  progress_data?: {
    index: null;
    length: null;
    unit: "steps";
    progress: number;
    desc: string;
  };
  output?: {
    data: Array<{
      name: string;
      data: null;
      is_file: true;
    }>;
    is_generating: false;
    duration: number;
    average_duration: number;
  };
  success?: boolean;
}
