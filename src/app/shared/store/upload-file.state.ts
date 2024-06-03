import { Injectable, Signal, WritableSignal, computed, signal } from "@angular/core"

interface State {
    filePreview: string
}

const UPLOAD_NULL_STATE = {
    filePreview: ''
}

@Injectable({
    providedIn: 'root'
})
export class UploadFileState {
    #state: WritableSignal<State> = signal<State>(UPLOAD_NULL_STATE);

    filePreview: Signal<string> = computed(() => this.#state().filePreview);

    setState(state: State) {
        this.#state.set(state)
    }

}