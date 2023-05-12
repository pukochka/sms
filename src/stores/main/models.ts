export interface MainStore {
  style: {
    bar: Record<string, string | number>;
    thumb: Record<string, string | number>;
    scroll: Record<string, string | number>;
    content: Record<string, string | number>;
  };
  stagesValue: Stages[];
}

export interface Stages {
  label: string;
  component: any;
  id: number;
}
