import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'slice' })

export class SlicePipe implements PipeTransform {
    transform(value: string, length: number): string {
        return value.length > length ? `${value.slice(0, length)}...` : value ;
    }
}
