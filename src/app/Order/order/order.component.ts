import { Component } from '@angular/core';
//import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  Delete(){
    
  }
 /* constructor(private toastr: ToastrService) { }
  confirmDelete(): void {
    this.toastr.warning('Are you sure you want to delete this item?', 'Confirmation', {
      timeOut: 5000, // Durée d'affichage en millisecondes (5 secondes dans cet exemple)
      closeButton: true, // Affiche un bouton de fermeture
      progressBar: true // Affiche une barre de progression
    }).onTap.subscribe(() => {
      // Si l'utilisateur clique sur la boîte de dialogue, effectuez l'action de suppression ici
      // par exemple, this.service.deleteItem(itemID);
    });
  }
*/
}