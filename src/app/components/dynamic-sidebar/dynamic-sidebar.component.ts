import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-sidebar',
  templateUrl: './dynamic-sidebar.component.html',
  styleUrls: ['./dynamic-sidebar.component.css']
})
export class DynamicSidebarComponent implements OnInit {

  // SECTION input parameters

    /**
     * Tells if the sidebar can be viewed.
     */
    @Input() canViewSidebar: boolean = true;

    /**
     * The show sidebar button icon.
     * Font awesome default: fas fa-ellipsis-v.
     */
    @Input() showSidebarButtonIcon: string = 'fas fa-ellipsis-v';

    /**
     * The show sidebar button text.
     */
    @Input() showSidebarButtonText: string = '';

    /**
     * The close sidebar button icon.
     * Font awesome default: fas fa-times.
     */
    @Input() closeSidebarButtonIcon: string = 'fas fa-times';

    /**
     * The close sidebar button text.
     */
    @Input() closeSidebarButtonText: string = '';

    /**
     * The sidebar content components.
     * Rendered by ng-dynamic-component.
     * https://www.npmjs.com/package/ng-dynamic-component/v/5.0.6
     * Example of array object:
     * {
     *   component = MyDynamicComponent1;
     *   inputs = {
     *       hello: 'world',
     *       something: () => 'can be really complex'
     *   };
     *   outputs = {
     *       onSomething: type => alert(type)
     *   }
     * }
     */
    @Input() components: Array<any> = new Array<any>();

    // !SECTION

    // SECTION variables

    /**
     *
     */
    show: boolean = false;

    // !SECTION

    // SECTION constructor

    /**
     * Constructor.
     */
    constructor() { }

    // !SECTION

    // SECTION OnInit interface implementation

    /**
     * A callback method that is invoked immediately after the default change detector
     * has checked the directive's data-bound properties for the first time, and before
     * any of the view or content children have been checked. It is invoked only once
     * when the directive is instantiated.
     */
    ngOnInit() { }

    // !SECTION

    // SECTION methods

    /**
     * Show the sidebar.
     */
    showSidebar() {
        this.show = true;
    }

    /**
     * Hide the sidebar.
     */
    closeSidebar() {
        this.show = false;
    }

    // !SECTION

}
