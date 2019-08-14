import {TouchStoredHandlers} from "./directives/touch/index";

declare global {
    interface HTMLElement {
        _clickOutside?: EventListenerOrEventListenerObject
        _onResize?: {
            callback: () => void
            options?: boolean | AddEventListenerOptions
        }
        _ripple?: {
            enabled?: boolean
            centered?: boolean
            class?: string
            circle?: boolean
            touched?: boolean
            isTouch?: boolean
        }
        _onScroll?: {
            callback: EventListenerOrEventListenerObject
            options: boolean | AddEventListenerOptions
            target: EventTarget
        }
        _touchHandlers?: {
            [_uid: number]: TouchStoredHandlers
        }
    }
}
