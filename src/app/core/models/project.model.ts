import { Link } from './supplementary-link.model';
import { ProjectBlock } from './project-block.model';

export interface Project {
  id: string;
  title: string;
  description: string;
  cover: string;
  stack: string[];
  ownerId: string;

  supplementary_link: Link[];
  blocks: ProjectBlock[];
}
