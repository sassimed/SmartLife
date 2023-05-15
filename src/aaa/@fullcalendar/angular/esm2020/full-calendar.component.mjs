import { Component, ContentChild, Input, ViewEncapsulation, } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { CustomRenderingStore } from '@fullcalendar/core/internal';
import { OPTION_INPUT_NAMES, OPTION_IS_DEEP } from './options';
import { deepCopy, mapHash } from './utils/obj';
import { deepEqual } from './utils/fast-deep-equal';
import * as i0 from "@angular/core";
import * as i1 from "./utils/offscreen-fragment.component";
import * as i2 from "./utils/transport-container.component";
import * as i3 from "@angular/common";
export class FullCalendarComponent {
    constructor(element, changeDetector) {
        this.element = element;
        this.calendar = null;
        this.optionSnapshot = {}; // for diffing
        this.customRenderingMap = new Map();
        this.templateMap = {};
        const customRenderingStore = new CustomRenderingStore();
        customRenderingStore.subscribe((customRenderingMap) => {
            this.customRenderingMap = customRenderingMap;
            this.customRenderingArray = undefined; // clear cache
            changeDetector.detectChanges();
        });
        this.handleCustomRendering = customRenderingStore.handle.bind(customRenderingStore);
        this.templateMap = this; // alias to this
    }
    ngAfterViewInit() {
        const { deepChangeDetection } = this;
        const options = {
            ...this.options,
            ...this.buildInputOptions(),
        };
        // initialize snapshot
        this.optionSnapshot = mapHash(options, (optionVal, optionName) => ((deepChangeDetection && OPTION_IS_DEEP[optionName])
            ? deepCopy(optionVal)
            : optionVal));
        const calendarEl = this.element.nativeElement;
        const calendar = this.calendar = new Calendar(calendarEl, {
            ...options,
            ...this.buildExtraOptions(),
        });
        // Ionic dimensions hack
        // https://github.com/fullcalendar/fullcalendar/issues/4976
        const ionContent = calendarEl.closest('ion-content');
        if (ionContent && ionContent.componentOnReady) {
            ionContent.componentOnReady().then(() => {
                window.requestAnimationFrame(() => {
                    calendar.render();
                });
            });
        }
        else {
            calendar.render();
        }
    }
    /*
    allows us to manually detect complex input changes, internal mutations to certain options.
    called before ngOnChanges. called much more often than ngOnChanges.
    */
    ngDoCheck() {
        if (this.calendar) { // not the initial render
            const { deepChangeDetection, optionSnapshot } = this;
            const newOptions = {
                ...this.options,
                ...this.buildInputOptions(),
            };
            const newProcessedOptions = {};
            const changedOptionNames = [];
            // detect adds and updates (and update snapshot)
            for (const optionName in newOptions) {
                if (newOptions.hasOwnProperty(optionName)) {
                    let optionVal = newOptions[optionName];
                    if (deepChangeDetection && OPTION_IS_DEEP[optionName]) {
                        if (!deepEqual(optionSnapshot[optionName], optionVal)) {
                            optionSnapshot[optionName] = deepCopy(optionVal);
                            changedOptionNames.push(optionName);
                        }
                    }
                    else {
                        if (optionSnapshot[optionName] !== optionVal) {
                            optionSnapshot[optionName] = optionVal;
                            changedOptionNames.push(optionName);
                        }
                    }
                    newProcessedOptions[optionName] = optionVal;
                }
            }
            const oldOptionNames = Object.keys(optionSnapshot);
            // detect removals (and update snapshot)
            for (const optionName of oldOptionNames) {
                if (!(optionName in newOptions)) { // doesn't exist in new options?
                    delete optionSnapshot[optionName];
                    changedOptionNames.push(optionName);
                }
            }
            if (changedOptionNames.length) {
                this.calendar.pauseRendering();
                this.calendar.resetOptions({
                    ...newProcessedOptions,
                    ...this.buildExtraOptions(),
                }, changedOptionNames);
            }
        }
    }
    ngAfterContentChecked() {
        if (this.calendar) { // too defensive?
            this.calendar.resumeRendering();
        }
    }
    ngOnDestroy() {
        if (this.calendar) { // too defensive?
            this.calendar.destroy();
            this.calendar = null;
        }
    }
    get customRenderings() {
        return this.customRenderingArray ||
            (this.customRenderingArray = [...this.customRenderingMap.values()]);
    }
    getApi() {
        return this.calendar;
    }
    buildInputOptions() {
        const options = {};
        for (const inputName of OPTION_INPUT_NAMES) {
            const inputValue = this[inputName];
            if (inputValue != null) { // exclude both null and undefined
                options[inputName] = inputValue;
            }
        }
        return options;
    }
    buildExtraOptions() {
        return {
            handleCustomRendering: this.handleCustomRendering,
            customRenderingMetaMap: this.templateMap,
            customRenderingReplacesEl: true,
        };
    }
    // for `trackBy` in loop
    trackCustomRendering(index, customRendering) {
        return customRendering.id;
    }
}
FullCalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FullCalendarComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
FullCalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FullCalendarComponent, selector: "full-calendar", inputs: { options: "options", deepChangeDetection: "deepChangeDetection", events: "events", eventSources: "eventSources", resources: "resources" }, queries: [{ propertyName: "dayHeaderContent", first: true, predicate: ["dayHeaderContent"], descendants: true, static: true }, { propertyName: "dayCellContent", first: true, predicate: ["dayCellContent"], descendants: true, static: true }, { propertyName: "weekNumberContent", first: true, predicate: ["weekNumberContent"], descendants: true, static: true }, { propertyName: "nowIndicatorContent", first: true, predicate: ["nowIndicatorContent"], descendants: true, static: true }, { propertyName: "eventContent", first: true, predicate: ["eventContent"], descendants: true, static: true }, { propertyName: "slotLaneContent", first: true, predicate: ["slotLaneContent"], descendants: true, static: true }, { propertyName: "slotLabelContent", first: true, predicate: ["slotLabelContent"], descendants: true, static: true }, { propertyName: "allDayContent", first: true, predicate: ["allDayContent"], descendants: true, static: true }, { propertyName: "moreLinkContent", first: true, predicate: ["moreLinkContent"], descendants: true, static: true }, { propertyName: "noEventsContent", first: true, predicate: ["noEventsContent"], descendants: true, static: true }, { propertyName: "resourceAreaHeaderContent", first: true, predicate: ["resourceAreaHeaderContent"], descendants: true, static: true }, { propertyName: "resourceGroupLabelContent", first: true, predicate: ["resourceGroupLabelContent"], descendants: true, static: true }, { propertyName: "resourceLabelContent", first: true, predicate: ["resourceLabelContent"], descendants: true, static: true }, { propertyName: "resourceLaneContent", first: true, predicate: ["resourceLaneContent"], descendants: true, static: true }, { propertyName: "resourceGroupLaneContent", first: true, predicate: ["resourceGroupLaneContent"], descendants: true, static: true }], ngImport: i0, template: "<offscreen-fragment>\n  <transport-container *ngFor=\"let customRendering of customRenderings; trackBy:trackCustomRendering\"\n    [inPlaceOf]=\"customRendering.containerEl\"\n    [reportEl]=\"customRendering.reportNewContainerEl\"\n    [elTag]=\"customRendering.elTag\"\n    [elClasses]=\"customRendering.elClasses\"\n    [elStyle]=\"customRendering.elStyle\"\n    [elAttrs]=\"customRendering.elAttrs\"\n    [template]=\"templateMap[customRendering.generatorName]!\"\n    [renderProps]=\"customRendering.renderProps\"\n  ></transport-container>\n</offscreen-fragment>\n", components: [{ type: i1.OffscreenFragmentComponent, selector: "offscreen-fragment" }, { type: i2.TransportContainerComponent, selector: "transport-container", inputs: ["inPlaceOf", "reportEl", "elTag", "elClasses", "elStyle", "elAttrs", "template", "renderProps"] }], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FullCalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'full-calendar', encapsulation: ViewEncapsulation.None // the styles are root-level, not scoped within the component
                    , template: "<offscreen-fragment>\n  <transport-container *ngFor=\"let customRendering of customRenderings; trackBy:trackCustomRendering\"\n    [inPlaceOf]=\"customRendering.containerEl\"\n    [reportEl]=\"customRendering.reportNewContainerEl\"\n    [elTag]=\"customRendering.elTag\"\n    [elClasses]=\"customRendering.elClasses\"\n    [elStyle]=\"customRendering.elStyle\"\n    [elAttrs]=\"customRendering.elAttrs\"\n    [template]=\"templateMap[customRendering.generatorName]!\"\n    [renderProps]=\"customRendering.renderProps\"\n  ></transport-container>\n</offscreen-fragment>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { options: [{
                type: Input
            }], deepChangeDetection: [{
                type: Input
            }], events: [{
                type: Input
            }], eventSources: [{
                type: Input
            }], resources: [{
                type: Input
            }], dayHeaderContent: [{
                type: ContentChild,
                args: ['dayHeaderContent', { static: true }]
            }], dayCellContent: [{
                type: ContentChild,
                args: ['dayCellContent', { static: true }]
            }], weekNumberContent: [{
                type: ContentChild,
                args: ['weekNumberContent', { static: true }]
            }], nowIndicatorContent: [{
                type: ContentChild,
                args: ['nowIndicatorContent', { static: true }]
            }], eventContent: [{
                type: ContentChild,
                args: ['eventContent', { static: true }]
            }], slotLaneContent: [{
                type: ContentChild,
                args: ['slotLaneContent', { static: true }]
            }], slotLabelContent: [{
                type: ContentChild,
                args: ['slotLabelContent', { static: true }]
            }], allDayContent: [{
                type: ContentChild,
                args: ['allDayContent', { static: true }]
            }], moreLinkContent: [{
                type: ContentChild,
                args: ['moreLinkContent', { static: true }]
            }], noEventsContent: [{
                type: ContentChild,
                args: ['noEventsContent', { static: true }]
            }], resourceAreaHeaderContent: [{
                type: ContentChild,
                args: ['resourceAreaHeaderContent', { static: true }]
            }], resourceGroupLabelContent: [{
                type: ContentChild,
                args: ['resourceGroupLabelContent', { static: true }]
            }], resourceLabelContent: [{
                type: ContentChild,
                args: ['resourceLabelContent', { static: true }]
            }], resourceLaneContent: [{
                type: ContentChild,
                args: ['resourceLaneContent', { static: true }]
            }], resourceGroupLaneContent: [{
                type: ContentChild,
                args: ['resourceGroupLaneContent', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jYWxlbmRhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvc3JjL2Z1bGwtY2FsZW5kYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vbGliL3NyYy9mdWxsLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUdaLEtBQUssRUFLTCxpQkFBaUIsR0FFbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRCxPQUFPLEVBQW1CLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBT3BELE1BQU0sT0FBTyxxQkFBcUI7SUFzQ2hDLFlBQ1UsT0FBbUIsRUFDM0IsY0FBaUM7UUFEekIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVJyQixhQUFRLEdBQW9CLElBQUksQ0FBQztRQUNqQyxtQkFBYyxHQUF3QixFQUFFLENBQUMsQ0FBQyxjQUFjO1FBRXhELHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUFnQyxDQUFBO1FBRTdELGdCQUFXLEdBQWlELEVBQUUsQ0FBQTtRQU1uRSxNQUFNLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztRQUV4RCxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztZQUM3QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDLENBQUMsY0FB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Tyx3QkFBd0I7c0JBQW5GLFlBQVk7dUJBQUMsMEJBQTBCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRG9DaGVjayxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgT25EZXN0cm95LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXIsIENhbGVuZGFyT3B0aW9ucyB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21SZW5kZXJpbmcsIEN1c3RvbVJlbmRlcmluZ1N0b3JlIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2ludGVybmFsJztcbmltcG9ydCB7IE9QVElPTl9JTlBVVF9OQU1FUywgT1BUSU9OX0lTX0RFRVAgfSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJPcHRpb24sIENhbGVuZGFyVGVtcGxhdGVSZWYgfSBmcm9tICcuL3ByaXZhdGUtdHlwZXMnO1xuaW1wb3J0IHsgZGVlcENvcHksIG1hcEhhc2ggfSBmcm9tICcuL3V0aWxzL29iaic7XG5pbXBvcnQgeyBkZWVwRXF1YWwgfSBmcm9tICcuL3V0aWxzL2Zhc3QtZGVlcC1lcXVhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z1bGwtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZnVsbC1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUgLy8gdGhlIHN0eWxlcyBhcmUgcm9vdC1sZXZlbCwgbm90IHNjb3BlZCB3aXRoaW4gdGhlIGNvbXBvbmVudFxufSlcbmV4cG9ydCBjbGFzcyBGdWxsQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBEb0NoZWNrLCBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBvcHRpb25zPzogQ2FsZW5kYXJPcHRpb25zO1xuICBASW5wdXQoKSBkZWVwQ2hhbmdlRGV0ZWN0aW9uPzogYm9vbGVhbjtcblxuICAvKlxuICBPcHRpb25zIGFzIGluZGl2aWR1YWwgSW5wdXRzXG4gIE5PVEU6IGtlZXAgaW4gc3luYyB3aXRoIE9QVElPTl9JTlBVVF9OQU1FU1xuICAqL1xuICBASW5wdXQoKSBldmVudHM/OiBDYWxlbmRhck9wdGlvbjwnZXZlbnRzJz4gfCBudWxsIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBldmVudFNvdXJjZXM/OiBDYWxlbmRhck9wdGlvbjwnZXZlbnRTb3VyY2VzJz4gfCBudWxsIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSByZXNvdXJjZXM/OiBDYWxlbmRhck9wdGlvbjwncmVzb3VyY2VzJz4gfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIC8qXG4gIFRlbXBsYXRlc1xuICAqL1xuICBAQ29udGVudENoaWxkKCdkYXlIZWFkZXJDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgZGF5SGVhZGVyQ29udGVudD86IENhbGVuZGFyVGVtcGxhdGVSZWY8J2RheUhlYWRlckNvbnRlbnQnPjtcbiAgQENvbnRlbnRDaGlsZCgnZGF5Q2VsbENvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkYXlDZWxsQ29udGVudD86IENhbGVuZGFyVGVtcGxhdGVSZWY8J2RheUNlbGxDb250ZW50Jz47XG4gIEBDb250ZW50Q2hpbGQoJ3dlZWtOdW1iZXJDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgd2Vla051bWJlckNvbnRlbnQ/OiBDYWxlbmRhclRlbXBsYXRlUmVmPCd3ZWVrTnVtYmVyQ29udGVudCc+O1xuICBAQ29udGVudENoaWxkKCdub3dJbmRpY2F0b3JDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgbm93SW5kaWNhdG9yQ29udGVudD86IENhbGVuZGFyVGVtcGxhdGVSZWY8J25vd0luZGljYXRvckNvbnRlbnQnPjtcbiAgQENvbnRlbnRDaGlsZCgnZXZlbnRDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgZXZlbnRDb250ZW50PzogQ2FsZW5kYXJUZW1wbGF0ZVJlZjwnZXZlbnRDb250ZW50Jz47XG4gIEBDb250ZW50Q2hpbGQoJ3Nsb3RMYW5lQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHNsb3RMYW5lQ29udGVudD86IENhbGVuZGFyVGVtcGxhdGVSZWY8J3Nsb3RMYW5lQ29udGVudCc+O1xuICBAQ29udGVudENoaWxkKCdzbG90TGFiZWxDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgc2xvdExhYmVsQ29udGVudD86IENhbGVuZGFyVGVtcGxhdGVSZWY8J3Nsb3RMYWJlbENvbnRlbnQnPjtcbiAgQENvbnRlbnRDaGlsZCgnYWxsRGF5Q29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGFsbERheUNvbnRlbnQ/OiBDYWxlbmRhclRlbXBsYXRlUmVmPCdhbGxEYXlDb250ZW50Jz47XG4gIEBDb250ZW50Q2hpbGQoJ21vcmVMaW5rQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIG1vcmVMaW5rQ29udGVudD86IENhbGVuZGFyVGVtcGxhdGVSZWY8J21vcmVMaW5rQ29udGVudCc+O1xuICBAQ29udGVudENoaWxkKCdub0V2ZW50c0NvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBub0V2ZW50c0NvbnRlbnQ/OiBDYWxlbmRhclRlbXBsYXRlUmVmPCdub0V2ZW50c0NvbnRlbnQnPjtcbiAgQENvbnRlbnRDaGlsZCgncmVzb3VyY2VBcmVhSGVhZGVyQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHJlc291cmNlQXJlYUhlYWRlckNvbnRlbnQ/OiBDYWxlbmRhclRlbXBsYXRlUmVmPCdyZXNvdXJjZUFyZWFIZWFkZXJDb250ZW50Jz47XG4gIEBDb250ZW50Q2hpbGQoJ3Jlc291cmNlR3JvdXBMYWJlbENvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSByZXNvdXJjZUdyb3VwTGFiZWxDb250ZW50PzogQ2FsZW5kYXJUZW1wbGF0ZVJlZjwncmVzb3VyY2VHcm91cExhYmVsQ29udGVudCc+O1xuICBAQ29udGVudENoaWxkKCdyZXNvdXJjZUxhYmVsQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHJlc291cmNlTGFiZWxDb250ZW50PzogQ2FsZW5kYXJUZW1wbGF0ZVJlZjwncmVzb3VyY2VMYWJlbENvbnRlbnQnPjtcbiAgQENvbnRlbnRDaGlsZCgncmVzb3VyY2VMYW5lQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHJlc291cmNlTGFuZUNvbnRlbnQ/OiBDYWxlbmRhclRlbXBsYXRlUmVmPCdyZXNvdXJjZUxhbmVDb250ZW50Jz47XG4gIEBDb250ZW50Q2hpbGQoJ3Jlc291cmNlR3JvdXBMYW5lQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHJlc291cmNlR3JvdXBMYW5lQ29udGVudD86IENhbGVuZGFyVGVtcGxhdGVSZWY8J3Jlc291cmNlR3JvdXBMYW5lQ29udGVudCc+O1xuXG4gIHByaXZhdGUgY2FsZW5kYXI6IENhbGVuZGFyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgb3B0aW9uU25hcHNob3Q6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTsgLy8gZm9yIGRpZmZpbmdcbiAgcHJpdmF0ZSBoYW5kbGVDdXN0b21SZW5kZXJpbmc6IChjdXN0b21SZW5kZXJpbmc6IEN1c3RvbVJlbmRlcmluZzxhbnk+KSA9PiB2b2lkXG4gIHByaXZhdGUgY3VzdG9tUmVuZGVyaW5nTWFwID0gbmV3IE1hcDxzdHJpbmcsIEN1c3RvbVJlbmRlcmluZzxhbnk+PigpXG4gIHByaXZhdGUgY3VzdG9tUmVuZGVyaW5nQXJyYXk/OiBDdXN0b21SZW5kZXJpbmc8YW55PltdXG4gIHB1YmxpYyB0ZW1wbGF0ZU1hcDogeyBbdGVtcGxhdGVOYW1lOiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgY29uc3QgY3VzdG9tUmVuZGVyaW5nU3RvcmUgPSBuZXcgQ3VzdG9tUmVuZGVyaW5nU3RvcmUoKTtcblxuICAgIGN1c3RvbVJlbmRlcmluZ1N0b3JlLnN1YnNjcmliZSgoY3VzdG9tUmVuZGVyaW5nTWFwKSA9PiB7XG4gICAgICB0aGlzLmN1c3RvbVJlbmRlcmluZ01hcCA9IGN1c3RvbVJlbmRlcmluZ01hcDtcbiAgICAgIHRoaXMuY3VzdG9tUmVuZGVyaW5nQXJyYXkgPSB1bmRlZmluZWQ7IC8vIGNsZWFyIGNhY2hlXG4gICAgICBjaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmhhbmRsZUN1c3RvbVJlbmRlcmluZyA9IGN1c3RvbVJlbmRlcmluZ1N0b3JlLmhhbmRsZS5iaW5kKGN1c3RvbVJlbmRlcmluZ1N0b3JlKTtcbiAgICB0aGlzLnRlbXBsYXRlTWFwID0gdGhpcyBhcyBhbnk7IC8vIGFsaWFzIHRvIHRoaXNcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCB7IGRlZXBDaGFuZ2VEZXRlY3Rpb24gfSA9IHRoaXM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIC4uLnRoaXMub3B0aW9ucyxcbiAgICAgIC4uLnRoaXMuYnVpbGRJbnB1dE9wdGlvbnMoKSxcbiAgICB9O1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBzbmFwc2hvdFxuICAgIHRoaXMub3B0aW9uU25hcHNob3QgPSBtYXBIYXNoKG9wdGlvbnMsIChvcHRpb25WYWw6IGFueSwgb3B0aW9uTmFtZTogc3RyaW5nKSA9PiAoXG4gICAgICAoZGVlcENoYW5nZURldGVjdGlvbiAmJiBPUFRJT05fSVNfREVFUFtvcHRpb25OYW1lXSlcbiAgICAgICAgPyBkZWVwQ29weShvcHRpb25WYWwpXG4gICAgICAgIDogb3B0aW9uVmFsXG4gICAgKSk7XG5cbiAgICBjb25zdCBjYWxlbmRhckVsID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICBjb25zdCBjYWxlbmRhciA9IHRoaXMuY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIC4uLnRoaXMuYnVpbGRFeHRyYU9wdGlvbnMoKSxcbiAgICB9KTtcblxuICAgIC8vIElvbmljIGRpbWVuc2lvbnMgaGFja1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mdWxsY2FsZW5kYXIvZnVsbGNhbGVuZGFyL2lzc3Vlcy80OTc2XG4gICAgY29uc3QgaW9uQ29udGVudCA9IGNhbGVuZGFyRWwuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKVxuICAgIGlmIChpb25Db250ZW50ICYmIGlvbkNvbnRlbnQuY29tcG9uZW50T25SZWFkeSkge1xuICAgICAgaW9uQ29udGVudC5jb21wb25lbnRPblJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIGNhbGVuZGFyLnJlbmRlcigpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxlbmRhci5yZW5kZXIoKVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gIGFsbG93cyB1cyB0byBtYW51YWxseSBkZXRlY3QgY29tcGxleCBpbnB1dCBjaGFuZ2VzLCBpbnRlcm5hbCBtdXRhdGlvbnMgdG8gY2VydGFpbiBvcHRpb25zLlxuICBjYWxsZWQgYmVmb3JlIG5nT25DaGFuZ2VzLiBjYWxsZWQgbXVjaCBtb3JlIG9mdGVuIHRoYW4gbmdPbkNoYW5nZXMuXG4gICovXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5jYWxlbmRhcikgeyAvLyBub3QgdGhlIGluaXRpYWwgcmVuZGVyXG4gICAgICBjb25zdCB7IGRlZXBDaGFuZ2VEZXRlY3Rpb24sIG9wdGlvblNuYXBzaG90IH0gPSB0aGlzO1xuICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHtcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLFxuICAgICAgICAuLi50aGlzLmJ1aWxkSW5wdXRPcHRpb25zKCksXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3UHJvY2Vzc2VkT3B0aW9uczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuICAgICAgY29uc3QgY2hhbmdlZE9wdGlvbk5hbWVzOiBzdHJpbmdbXSA9IFtdXG5cbiAgICAgIC8vIGRldGVjdCBhZGRzIGFuZCB1cGRhdGVzIChhbmQgdXBkYXRlIHNuYXBzaG90KVxuICAgICAgZm9yIChjb25zdCBvcHRpb25OYW1lIGluIG5ld09wdGlvbnMpIHtcbiAgICAgICAgaWYgKG5ld09wdGlvbnMuaGFzT3duUHJvcGVydHkob3B0aW9uTmFtZSkpIHtcbiAgICAgICAgICBsZXQgb3B0aW9uVmFsID0gbmV3T3B0aW9uc1tvcHRpb25OYW1lIGFzIGtleW9mIENhbGVuZGFyT3B0aW9uc107XG5cbiAgICAgICAgICBpZiAoZGVlcENoYW5nZURldGVjdGlvbiAmJiBPUFRJT05fSVNfREVFUFtvcHRpb25OYW1lXSkge1xuICAgICAgICAgICAgaWYgKCFkZWVwRXF1YWwob3B0aW9uU25hcHNob3Rbb3B0aW9uTmFtZV0sIG9wdGlvblZhbCkpIHtcbiAgICAgICAgICAgICAgb3B0aW9uU25hcHNob3Rbb3B0aW9uTmFtZV0gPSBkZWVwQ29weShvcHRpb25WYWwpO1xuICAgICAgICAgICAgICBjaGFuZ2VkT3B0aW9uTmFtZXMucHVzaChvcHRpb25OYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wdGlvblNuYXBzaG90W29wdGlvbk5hbWVdICE9PSBvcHRpb25WYWwpIHtcbiAgICAgICAgICAgICAgb3B0aW9uU25hcHNob3Rbb3B0aW9uTmFtZV0gPSBvcHRpb25WYWw7XG4gICAgICAgICAgICAgIGNoYW5nZWRPcHRpb25OYW1lcy5wdXNoKG9wdGlvbk5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5ld1Byb2Nlc3NlZE9wdGlvbnNbb3B0aW9uTmFtZV0gPSBvcHRpb25WYWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2xkT3B0aW9uTmFtZXMgPSBPYmplY3Qua2V5cyhvcHRpb25TbmFwc2hvdCk7XG5cbiAgICAgIC8vIGRldGVjdCByZW1vdmFscyAoYW5kIHVwZGF0ZSBzbmFwc2hvdClcbiAgICAgIGZvciAoY29uc3Qgb3B0aW9uTmFtZSBvZiBvbGRPcHRpb25OYW1lcykge1xuICAgICAgICBpZiAoIShvcHRpb25OYW1lIGluIG5ld09wdGlvbnMpKSB7IC8vIGRvZXNuJ3QgZXhpc3QgaW4gbmV3IG9wdGlvbnM/XG4gICAgICAgICAgZGVsZXRlIG9wdGlvblNuYXBzaG90W29wdGlvbk5hbWVdO1xuICAgICAgICAgIGNoYW5nZWRPcHRpb25OYW1lcy5wdXNoKG9wdGlvbk5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkT3B0aW9uTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIucGF1c2VSZW5kZXJpbmcoKTtcbiAgICAgICAgdGhpcy5jYWxlbmRhci5yZXNldE9wdGlvbnMoe1xuICAgICAgICAgIC4uLm5ld1Byb2Nlc3NlZE9wdGlvbnMsXG4gICAgICAgICAgLi4udGhpcy5idWlsZEV4dHJhT3B0aW9ucygpLFxuICAgICAgICB9LCBjaGFuZ2VkT3B0aW9uTmFtZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5jYWxlbmRhcikgeyAvLyB0b28gZGVmZW5zaXZlP1xuICAgICAgdGhpcy5jYWxlbmRhci5yZXN1bWVSZW5kZXJpbmcoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jYWxlbmRhcikgeyAvLyB0b28gZGVmZW5zaXZlP1xuICAgICAgdGhpcy5jYWxlbmRhci5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNhbGVuZGFyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBnZXQgY3VzdG9tUmVuZGVyaW5ncygpOiBDdXN0b21SZW5kZXJpbmc8YW55PltdIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21SZW5kZXJpbmdBcnJheSB8fFxuICAgICAgKHRoaXMuY3VzdG9tUmVuZGVyaW5nQXJyYXkgPSBbLi4udGhpcy5jdXN0b21SZW5kZXJpbmdNYXAudmFsdWVzKCldKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBcGkoKTogQ2FsZW5kYXIge1xuICAgIHJldHVybiB0aGlzLmNhbGVuZGFyITtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRJbnB1dE9wdGlvbnMoKTogQ2FsZW5kYXJPcHRpb25zIHtcbiAgICBjb25zdCBvcHRpb25zOiBDYWxlbmRhck9wdGlvbnMgPSB7fVxuXG4gICAgZm9yIChjb25zdCBpbnB1dE5hbWUgb2YgT1BUSU9OX0lOUFVUX05BTUVTKSB7XG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gKHRoaXMgYXMgYW55KVtpbnB1dE5hbWVdO1xuXG4gICAgICBpZiAoaW5wdXRWYWx1ZSAhPSBudWxsKSB7IC8vIGV4Y2x1ZGUgYm90aCBudWxsIGFuZCB1bmRlZmluZWRcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KVtpbnB1dE5hbWVdID0gaW5wdXRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRFeHRyYU9wdGlvbnMoKTogQ2FsZW5kYXJPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFuZGxlQ3VzdG9tUmVuZGVyaW5nOiB0aGlzLmhhbmRsZUN1c3RvbVJlbmRlcmluZyxcbiAgICAgIGN1c3RvbVJlbmRlcmluZ01ldGFNYXA6IHRoaXMudGVtcGxhdGVNYXAsXG4gICAgICBjdXN0b21SZW5kZXJpbmdSZXBsYWNlc0VsOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICAvLyBmb3IgYHRyYWNrQnlgIGluIGxvb3BcbiAgdHJhY2tDdXN0b21SZW5kZXJpbmcoaW5kZXg6IG51bWJlciwgY3VzdG9tUmVuZGVyaW5nOiBDdXN0b21SZW5kZXJpbmc8YW55Pik6IGFueSB7XG4gICAgcmV0dXJuIGN1c3RvbVJlbmRlcmluZy5pZFxuICB9XG59XG4iLCI8b2Zmc2NyZWVuLWZyYWdtZW50PlxuICA8dHJhbnNwb3J0LWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY3VzdG9tUmVuZGVyaW5nIG9mIGN1c3RvbVJlbmRlcmluZ3M7IHRyYWNrQnk6dHJhY2tDdXN0b21SZW5kZXJpbmdcIlxuICAgIFtpblBsYWNlT2ZdPVwiY3VzdG9tUmVuZGVyaW5nLmNvbnRhaW5lckVsXCJcbiAgICBbcmVwb3J0RWxdPVwiY3VzdG9tUmVuZGVyaW5nLnJlcG9ydE5ld0NvbnRhaW5lckVsXCJcbiAgICBbZWxUYWddPVwiY3VzdG9tUmVuZGVyaW5nLmVsVGFnXCJcbiAgICBbZWxDbGFzc2VzXT1cImN1c3RvbVJlbmRlcmluZy5lbENsYXNzZXNcIlxuICAgIFtlbFN0eWxlXT1cImN1c3RvbVJlbmRlcmluZy5lbFN0eWxlXCJcbiAgICBbZWxBdHRyc109XCJjdXN0b21SZW5kZXJpbmcuZWxBdHRyc1wiXG4gICAgW3RlbXBsYXRlXT1cInRlbXBsYXRlTWFwW2N1c3RvbVJlbmRlcmluZy5nZW5lcmF0b3JOYW1lXSFcIlxuICAgIFtyZW5kZXJQcm9wc109XCJjdXN0b21SZW5kZXJpbmcucmVuZGVyUHJvcHNcIlxuICA+PC90cmFuc3BvcnQtY29udGFpbmVyPlxuPC9vZmZzY3JlZW4tZnJhZ21lbnQ+XG4iXX0=