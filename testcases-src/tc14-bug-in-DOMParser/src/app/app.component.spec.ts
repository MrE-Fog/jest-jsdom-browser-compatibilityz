/**
=========================================================================
Copyright 2019 T-Mobile, USA
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
See the LICENSE file for additional language around disclaimer of warranties.
Trademark Disclaimer: Neither the name of “T-Mobile, USA” nor the names of
its contributors may be used to endorse or promote products derived from this
software without specific prior written permission.
===========================================================================
*/

declare global {
  interface Window {
    DOMParser: any;
  }
}
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { expect } from 'chai';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should correctly parse XML', () => {
    const domParser = new window.DOMParser();
    const doc = domParser.parseFromString('<?xml version="1.0" encoding="utf-8"?><example Foo="bar"></example>', 'text/xml');
    const result = doc.evaluate('//*[@Foo="bar"]', doc, null, XPathResult.ANY_TYPE, null);
    const exampleNode = result.iterateNext();
    expect(exampleNode.nodeName).to.equal('example');
  });
});
