interface Project {
  name: string;
  links?: ProjectLink[];
  description: string;
}

interface ProjectLink {
  type: 'text' | 'github' | 'npm';
  url: string;
  text?: string;
}
