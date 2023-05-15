import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare const CHECKBOX_VALUE_ACCESSOR: any;
export declare class Checkbox implements ControlValueAccessor {
    cd: ChangeDetectorRef;
    value: any;
    name: string;
    disabled: boolean;
    binary: boolean;
    label: string;
    ariaLabelledBy: string;
    ariaLabel: string;
    tabindex: number;
    inputId: string;
    style: any;
    styleClass: string;
    labelStyleClass: string;
    formControl: FormControl;
    checkboxIcon: string;
    readonly: boolean;
    required: boolean;
    trueValue: any;
    falseValue: any;
    inputViewChild: ElementRef;
    onChange: EventEmitter<any>;
    model: any;
    onModelChange: Function;
    onModelTouched: Function;
    focused: boolean;
    constructor(cd: ChangeDetectorRef);
    onClick(event: any, checkbox: any, focus: boolean): void;
    updateModel(event: any): void;
    handleChange(event: any): void;
    onFocus(): void;
    onBlur(): void;
    focus(): void;
    writeValue(model: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    checked(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Checkbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Checkbox, "p-checkbox", never, { "value": "value"; "name": "name"; "disabled": "disabled"; "binary": "binary"; "label": "label"; "ariaLabelledBy": "ariaLabelledBy"; "ariaLabel": "ariaLabel"; "tabindex": "tabindex"; "inputId": "inputId"; "style": "style"; "styleClass": "styleClass"; "labelStyleClass": "labelStyleClass"; "formControl": "formControl"; "checkboxIcon": "checkboxIcon"; "readonly": "readonly"; "required": "required"; "trueValue": "trueValue"; "falseValue": "falseValue"; }, { "onChange": "onChange"; }, never, never, false, never>;
}
export declare class CheckboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CheckboxModule, [typeof Checkbox], [typeof i1.CommonModule], [typeof Checkbox]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CheckboxModule>;
}
