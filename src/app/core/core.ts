import { Provider } from "@angular/core";
import { ModalService } from "./services/modal.service";
import { LocalStorageService } from "./services/local-storage.service";
import { HttpService } from "./services/http.service";
import { UserService } from "./services/user.service";
import { AuthService } from "@features/auth/shared/services/auth.service";

export function provideCore(): Provider[] {
    return [
        ModalService,
        LocalStorageService,
        UserService,
        AuthService,
        HttpService,

    ];
}
