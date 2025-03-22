
export type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile';

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    repoUrl: string;
    category: ProjectCategory;
};