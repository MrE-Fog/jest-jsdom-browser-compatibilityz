# jest-jsdom-browser-compatibility

This is a matrix of issues and risks of using Jest with JSDOM to test browser applications.  This will include several sub projects with example tests to demonstrate the failures.

## Test Case Comparison Matrix

|  Test Case  |    Description    |   Jest (JSDOM)   |   Karma (Chrome)   |    Karma (Safari)   |    Karma (Firefox)   |    References   |
|:------------|:------------------|:----------------:|:------------------:|:-------------------:|:--------------------:|:----------------|
|[Test case 1](testcases-src/tc1-contenteditable)|In Jest document.activeElement is incorrect after the contenteditable element is focused|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/2<br>- https://github.com/jsdom/jsdom/issues/2472|
|[Test case 2](testcases-src/tc2-selector-not-working-the-same)|In Jest, selector is not working same as in browsers|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/3<br>- https://github.com/jsdom/jsdom/issues/2528|
|[Test case 3](testcases-src/tc3-style-property-not-change)|Style property does not change when assign empty string in Jest|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/4<br>- https://github.com/jsdom/jsdom/issues/2504|
|[Test case 4](testcases-src/tc4-notification-api-missing)|Notification API missing in Jest|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful<br> (will show ERROR: `'ERROR CONTEXT', DebugContext_ in console`)|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/5<br>- https://github.com/jsdom/jsdom/issues/1862|
|[Test case 5](testcases-src/tc5-not-support-crypto-api)|Jest doesn't support Cryto API|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/6<br>- https://github.com/jsdom/jsdom/issues/1612<br>- https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API<br>- https://www.w3.org/TR/WebCryptoAPI/|
|[Test case 6](testcases-src/tc6-not-support-TextEncoder)|Jest doesn't support TextEncoder|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/7<br>- https://github.com/jsdom/jsdom/issues/2524<br>- https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API|
|[Test case 7](testcases-src/tc7-not-support-innerText)|JSDOM selector doesn't support innerText|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/9<br>- https://github.com/jsdom/jsdom/issues/1245|
|[Test case 8](testcases-src/tc8-wrong-style-value-svg)|SVGElement style values are empty in JSDOM|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/10<br>- https://github.com/jsdom/jsdom/issues/2384|
|[Test case 9](testcases-src/tc9-style-calc-wrong)|JSDOM silently eats 'calc' and viewport units|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:x: Failed<br>Firefox is failed due to getting `calc(20% + 10px)` when assigned `calc(10px + 20%)`|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/11<br>- https://github.com/jsdom/jsdom/issues/1332|
|[Test case 10](testcases-src/tc10-not-support-css-custom-properties)|JSDOM doesn't apply CSS custom properties|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/12<br>- https://github.com/jsdom/jsdom/issues/1895|
|[Test case 11](testcases-src/tc11-border-value-wrong)|JSDOM unsets style.border when it is set to 'none'|:x: Failed|:heavy_check_mark: Successful|:x: Failed|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/13<br>- https://github.com/jsdom/jsdom/issues/1910|
|[Test case 12](testcases-src/tc12-not-implement-offsetTop)|JSDOM doesn't implement offsetTop & offsetLeft & offsetBottom & offsetRight|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/14<br>- https://github.com/jsdom/jsdom/issues/135<br>- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft<br>|
|[Test case 13](testcases-src/tc13-not-support-svg-attributes)|JSDOM can't get transform property of SVG|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/15<br>- https://github.com/jsdom/jsdom/issues/2531|
|[Test case 14](testcases-src/tc14-bug-in-DOMParser)|JSDOM parsed XML doc's XPath queries fail with upper case attributes|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/16<br>- https://github.com/jsdom/jsdom/issues/2530<br>- JSDOM use a different XPath parser that is not well implemented and buggy. But they are considering switching to a well-maintained 3rd one.|
|[Test case 15](testcases-src/tc15-PointerEvent-not-available)|PointerEvent is not available in JSDOM|:x: Failed|:heavy_check_mark: Successful|:x: Failed|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/17<br>- https://github.com/jsdom/jsdom/issues/2527<br>- https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent|
|[Test case 16](testcases-src/tc16-bug-in-FormData)|JSDOM bug - Creating FormData from form fails on input with no value set|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/18<br>- https://github.com/jsdom/jsdom/issues/2523<br>- https://github.com/jsdom/jsdom/blob/16d3913eea0360c7757e75f7e266c3873c85b7dd/lib/jsdom/living/xhr/FormData-impl.js#L149<br>- https://github.com/jsdom/jsdom/blob/16d3913eea0360c7757e75f7e266c3873c85b7dd/lib/jsdom/living/xhr/FormData-impl.js#L163<br>- This is a bug in JSDOM FormData implementation, see line 149 and 163|
|[Test case 17](testcases-src/tc17-CssStyleDeclaration-not-apply-color-style)|JSDOM, CssStyleDeclaration doesn't apply color style when using keywords|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/19<br>- https://github.com/jsdom/jsdom/issues/2516<br>- https://github.com/jsakas/CSSStyleDeclaration<br>- This is a bug of cssstyle project, which is a dependency of JSDOM|
|[Test case 18](testcases-src/tc18-not-ignore-invalid-style-properties)|JSDOM doesn't ignore invalid style properties|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/20<br>- https://github.com/jsdom/jsdom/issues/2513<br>- https://github.com/facebook/jest/issues/7920<br>- This is inappropriate implementation of JSDOM|
|[Test case 19](testcases-src/tc19-as-attribute-not-implement-in-Link-tag)|JSDOM, 'as' attribute is not implemented in Link tag|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/22<br>- https://github.com/jsdom/jsdom/issues/2471<br>- Link tag in JSDOM is not implemented appropriately, as attribute is ignored|
|[Test case 20](testcases-src/tc20-not-implement-MessageChannel)|JSDOM doesn't implement MessageChannel|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/23<br>- https://github.com/jsdom/jsdom/issues/2448<br>- https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel<br>- MessageChannel API is a common feature implemented in mainstream browsers|
|[Test case 21](testcases-src/tc21-not-support-Cache-API)|JSDOM doesn't support Cache api|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/24<br>- https://github.com/jsdom/jsdom/issues/2422<br>- https://github.com/facebook/jest/issues/7365|
|[Test case 22](testcases-src/tc22-inline-background-0-stripped)|JSDOM, inline background-position with 0 value wil be accidentally stripped|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/25<br>- https://github.com/jsdom/jsdom/issues/2328<br>- JSDOM stripped background-position with 0 value, but works for background-position: 50% 30% with none-zero value|
|[Test case 23](testcases-src/tc23-not-support-layout-properties)|JSDOM doesn't support layout property like clientWidth, clientHeight, getBoundingClientRect due to lacking in layout engine|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/26<br>- https://github.com/jsdom/jsdom/issues/2310<br>- https://github.com/jsdom/jsdom/issues/1322|
|[Test case 24](testcases-src/tc24-not-support-Image.decode-method)|JSDOM doesn't support Image.decode method|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:x: Failed|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/28<br>- https://github.com/jsdom/jsdom/issues/2154<br>- https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-decode<br>- https://github.com/jsdom/jsdom/issues/2154<br>- Both JSDOM anf Firefox doesn't support Image.decode method, But it's supported in Chrome and Safari|
|[Test case 25](testcases-src/tc25-Text.textContent-not-inherit-from-Node.textContent)|Text.textContent doesn't inherit from Node.textContent in JSDOM|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/29<br>- https://github.com/jsdom/jsdom/issues/2144<br>- https://github.com/jsdom/jsdom#shared-constructors-and-prototypes|
|[Test case 26](testcases-src/tc26-missing-support-window.performance.navigation)|JSDOM doesn't support for window.performance.navigation|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/30<br>- https://github.com/jsdom/jsdom/issues/2136<br>- Missing api, it's not likely the JSDOM team is going to support it|
|[Test case 27](testcases-src/tc27-querySelectorAll-not-support-namespaced-attribute)|In JSDOM, querySelectorAll doesn't support namespaced attributes|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/31<br>- https://github.com/jsdom/jsdom/issues/2028|
|[Test case 28](testcases-src/tc28-not-support-pseudo-element)|JSDOM doesn't support the pseudo-element of CSS|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/32<br>- https://github.com/jsdom/jsdom/issues/1928|
|[Test case 29](testcases-src/tc29-not-support-worker-thread-api)|JSDOM doesn't implement Selection API (window.getSelection())|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/33<br>- Since JSDOM doesn't implement Selection API, that means jest is not suitable for testing web editors|
|[Test case 30](testcases-src/tc30-hsl-color-effect-different)|In JSDOM, HSL Color Assign effect is different in browers|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/34<br>- https://github.com/jsdom/jsdom/issues/825|
|[Test case 31](testcases-src/tc31-cannot-get-video-textTracks)|JSDOM doesn't get current textTracks of video node|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/35<br>- https://github.com/jsdom/jsdom/issues/2541|
|[Test case 32](testcases-src/tc32-not-implement-Selection-API)|JSDOM doesn't support worker thread API<br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/36<br>- https://github.com/jsdom/jsdom/issues/2020|
|[Test case 33](testcases-src/tc33-window.getComputedStyle-not-work)|In JSDOM, window.getComputedStyle doesn't work|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/37<br>- https://github.com/jsdom/jsdom/issues/2363|
|[Test case 34](testcases-src/tc34-not-support-queueMicrotask-api)|JSDOM dosn't support queueMicrotask API|:x: Failed|:heavy_check_mark: Successful|:x: Failed|:x: Failed|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/38<br>- https://github.com/jsdom/jsdom/issues/2518<br>- https://github.com/whatwg/html/commit/9d7cf125f960e6bb8d9b7c9456595f505f2e9d4b|
|[Test case 35](testcases-src/tc35-ValidityState-patternMismatch-bug)|ValidityState patternMismatch is incorrectly implemented in JSDOM|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/39<br>- https://github.com/jsdom/jsdom/issues/2494<br>- queueMicrotask is a new HTML spec proposal (proposed on Aug 2018) and not supported in most modern browsers, so currently, it's not commonly used in practice.|
|[Test case 36](testcases-src/tc36-not-support-PromiseRejectionEvent)|JSDOM does not support PromiseRejectionEvent|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:x: Failed|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/39<br>- https://github.com/jsdom/jsdom/issues/2494|
|[Test case 37](testcases-src/tc37-not-report-illegal-invocation-node-proxies)|JSDOM failed to report "illegal invocation" when using nodes' proxies|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/42<br>- https://github.com/jsdom/jsdom/issues/2265<br>- This could probably be fixed by using WeakMaps instead of symbols in webidl2js.|
|[Test case 38](testcases-src/tc38-not-implement-comment-interface)|JSDOM doesn't implement Comment interface correctly|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/43<br>- https://developer.mozilla.org/en-US/docs/Web/API/Comment|
|[Test case 39](testcases-src/tc39-jsdom-node.replaceChild-removes-identical-elems)|JSDOM Node.replacechild removes identical elements<br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/44<br>- https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore<br>- (Potential fix)https://github.com/yefremov/jsdom/commit/8708d4144b66cc03b870840251e9fe36cc806ebd|
|[Test case 40](testcases-src/tc40-maxLength-property-incorrect-when-not-set)|JSDOM maxLength property value is incorrect when it is not set<br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/45<br>- https://github.com/jsdom/jsdom/issues/522<br>- https://html.spec.whatwg.org/#the-maxlength-and-minlength-attributes|
|[Test case 41](testcases-src/tc41-not-support-XMLSerializer)|JSDOM doesn't support XMLSerializer<br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/46<br>- https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer<br>- https://github.com/jsdom/jsdom/issues/1368<br>- https://github.com/jsdom/jsdom/pull/2282<br>- https://github.com/theneva/jest-environment-jsdom-thirteen|
|[Test case 42](testcases-src/tc42-only-support-subset-performance-api)|JSDOM only supports subset of performance apis<br>|:x: Failed<br>Not support<br>`clearMarks`<br>`clearMeasures`<br>`clearResourceTimings`<br>`getEntries`<br>`getEntriesByName`<br> `getEntriesByType`<br>`mark`<br>`measure`<br>`setResourceTimingBufferSize`|:heavy_check_mark: Successful|:x: Failed <br>(misses toJSON and timeOrigin) |:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/47<br>- https://developer.mozilla.org/en-US/docs/Web/API/Performance|
|[Test case 43](testcases-src/tc43-not-support-PointerLock-api)|JSDOM doesn't support Pointer Lock API<br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/48<br>- https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API|
|[Test case 44](testcases-src/tc44-only-support-subsets-Navigator-api)|JSDOM only supports subsets of Navigator API<br>|:x: Failed<br>Not support<br>`navigator.doNotTrack`<br>`navigator.geolocation`<br>`navigator.getGamepads`<br>`navigator.maxTouchPoints`<br>`navigator.mediaDevice`s<br>`navigator.serviceWorker`<br>`navigator.sendBeacon`<br>`navigator.request​Media​KeySystem​Access`<br>|:heavy_check_mark: Successful|:x: Failed<br>Not support<br>`navigator.hardwareConcurrency`<br>`navigator.maxTouchPoints`<br>`navigator.request​Media​KeySystem​Access`|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/49<br>- https://developer.mozilla.org/en-US/docs/Web/API/Navigator<br>- https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/navigator/Navigator-impl.js|
|[Test case 45](testcases-src/tc45-NodeList-not-support-entries-forEach-keys-values)|JSDOM NodeList doesn't support entries, forEach, keys, values method<br>|:x: Failed<br>Not support<br>`NodeList.item`<br>`NodeList.entries`<br>`NodeList.forEach`<br>`NodeList.keys`<br>`NodeList.values`<br>|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/50<br>- https://developer.mozilla.org/en-US/docs/Web/API/NodeList<br>- https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/nodes/NodeList-impl.js#L23|
|[Test case 46](testcases-src/tc46-only-support-subsets-events-for-Document.createEvent)|JSDOM only supports subsets of events for Document.createEvent<br>|:x: Failed<br>Not support<br>`beforeunloadevent`<br>`compositionevent`<br>`devicemotionevent`<br>`deviceorientationevent`<br>`dragevent`<br>`storageevent`<br>`textevent`<br>|:heavy_check_mark: Successful<br>Not support touchEvent (Desktop version)|:x: Failed<br>Not support:<br>`touchevent` (Desktop version)<br>`devicemotionevent` (Desktop version)<br>`deviceorientationevent` (Desktop version)<br>`dragevent`<br>|:heavy_check_mark: Successful<br>Not support `touchEvent` (Desktop version)|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/51<br>- https://dom.spec.whatwg.org/#dom-document-createevent<br>- https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/nodes/Document-impl.js#L89|
|[Test case 47](testcases-src/tc47-not-support-TransitionEvent)|JSDOM doesn't support TransitionEvent<br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/52<br>- https://github.com/jsdom/jsdom/issues/1781<br>- https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent|
|[Test case 48](testcases-src/tc48-not-define-iframe-sandbox)|JSDOM's iframe doesn't define sandbox attribute<br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/53<br>- https://github.com/jsdom/jsdom/issues/1892<br>- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe|
|[Test case 49](testcases-src/tc49-not-support-IntersectionObserver-api)|JSDOM doesn't support IntersectionObserver API<br>|:x: Failed|:heavy_check_mark: Successful|:x: Failed|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/54<br>- https://github.com/jsdom/jsdom/issues/2032<br>- https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver|
|[Test case 50](testcases-src/tc50-not-implement-SVG-basic-geometric-shapes)|JSDOM SVG basic geometric shapes (such as SVGPathElement) are not implemented<br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/55<br>- https://github.com/jsdom/jsdom/issues/2128|
|[Test case 51](testcases-src/tc51-not-support-touch-interface)|JSDOM doesn't support Touch interface<br>|:x: Failed|:heavy_check_mark: Successful|:x: Failed|:x: Failed|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/56<br>- https://github.com/jsdom/jsdom/issues/2152<br>- https://w3c.github.io/touch-events/#touch-interface|
|[Test case 52](testcases-src/tc52-style-not-inherit)|JSDOM styles don't inherit<br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/59<br>- https://github.com/jsdom/jsdom/issues/2160<br>- The issue is that the JSDOM implements cascading, but not inheritance. Inheritance is harder|
|[Test case 53](testcases-src/tc53-ImageData-not-support-globally)|JSDOM ImageData API is not supported globally<br><br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/60<br>- https://github.com/jsdom/jsdom/issues/1749<br>- https://developer.mozilla.org/en-US/docs/Web/API/ImageData<br>- currently it's only defined under Canvas|
|[Test case 54](testcases-src/tc54-not-support-execCommand-api)|JSDOM doesn't support execCommand api<br><br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/61<br>- https://github.com/jsdom/jsdom/issues/1742<br>- https://github.com/mattermost/mattermost-webapp/pull/228<br>- https://github.com/nadbm/react-datasheet/pull/123|
|[Test case 55](testcases-src/tc55-not-support-URL.createObjectURL-URL.revokeObjectURL)|JSDOM doesn't support URL.createObjectURL and URL.revokeObjectURL<br><br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/62<br>- https://github.com/jsdom/jsdom/issues/1721<br>- https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL<br>- https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL|
|[Test case 56](testcases-src/tc56-not-support-scrollIntoView-method)|JSDOM doesn't support `scrollIntoView` method<br><br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/62<br>- https://github.com/jsdom/jsdom/issues/1695<br>- https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView<br>- Polyfill: Element.prototype.scrollIntoView = jest.fn()|
|[Test case 57](testcases-src/tc57-element.scrollHeight-always-returns-0)|JSDOM element.scrollHeight always returns 0<br><br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/65<br>- https://github.com/jsdom/jsdom/issues/1013<br>- https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight<br>- https://github.com/mui-org/material-ui/pull/5015|
|[Test case 58](testcases-src/tc58-HTMLInputElement-not-instanceof-Object)|JSDOM HTMLInputElement is not instanceof Object<br><br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/66<br>- https://github.com/jsdom/jsdom/issues/1769|
|[Test case 59](testcases-src/tc59-not-support-WebRTC)|JSDOM doesn't support WebRTC<br><br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/67<br>- https://github.com/jsdom/jsdom/issues/1746<br>- https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API<br>- Possible solution: https://github.com/vmolsa/webrtc-native|
|[Test case 60](testcases-src/tc60-not-support-IndexedDB)|JSDOM doesn't support IndexedDB<br><br>|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/68<br>- https://github.com/jsdom/jsdom/issues/1748<br>- https://github.com/denoland/deno/issues/1699|
|[Test case 61](testcases-src/tc61-not-support-fetch-api)|JSDOM doesn't support fetch API|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/69<br>- https://github.com/jsdom/jsdom/issues/1724<br>- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API|
|[Test case 62](testcases-src/tc62-not-support-clipboard-api)|JSDOM doesn't support clipboard API|:x: Failed|:heavy_check_mark: Successful|:x: Failed|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/70<br>- https://github.com/jsdom/jsdom/issues/1568<br>- https://developer.mozilla.org/en-US/docs/Web/API/Clipboard|
|[Test case 63](testcases-src/tc63-not-support-Range-and-Traversal-api)|JSDOM does not support Range and Traversal API|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/72<br>- https://github.com/jsdom/jsdom/issues/317<br>- https://developer.mozilla.org/en-US/docs/Web/API/Range<br>- https://github.com/mui-org/material-ui/blob/57e8a88faeebba4d67aaaf6c5b178ebfe97264a6/test/utils/createDOM.js#L13|
|[Test case 64](testcases-src/tc64-not-support-webcomponents-api)|JSDOM doesn't support webcomponents api|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/73<br>- https://github.com/jsdom/jsdom/issues/1030<br>- https://developer.mozilla.org/en-US/docs/Web/Web_Components|
|[Test case 65](testcases-src/tc65-not-implement-HTMLMediaElement.prototype.load)|JSDOM does not implement HTMLMediaElement.prototype.load|:x: Failed|:heavy_check_mark: Successful|:heavy_check_mark: Successful|:heavy_check_mark: Successful|- https://gitlab.com/jest-risk-discovery/test-cases-design/issues/74<br>- https://github.com/jsdom/jsdom/issues/1515|
