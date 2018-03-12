import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';
import { markdownLoader } from '../../markdown-loader';

var code_example = `<sam-text
  [(ngModel)]="textModel"
  [name]="textConfig.name"
  [label]="textConfig.label"
  [hint]="textConfig.hint"
  [errorMessage]="textConfig.errorMessage"
  [disabled]="textConfig.disabled">
</sam-text>`;

@Component({
	selector: 'doc-text',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class TextExampleComponent extends BaseExampleComponent implements OnInit {
	textModel = 'Some Text';
  textConfig = {
    label: "Enter zipcode",
    hint: "Zipcode can be short or long version",
    errorMessage: 'Uh-oh, something went wrong',
    name: 'aria-friendly-name',
    disabled: false,
  };
  typedoc_target = "SamTextComponent";
  typedoc_content = "";
  documentation = require('raw-loader!./documentation.md');
  markdown = markdownLoader(this.documentation);
	example = code_example;
}