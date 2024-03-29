// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injector, OnInit, Component } from '@angular/core';
import { CoreBlockBaseComponent } from '../../classes/base-block-component';

/**
 * Component to render blocks with pre-rendered HTML.
 */
@Component({
    selector: 'core-block-pre-rendered',
    templateUrl: 'core-block-pre-rendered.html'
})
export class CoreBlockPreRenderedComponent  extends CoreBlockBaseComponent implements OnInit {

    courseId: number;

    constructor(injector: Injector) {
        super(injector, 'CoreBlockPreRenderedComponent');
    }

    /**
     * Component being initialized.
     */
    ngOnInit(): void {
        super.ngOnInit();

        this.courseId = this.contextLevel == 'course' ? this.instanceId : undefined;
        this.block.name === "mentees" ? console.log("Block 2 : "+this.block.contents.content) : undefined;
        this.block.name === "mentees" ? console.log("Block 2 : "+ typeof this.block.contents.content) : undefined;
        this.fetchContentDefaultError = 'Error getting ' + this.block.contents.title + ' data.';
    }

}
