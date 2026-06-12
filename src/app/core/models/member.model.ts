import { Contact } from './contact.model';
import { Link } from './supplementary-link.model';

export interface Member {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  job: string;
  avatar: string;
  presentation: string;
  location: string;

  contact: Contact;
  skills: string[];
  projects: string[];
  supplementary_link: Link[];
}
