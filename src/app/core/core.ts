import { Provider } from "@angular/core";
import { ModalService } from "./services/modal.service";
import { LocalStorageService } from "./services/local-storage.service";
import { HttpService } from "./services/http.service";
import { UserService } from "./services/user.service";

export function provideCore(): Provider[] {
    return [
        ModalService,
        LocalStorageService,
        UserService,
        HttpService
    ];
}
