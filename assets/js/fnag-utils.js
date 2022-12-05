/*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
 * Description: Utility support for Faclair na Gàidhlig web pages.
 * Author: Faclair na Gàidhlig project team, University of Glasgow
 * Version: 0.1
 * Date: 12 March 2022
*/


/*
 * Add/remove a css class for an element with sticky positioning to indicate
 * whether the element is stuck in position relative to the viewport.
 * The element to be monitored is identified by elementSelector.
 * When stuck in position, the element is assigned isStuckClass.
 * Note that this requires IntersectionObserver support, which is not  
 * available in the IE browser up to IE11.
 *
 * @param (string) elementSelector
 * @param (string) isStuckClass
 */

function observeStickyElement(elementSelector, isStuckClass) {

    const element = document.querySelector(elementSelector);

    if (element != null) {
        const observer = new IntersectionObserver(
            ([event]) => event.target.classList.toggle(
                isStuckClass,
                event.intersectionRatio < 1
            ),
            { root: null, threshold: [1] }
      
        );

        observer.observe(element);
    }

}

observeStickyElement(".fnag-entry-header", "fnag-stuck");


/*
 * Enable Bootstrap style tooltips.
 */

function enableTooltips() {

    const tooltipElements = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

    const tooltips = tooltipElements.map(
        function (element) {
            return new bootstrap.Tooltip(element)
        }
    );

}

enableTooltips();


