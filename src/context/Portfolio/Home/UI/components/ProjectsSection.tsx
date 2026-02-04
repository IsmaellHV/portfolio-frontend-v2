import type { Project } from '../../Domain/Entities';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="py-20 space-y-10">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground">A selection of my recent work</p>
        </div>
        <Button variant="ghost" className="hidden sm:inline-flex" asChild>
          <a href="/projects">View All Projects</a>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="group flex flex-col justify-between overflow-hidden border-border/50 bg-card/50 hover:bg-card/80 hover:border-border transition-all duration-300">
            <div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal opacity-80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </div>
            <CardFooter className="gap-2 pt-0 mt-auto">
              <Button variant="outline" size="sm" asChild className="gap-2 h-8 text-xs">
                <a href={project.link || '#'} target="_blank" rel="noopener noreferrer">
                  View Project <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="sm:hidden flex justify-center pt-8">
        <Button variant="ghost" asChild>
          <a href="/projects">View All Projects</a>
        </Button>
      </div>
    </section>
  );
};
