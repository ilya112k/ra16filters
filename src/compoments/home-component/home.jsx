import { Component } from 'react';
import projects from '../../data/projects.js';
import { ToolbarComponent } from '../toolbar-component/toolbar.jsx';
import { ProjectListComponent} from '../project-list-component/project-list.jsx';

export class Home extends Component {
  categoriesList = [...new Set(projects.map((item) => item.category))];

  projects = projects;
  filters = ['All', ...this.categoriesList];

  state = {
    selectedFilter: this.filters[0],
  };

  onSelectedFilter = (e) => {
    if (e.target.textContent === this.state.selectedFilter) {
      return;
    }
    this.setState({ selectedFilter: e.target.textContent });
  };


  get filteredProjects() {
    if (this.state.selectedFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(
      (item) => item.category === this.state.selectedFilter
    );
  }


  render() {
    return (
      <>
        <ToolbarComponent
          filters={this.filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.onSelectedFilter}
        />

        <ProjectListComponent projects={this.filteredProjects} />
      </>
    );
  }
}
