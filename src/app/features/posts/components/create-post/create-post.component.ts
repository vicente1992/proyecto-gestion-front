import { Component, inject } from '@angular/core';
import { ModalCreatePostComponent } from '../modal-create-post/modal-create-post.component';
import { ModalService } from '@core/services/modal.service';
import { UserAvatarComponent } from '@shared/components/user-avatar/user-avatar.component';


@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss'],
    standalone: true,
    imports: [UserAvatarComponent]
})
export class CreatePostComponent {
    private modalService = inject(ModalService)

    openModal() {
        this.modalService.openDialog(ModalCreatePostComponent)
    }
}
