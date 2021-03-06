interface Project {
  name: string;
  links?: ProjectLink[];
  description: string;
  detail_file: string;
}

interface ProjectLink {
  type: 'text' | 'github' | 'npm';
  url: string;
  text?: string;
}
