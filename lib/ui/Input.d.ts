import type { EventsHandler } from "../Events";
import { View } from './View';
import type { IViewParams, ViewEventsList } from './View';
interface IInputParams extends IViewParams {
    label?: string;
    value?: string;
    min?: number;
    max?: number;
    type?: string;
    maxFixed?: number;
}
type InputEventsList = ["change"];
declare class Input extends View<null> {
    events: EventsHandler<InputEventsList> & EventsHandler<ViewEventsList>;
    protected _value: string;
    protected $label: HTMLElement | null;
    protected $input: HTMLInputElement | null;
    protected _maxFixed: number;
    constructor(options?: IInputParams);
    render(params: any): this;
    protected _onResize: () => void;
    set value(val: string | number);
    protected _setValue(val: string | number): void;
    get value(): string;
    protected _initEvents(): void;
    protected _clearEvents(): void;
    protected _onMouseWheel: (e: WheelEvent) => void;
    protected _onMouseWheelFF: (e: WheelEvent) => void;
    protected _onInput: (e: Event) => void;
    remove(): void;
    set visibility(visibility: boolean);
}
export { Input };
