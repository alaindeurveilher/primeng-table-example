/* tslint:disable */
/* eslint-disable */
import { BaliseGroup } from '../models/balise-group';
import { ProjectMetaData } from '../models/project-meta-data';

/**
 * The project definition
 */
export interface Project {

  /**
   * The list of balise groups of the project
   */
  baliseGroups: Array<BaliseGroup>;
  projectMetaData: ProjectMetaData;
}
