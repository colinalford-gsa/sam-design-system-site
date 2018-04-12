
import {
  Component,
  OnInit,
  Input,
  ComponentRef,
  ViewChild,
  ViewRef,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

//tabs/spacing matters for code example block
var code_example = `TODO`;

@Component({
	selector: 'doc-sam-drag-drop',
  template: '<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">'+ code_example +'</doc-template>'
})
export class SamDragDropDirectiveExampleComponent extends BaseExampleComponent implements OnInit {
  typedoc_target = "SamDragDropDirective";
  typedoc_content = "";
  
	example = code_example;

        
  public base = '_docs/components/drag-drop/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}
