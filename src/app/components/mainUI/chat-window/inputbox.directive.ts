import { Directive, HostBinding, HostListener, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[textInputBox]'
})
export class InputBoxDirective implements OnInit {
    constructor(
        private elementRef: ElementRef
    ) {

    }

    ngOnInit() {
        // console.log(this.elementRef);
    }
    private resizeBox(element) {
        const scrollHeight = element.scrollHeight;
        if (scrollHeight > 170) {
            element.style.overflowY = 'auto'
        } else {
            element.style.overflowY = 'hidden';
        }
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px';
    }
    @HostListener('keyup', ['$event'])
    onKeyUp(event: any) {
        console.log(event);
        this.resizeBox(this.elementRef.nativeElement);
    }
    @HostListener('paste', ['$event'])
    onPaste(event: any) {
        this.resizeBox(this.elementRef.nativeElement);
    }
    @HostListener('cut', ['$event'])
    onCut(event: any) {
        this.resizeBox(this.elementRef.nativeElement);
    }
    @HostListener('change', ['$event'])
    onChange(event: any) {
        this.resizeBox(this.elementRef.nativeElement);
    }
    @HostListener('drop', ['$event'])
    onDrop(event: any) {
        this.resizeBox(this.elementRef.nativeElement);
    }
}