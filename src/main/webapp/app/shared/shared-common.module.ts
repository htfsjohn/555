import { NgModule } from '@angular/core';

import { RrrrSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RrrrSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RrrrSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RrrrSharedCommonModule {}
