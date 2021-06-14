import { HttpParams } from '@angular/common/http';

export class Pagination {

    public initSort: boolean = false;

    constructor(public limit = 10, public offset = 0, public sort = '', public sortDirection = 'asc', public filterProvider: string = null ) {
        if (sort != '') {
            this.initSort = true;
        }
    }

    appendHttpParams(httpParams: HttpParams) {
        httpParams = httpParams.append('limit', this.limit.toString());
        httpParams = httpParams.append('offset', this.offset.toString());

        if (this.sortDirection && this.sort.length > 0) {            
            httpParams = httpParams.append('sort', this.sort);            
            httpParams = httpParams.append('sortDirection', this.sortDirection);
        }

        // if( this.filterProvider ) {
        //     httpParams = this.filterProvider.appendHttpParams( httpParams );
        // }

        return httpParams;
    }
}
