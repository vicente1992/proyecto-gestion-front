import { Provider } from "@angular/core";
import { ModalService } from "./services/modal/modal.service";
import { MatDialogModule } from "@angular/material/dialog";

export function provideCore(): Provider[] {
    return [
        ModalService
        // array of providers
    ];
}
