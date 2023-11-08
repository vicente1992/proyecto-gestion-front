import { Provider } from "@angular/core";
import { ModalService } from "./services/modal.service";

export function provideCore(): Provider[] {
    return [
        ModalService
        // array of providers
    ];
}
