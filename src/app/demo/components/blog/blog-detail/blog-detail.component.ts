import { Component } from '@angular/core';
import { Comment } from 'src/app/demo/api/blog';

@Component({
    templateUrl: './blog-detail.component.html'
})
export class BlogDetailComponent {

    comments: Comment[] = [
        {
            image: "assets/demo/images/avatar/circle/avatar-f-3@2x.png",
            name: "Ameni mdaisi",
            date: "03 February 2022",
            description: "ma3neha on n'as pas besoin d'internet pour controller les appareils connectés ?"
        },
        {
            image: "assets/demo/images/avatar/circle/avatar-f-1@2x.png",
            name: "Esther Howard",
            date: "03 February 2022",
            description: "Oui, tu as besoin d'internet pour les controller wenti mouch fi dar."
        },
        {
            image: "assets/demo/images/avatar/circle/avatar-f-4@2x.png",
            name: "Darlene Robertson",
            date: "03 February 2022",
            description: "Quo quia sit nihil nemo doloremque et."
        },
        {
            image: "assets/demo/images/avatar/circle/avatar-f-5@2x.png",
            name: "Esther Howard",
            date: "03 February 2022",
            description: "How likely are you to recommend our company to your friends and family ?"
        }
    ];

}
