import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'x-pagination',
  template: require('./pagination.component.html'),
  styles: [require('./pagination.component.scss')],
})
export class XPaginationComponent implements OnChanges {
  @Input() private pagination: any;
  @Input() private route: any;

  private pages = [];
  private params = {};

  constructor(private router: Router) {
  }

  getParams = page => Object.assign({}, this.params, { page });

  navigate = page => this.router.navigate(['.', this.getParams(page)], { relativeTo: this.route });

  ngOnChanges(values) {
    const pages = parseInt(values.pagination.currentValue.pages, 10);
    this.pages = Array.apply(null, Array(pages)).map((_, n) => n + 1);

    if (this.route.params) {
      this.route.params
        .first().subscribe(params => {
          this.params = params;
        });
    }
  };
}
