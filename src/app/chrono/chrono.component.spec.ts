import {async, TestBed} from "@angular/core/testing";
import {DecToStrPipe} from "../dec-to-str.pipe";
import {ChronoComponent} from "./chrono.component";

describe("ChronoComponent", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ChronoComponent,
                DecToStrPipe
            ]
        }).compileComponents();
    }));

    it("should create a chrono component", async(() => {
        const fixture = TestBed.createComponent(ChronoComponent);
        const chrono = fixture.debugElement.componentInstance;
        expect(chrono).toBeTruthy();
    }));

    describe("when the chrono is initialized", () => {
        let fixture, cmp, compiled;
        beforeEach(() => {
            fixture = TestBed.createComponent(ChronoComponent);
            fixture.detectChanges();
            cmp = fixture.debugElement.componentInstance;
            compiled = fixture.debugElement.nativeElement;
        });

        it("should display the time in the chrono", () => {
            expect(compiled.querySelector(".times").textContent).toContain("00:00,00");
        });
    });
});
